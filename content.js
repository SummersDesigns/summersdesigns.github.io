/*
  ============================================================
  SITE CONTENT — edit this file to change the website.
  ============================================================

  • Text: change anything between the quote marks.
  • Photos: each project keeps its photos in images/<slug>/ —
    a large copy (~1600px) in images/<slug>/full/ AND a small copy
    (~800px) in images/<slug>/thumb/ with the SAME file name.
    Then list the file name in that project below.
  • New project page: copy one whole { ... } block inside
    "projects", give it a new "slug", then copy any existing
    project .html file (e.g. jewelry.html), rename it to
    <slug>.html, change data-page="..." inside it to the slug, and
    make the folders images/<slug>/full and images/<slug>/thumb.
  • Order of projects here = order on the home page.
  • "layout" options for a section:
      "stack"   – photos full width, one under another
      "grid"    – square thumbnails in a 2–4 column grid
      "pair"    – two square photos side by side
      "masonry" – photos keep their natural shape, in columns
*/

window.SITE = {
  name: "Tate Summers",
  title: "Tate Summers — Portfolio",
  description:
    "Portfolio of Tate Summers: design & technology, jewelry, glasswork, digital and film photography, and wood joinery.",
  email: "tate@summersdesigns.com",
  phone: "510-593-8119", // set to "" to hide the phone number
  footer: "© Tate Summers",

  projects: [
    {
      slug: "design-technology",
      title: "Design & Technology",
      year: "2024",
      cover: "dt-egg-01.jpg",
      sections: [
        {
          heading: "Dragon's Egg Lamp",
          text:
            "This project was part of a freshman year design class, and involved CNC plasma cutting, laser cutting of acrylic, MIG welding, and some woodwork. My design was based on a dragon's egg, and was approached from a more geometric perspective to make the project both feasible and unique. Because of the polish of the metal and the thin openings in the egg, the light positioned inside was often diffracted.",
          layout: "stack",
          images: [
            "dt-egg-01.jpg",
            "dt-egg-02.jpg",
            "dt-egg-04.jpg",
            "dt-egg-05.jpg",
          ],
        },
        {
          layout: "grid",
          images: ["dt-egg-06.jpg", "dt-egg-07.jpg", "dt-egg-08.jpg"],
        },
        {
          heading: "Eagle Sculpture",
          layout: "stack",
          images: ["dt-eagle-01.jpg"],
        },
        {
          layout: "grid",
          images: [
            "dt-eagle-02.jpg",
            "dt-eagle-03.jpg",
            "dt-eagle-04.jpg",
            "dt-eagle-05.jpg",
            "dt-eagle-06.jpg",
            "dt-eagle-07.jpg",
            "dt-eagle-08.jpg",
            "dt-eagle-09.jpg",
          ],
        },
        {
          heading: "Side Projects",
          layout: "pair",
          images: ["dt-side-01.jpg", "dt-side-02.jpg"],
        },
      ],
    },

    {
      slug: "jewelry",
      title: "Jewelry",
      year: "2024",
      cover: "jw-rings-01.jpg",
      sections: [
        {
          layout: "stack",
          images: ["jw-rings-01.jpg"],
        },
        {
          text:
            "This is a series of rings I have produced through varying methods. The front ring is solid 9K gold cast in the shape of a twisted square torus that I parametrically modeled using a program called Grasshopper. The ring on the left is cast in sterling silver in a woven knot shape I designed in the same program using a series of plugins and many iterations. The third and final ring in this image is a simple 925 sterling silver band that I formed into a loop, soldered, and stamped my initials into. I also applied an abstract, irregular scratch pattern to the outside before applying a patina with liver of sulfur and shining to achieve contrast with the pattern and initials.",
          layout: "grid",
          images: ["jw-rings-02.jpg", "jw-rings-03.jpg", "jw-rings-04.jpg"],
        },
      ],
    },

    {
      slug: "glasswork",
      title: "Glasswork",
      year: "2024",
      cover: "gl-vase-01.jpg",
      sections: [
        {
          heading: "Glass Slumping",
          text:
            "Vases formed with slumped glass and frit (powdered glass) shaped into loose, orchid-like floral patterns.",
          layout: "grid",
          images: [
            "gl-vase-01.jpg",
            "gl-vase-02.jpg",
            "gl-vase-03.jpg",
            "gl-vase-04.jpg",
          ],
        },
        {
          text:
            "A bowl made from tri-colored glass fused together and then slumped over a mold, forming a natural and rounded edge.",
          layout: "stack",
          images: ["gl-bowl-01.jpg"],
        },
        {
          layout: "pair",
          images: ["gl-bowl-02.jpg", "gl-bowl-03.jpg"],
        },
        {
          heading: "Glass Checkerboard",
          text:
            "These two pieces belong to a glass checkerboard I designed and fused. I loved the way the light played on these particular types of glass. Though the effect is difficult to see on camera, both pieces take on a metallic sheen from most viewing angles.",
          layout: "pair",
          images: ["gl-checker-01.jpg", "gl-checker-02.jpg"],
        },
        {
          heading: "Glass Flameworking",
          text:
            "A collection of my various glass flameworking projects, including marbles of two sizes, various artistic paperweights, and a large variety of glass mushrooms with different designs.",
          layout: "grid",
          images: [
            "gl-flame-01.jpg",
            "gl-flame-02.jpg",
            "gl-flame-03.jpg",
            "gl-flame-04.jpg",
            "gl-flame-05.jpg",
            "gl-flame-06.jpg",
          ],
        },
        {
          layout: "stack",
          images: ["gl-flame-07.jpg", "gl-flame-09.jpg", "gl-flame-08.jpg"],
        },
      ],
    },

    {
      slug: "photography-digital",
      title: "Photography (Digital)",
      year: "2024",
      cover: "ph-digital-01.jpg",
      sections: [
        {
          layout: "masonry",
          images: [
            "ph-digital-01.jpg", "ph-digital-02.jpg", "ph-digital-03.jpg",
            "ph-digital-04.jpg", "ph-digital-05.jpg", "ph-digital-06.jpg",
            "ph-digital-07.jpg", "ph-digital-08.jpg", "ph-digital-09.jpg",
            "ph-digital-10.jpg", "ph-digital-11.jpg", "ph-digital-12.jpg",
            "ph-digital-13.jpg", "ph-digital-14.jpg", "ph-digital-15.jpg",
            "ph-digital-16.jpg", "ph-digital-17.jpg", "ph-digital-18.jpg",
            "ph-digital-19.jpg", "ph-digital-20.jpg", "ph-digital-21.jpg",
            "ph-digital-22.jpg", "ph-digital-23.jpg", "ph-digital-24.jpg",
            "ph-digital-25.jpg", "ph-digital-26.jpg", "ph-digital-27.jpg",
            "ph-digital-28.jpg",
          ],
        },
      ],
    },

    {
      slug: "photography-film",
      title: "Photography (Film)",
      year: "2024",
      cover: "ph-film-03.jpg",
      sections: [
        {
          layout: "masonry",
          images: [
            "ph-film-01.jpg", "ph-film-02.jpg", "ph-film-03.jpg",
            "ph-film-04.jpg", "ph-film-05.jpg", "ph-film-06.jpg",
            "ph-film-07.jpg", "ph-film-08.jpg", "ph-film-09.jpg",
            "ph-film-10.jpg", "ph-film-11.jpg", "ph-film-12.jpg",
            "ph-film-13.jpg", "ph-film-14.jpg", "ph-film-15.jpg",
            "ph-film-16.jpg", "ph-film-17.jpg",
          ],
        },
        {
          heading: "Negatives",
          layout: "masonry",
          images: [
            "ph-neg-01.jpg", "ph-neg-02.jpg", "ph-neg-03.jpg",
            "ph-neg-04.jpg", "ph-neg-05.jpg", "ph-neg-06.jpg",
            "ph-neg-07.jpg", "ph-neg-08.jpg",
          ],
        },
      ],
    },

    {
      slug: "wood-joinery-turning",
      title: "Wood Joinery + Turning",
      year: "2024",
      cover: "wd-vessel-01.jpg",
      sections: [
        {
          heading: "Wood-Turned Vessel",
          text:
            "A vessel made of walnut and maple, formed into a complex diamond pattern and arrayed into rings, then attached to a CNC-machined base I designed in Rhino to evoke a flower or sunburst. Final shaping and sanding were done on the lathe.",
          layout: "stack",
          images: ["wd-vessel-01.jpg"],
        },
        {
          layout: "grid",
          images: ["wd-vessel-02.jpg", "wd-vessel-03.jpg", "wd-vessel-04.jpg"],
        },
        {
          heading: "Process",
          layout: "grid",
          images: [
            { src: "wd-process-01.jpg", alt: "Walnut and maple segments" },
            { src: "wd-process-02.jpg", alt: "Diamond-pattern strip laid out" },
            { src: "wd-process-03.jpg", alt: "CNC-machined base, designed in Rhino" },
            { src: "wd-process-04.jpg", alt: "Rings and inlaid base glued up" },
            { src: "wd-process-05.jpg", alt: "Final shaping on the lathe" },
          ],
        },
        {
          heading: "Joinery",
          layout: "stack",
          narrow: true,
          images: ["wd-01.jpg"],
        },
      ],
    },
  ],
};
