# summersdesigns.com — Tate Summers portfolio

A plain static website: HTML, CSS and a little JavaScript. There is no build step and nothing to install, and it's hosted free on GitHub Pages.

## What's in this folder

| File / folder | What it is |
|---|---|
| `content.js` | **All the text and photo lists. This is the file you edit.** |
| `images/<project>/full/` | Large photos (about 1600 px), used in the photo viewer and full-width layouts. `<project>` is the page's slug, e.g. `glasswork` |
| `images/<project>/thumb/` | Small copies (about 800 px) with the same file names, used in grids and on the home page |
| `index.html`, `contact.html`, `<project>.html` | Small page shells. Each one just names its page with `data-page="..."` |
| `assets/` | Styles (`style.css`), page code (`site.js`), browser-tab icon |
| `CNAME` | Tells GitHub Pages to serve the site at summersdesigns.com |
| `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` | Hosting housekeeping. Leave these as they are |

## Common edits

**Change text.** Open `content.js` and edit the words between the quote marks.

**Add a photo to a project.**
1. Make a large copy (about 1600 px on the long side) and a small copy (about 800 px), both with the same name, for example `gl-vase-05.jpg`.
2. Put the large copy in `images/<project>/full/` and the small copy in `images/<project>/thumb/` (for example `images/glasswork/full/`).
3. In `content.js`, add `"gl-vase-05.jpg",` to the `images` list where you want it to appear.

**Add a new project page.**
1. In `content.js`, copy a whole project block, from `{` to `},`, and paste it where you want the project in the list. Change `slug` (lowercase, dashes, no spaces), `title`, `year`, `cover` and `sections`.
2. Copy any project page, such as `jewelry.html`, and rename the copy to `<slug>.html`.
3. In the new file, change `data-page="jewelry"` to `data-page="<slug>"`, and update the `<title>`.
4. Create the folders `images/<slug>/full` and `images/<slug>/thumb` for its photos.
5. Optionally, add the new page to `sitemap.xml`.

**Section layouts.** Each section can use one of these:
- `"stack"`: photos full width, one under another
- `"grid"`: square thumbnails in 2–3 columns
- `"pair"`: two square photos side by side
- `"masonry"`: photos keep their natural shape, arranged in columns (used on the photography pages)

Every photo opens in a full-screen viewer when clicked. You can move between photos with the arrow keys or by swiping.

**Alt text.** You can describe a photo for screen readers by writing it as `{ src: "file.jpg", alt: "Description" }` instead of just `"file.jpg"`.

## Preview on your Mac

Double-click `index.html` to open it in a browser. Everything works except the 404 page.

## Publishing (GitHub Pages)

1. Create a repository on github.com (for example `summersdesigns`) and upload **the contents of this folder**, so `index.html` sits at the top level of the repository. The web uploader takes at most 100 files per upload, so upload the top-level files and `assets` first, then the project folders inside `images` a few at a time (each project folder has fewer than 60 files).
2. In the repository, go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, then **main** and **/ (root)**, and click **Save**.
3. **Custom domain.** In the same Pages settings, type `summersdesigns.com` and click **Save**. The `CNAME` file already contains it.
4. **DNS.** At the company where summersdesigns.com is registered, set these records:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - A `CNAME` record for `www` pointing to `<github-username>.github.io`
   - **Do not change any `MX` or email-related records.** Those keep tate@summersdesigns.com working.
5. Once the DNS change takes effect (anywhere from minutes to a few hours), go back to Settings → Pages and check **Enforce HTTPS**.
6. After that, any change you commit on github.com goes live within about a minute.

## Photo sources

The photos came from the original Adobe Portfolio site. The full-resolution originals are kept outside this repository, in `~/Sites/summersdesigns-tate/tate-portfolio-photos/`.
