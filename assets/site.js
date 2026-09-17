/* Tate Summers — renders pages from content.js. You shouldn't need to edit this file. */
(function () {
  const S = window.SITE;
  const page = document.body.dataset.page || "home";
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const src = (img) => (typeof img === "string" ? img : img.src);
  const altOf = (img, fallback) => (typeof img === "object" && img.alt) || fallback;
  const [first, ...rest] = S.name.split(" ");

  // ---------- header / footer ----------
  const header = document.querySelector(".site-header");
  header.innerHTML = `
    <nav class="nav" aria-label="Main">
      <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""}>Work</a>
      <a href="contact.html" ${page === "contact" ? 'aria-current="page"' : ""}>Contact</a>
    </nav>
    <a class="logo" href="index.html" aria-label="${esc(S.name)} — home"><span>${esc(first)}</span><span>${esc(rest.join(" "))}</span></a>
    <div class="spacer"></div>`;

  document.querySelector(".site-footer").innerHTML = `${esc(S.footer)} · ${new Date().getFullYear()}`;

  const main = document.querySelector("main");

  const tile = (p, eager) => `
    <a class="tile" href="${esc(p.slug)}.html">
      <img src="images/${esc(p.slug)}/thumb/${esc(p.cover)}" alt="" ${eager ? "" : 'loading="lazy"'} decoding="async">
      <span class="label"><strong>${esc(p.title)}</strong><small>${esc(p.year || "")}</small></span>
    </a>`;

  // ---------- pages ----------
  if (page === "home") {
    document.title = S.title;
    main.innerHTML = `<h1 class="page-title" style="position:absolute;left:-9999px">Work</h1>
      <div class="work-grid">${S.projects.map((p, i) => tile(p, i < 4)).join("")}</div>`;
  } else if (page === "contact") {
    document.title = `Contact — ${S.name}`;
    const phone = S.phone
      ? `<span class="sep">|</span><a href="tel:${esc(S.phone.replace(/[^\d+]/g, ""))}">${esc(S.phone)}</a>`
      : "";
    main.innerHTML = `
      <h1 class="page-title">Contact</h1>
      <div class="contact">
        <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>${phone}
        <div><a class="button" href="mailto:${esc(S.email)}?subject=${encodeURIComponent("Hello from your portfolio")}">Send an email</a></div>
      </div>`;
  } else {
    const idx = S.projects.findIndex((p) => p.slug === page);
    const p = S.projects[idx];
    if (!p) {
      main.innerHTML = `<h1 class="page-title">Page not found</h1><p style="text-align:center"><a href="index.html">Back to work</a></p>`;
      return;
    }
    document.title = `${p.title} — ${S.name}`;
    let n = 0;
    const sections = p.sections
      .map((sec) => {
        const imgs = sec.images || [];
        const cls = `gallery layout-${sec.layout || "stack"} count-${imgs.length}${sec.narrow ? " narrow" : ""}`;
        const items = imgs
          .map((img) => {
            const i = n++;
            const alt = altOf(img, `${p.title}${sec.heading ? " — " + sec.heading : ""}, photo ${i + 1}`);
            const file = src(img);
            const thumb = ["grid", "pair", "masonry"].includes(sec.layout) ? "thumb" : "full";
            return `<button type="button" data-i="${i}" aria-label="Enlarge: ${esc(alt)}">
              <img src="images/${esc(p.slug)}/${thumb}/${esc(file)}" data-full="images/${esc(p.slug)}/full/${esc(file)}" alt="${esc(alt)}" loading="${i < 2 ? "eager" : "lazy"}" decoding="async">
            </button>`;
          })
          .join("");
        return `<section class="section">
          ${sec.heading ? `<h2>${esc(sec.heading)}</h2>` : ""}
          ${sec.text ? `<p>${esc(sec.text)}</p>` : ""}
          ${imgs.length ? `<div class="${cls}">${items}</div>` : ""}
        </section>`;
      })
      .join("");
    const others = [1, 2, 3].map((k) => S.projects[(idx + k) % S.projects.length]).filter((o) => o !== p);
    main.innerHTML = `
      <h1 class="page-title">${esc(p.title)}</h1>
      ${sections}
      <aside class="more"><h3>More work</h3><div class="work-grid">${others.map((o) => tile(o)).join("")}</div></aside>`;
    setupLightbox();
  }

  // ---------- back to top ----------
  const top = document.createElement("button");
  top.className = "to-top";
  top.type = "button";
  top.setAttribute("aria-label", "Back to top");
  top.textContent = "↑";
  top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.body.appendChild(top);
  addEventListener("scroll", () => top.classList.toggle("show", scrollY > 600), { passive: true });

  // ---------- lightbox ----------
  function setupLightbox() {
    const imgs = [...main.querySelectorAll(".gallery img")];
    if (!imgs.length) return;
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Photo viewer");
    lb.innerHTML = `<img alt="">
      <button class="lb-close" type="button" aria-label="Close">×</button>
      <button class="lb-prev" type="button" aria-label="Previous photo">‹</button>
      <button class="lb-next" type="button" aria-label="Next photo">›</button>
      <div class="lb-count" aria-live="polite"></div>`;
    document.body.appendChild(lb);
    const big = lb.querySelector("img");
    const count = lb.querySelector(".lb-count");
    let cur = 0, opener = null;

    const show = (i) => {
      cur = (i + imgs.length) % imgs.length;
      big.src = imgs[cur].dataset.full;
      big.alt = imgs[cur].alt;
      count.textContent = `${cur + 1} / ${imgs.length}`;
      [cur - 1, cur + 1].forEach((j) => { const pre = new Image(); pre.src = imgs[(j + imgs.length) % imgs.length].dataset.full; });
    };
    const open = (i, btn) => { opener = btn; show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; lb.querySelector(".lb-close").focus(); };
    const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; big.src = ""; opener && opener.focus(); };

    main.querySelectorAll(".gallery button").forEach((b) => b.addEventListener("click", () => open(+b.dataset.i, b)));
    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); show(cur - 1); });
    lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); show(cur + 1); });
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    big.addEventListener("click", () => show(cur + 1));
    addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(cur + 1);
      else if (e.key === "ArrowLeft") show(cur - 1);
      else if (e.key === "Tab") {
        const f = [...lb.querySelectorAll("button")].filter((x) => x.offsetParent);
        const k = f.indexOf(document.activeElement);
        if (e.shiftKey && k <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && k === f.length - 1) { e.preventDefault(); f[0].focus(); }
      }
    });
    let x0 = null;
    lb.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }
})();
