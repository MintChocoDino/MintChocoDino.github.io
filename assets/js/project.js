/* ===========================================================================
   Project detail page. Reads ?id= from the URL and renders that entry.
   Registers itself on window so site.js calls it after the shared chrome is up.
   =========================================================================== */
window.PF_DETAIL = function () {
  "use strict";

  var PF = window.PF;
  var esc = PF.esc, has = PF.has;
  var list = PF.PROJECTS;

  var id = new URLSearchParams(window.location.search).get("id");
  var idx = list.findIndex(function (p) { return p.id === id; });
  var p = list[idx];

  var root = document.querySelector("[data-project]");
  if (!root) return;

  /* --- not found --------------------------------------------------------- */
  if (!p) {
    document.title = "Project not found — " + (PF.SITE.name || "");
    root.innerHTML =
      '<div class="wrap proj-head">' +
        '<a class="back" href="index.html"><span>←</span> All work</a>' +
        "<h1>Project not found</h1>" +
        '<p class="proj-head__summary">There is no project with the id ' +
          "<code>" + esc(id || "(none)") + "</code>. It may have been renamed or hidden.</p>" +
        '<div class="proj-head__links">' +
          '<a class="btn btn--accent" href="index.html">Back to all work</a>' +
        "</div>" +
      "</div>";
    return;
  }

  /* --- title / meta ------------------------------------------------------ */
  document.title = p.title + " — " + (PF.SITE.name || "");
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", p.summary || "");

  /* --- media renderers --------------------------------------------------- */

  function frame(inner, extraClass) {
    return '<div class="media__frame ' + (extraClass || "") + '">' + inner + "</div>";
  }

  function caption(m) {
    return has(m.caption) ? '<p class="media__caption">' + esc(m.caption) + "</p>" : "";
  }

  function mediaItem(m) {
    var inner;

    switch (m.type) {
      case "itch":
        inner = frame(
          '<iframe src="' + esc(m.src) + '" allowfullscreen ' +
          'title="' + esc(p.title) + ' — playable build" loading="lazy"></iframe>',
          "media__embed"
        );
        break;

      case "youtube":
        inner = frame(
          '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(m.src) + '" ' +
          'title="' + esc(p.title) + ' — video" loading="lazy" allowfullscreen ' +
          'allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"></iframe>',
          "media__embed"
        );
        break;

      case "local":
        inner = frame(
          '<iframe src="' + esc(m.src) + '" title="' + esc(p.title) + ' — playable" ' +
          'loading="lazy" allowfullscreen ' +
          'style="aspect-ratio:' + esc(m.ratio || "16/10") + ';height:auto"></iframe>'
        );
        break;

      case "video":
        inner = frame(
          "<video controls preload=\"metadata\" playsinline" +
          (has(m.poster) ? ' poster="' + esc(m.poster) + '"' : "") + ">" +
            '<source src="' + esc(m.src) + '" type="video/mp4">' +
            "Your browser cannot play this video." +
          "</video>"
        );
        break;

      case "image":
      default:
        inner = frame(
          '<img src="' + esc(m.src) + '" alt="' + esc(m.caption || p.title) + '" ' +
          'loading="lazy" decoding="async" style="width:100%">'
        );
    }

    return '<figure class="media__item reveal" style="margin:0 0 28px">' +
             inner + caption(m) +
           "</figure>";
  }

  function mediaHTML() {
    var items = p.media || [];
    if (items.length) return items.map(mediaItem).join("");

    // Nothing to show yet — say so honestly rather than rendering an empty gap.
    return '<div class="media__hint reveal">' +
             "<strong>Media coming soon</strong><br>" +
             "Screenshots and video for this project are being captured." +
           "</div>";
  }

  /* --- spec strip -------------------------------------------------------- */

  var specCells = [
    { k: "Year",   v: p.year },
    { k: "Engine", v: p.engine },
    { k: "Role",   v: p.role },
    { k: "Team",   v: p.team }
  ].filter(function (c) { return has(c.v); });

  var specHTML = specCells.length
    ? '<div class="proj-spec reveal">' + specCells.map(function (c) {
        return '<div class="proj-spec__cell">' +
                 '<div class="proj-spec__key">' + esc(c.k) + "</div>" +
                 '<div class="proj-spec__val">' + esc(c.v) + "</div>" +
               "</div>";
      }).join("") + "</div>"
    : "";

  /* --- body / built ------------------------------------------------------ */

  var prose = (p.body || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");

  var built = (p.built || []).filter(function (b) { return has(b); });
  var builtHTML = built.length
    ? '<div class="side-block reveal">' +
        '<div class="side-block__head">What I built</div>' +
        '<ul class="built">' + built.map(function (b) {
          return "<li>" + esc(b) + "</li>";
        }).join("") + "</ul>" +
      "</div>"
    : "";

  var tagsBlock = (p.tags || []).length
    ? '<div class="side-block reveal">' +
        '<div class="side-block__head">Systems &amp; skills</div>' +
        PF.tagsHTML(p.tags) +
      "</div>"
    : "";

  var projLinks = (p.links || []).filter(function (l) { return l && has(l.href); });
  var linksHTML = projLinks.length ? PF.linkButtons(projLinks) : "";

  /* --- prev / next ------------------------------------------------------- */

  var prev = list[(idx - 1 + list.length) % list.length];
  var next = list[(idx + 1) % list.length];

  var navHTML = list.length > 1
    ? '<nav class="proj-nav">' +
        '<a href="project.html?id=' + esc(prev.id) + '">' +
          '<div class="proj-nav__dir">← Previous</div>' +
          '<div class="proj-nav__title">' + esc(prev.title) + "</div>" +
        "</a>" +
        '<a href="project.html?id=' + esc(next.id) + '">' +
          '<div class="proj-nav__dir">Next →</div>' +
          '<div class="proj-nav__title">' + esc(next.title) + "</div>" +
        "</a>" +
      "</nav>"
    : "";

  /* --- render ------------------------------------------------------------ */

  root.innerHTML =
    '<div class="wrap proj-head">' +
      '<a class="back" href="index.html"><span>←</span> All work</a>' +
      "<h1>" + esc(p.title) + "</h1>" +
      '<p class="proj-head__summary">' + esc(p.summary) + "</p>" +
      (linksHTML ? '<div class="proj-head__links">' + linksHTML + "</div>" : "") +
    "</div>" +

    '<div class="wrap">' +
      specHTML +
      '<div class="media">' + mediaHTML() + "</div>" +
      '<div class="proj-body">' +
        '<div class="prose reveal">' + prose + "</div>" +
        "<aside>" + builtHTML + tagsBlock + "</aside>" +
      "</div>" +
    "</div>" +

    navHTML;
};
