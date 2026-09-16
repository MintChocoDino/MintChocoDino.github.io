/* ===========================================================================
   Shared helpers + index page rendering.
   No framework, no build step — data/site.js and data/projects.js drive
   everything on the page.
   =========================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var PROJECTS = (window.PROJECTS || []).filter(function (p) { return !p.hidden; });

  /* --- tiny helpers ------------------------------------------------------ */

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // A value counts as "present" only if it exists and isn't a leftover TODO.
  function has(v) {
    return typeof v === "string" && v.trim() !== "" && v.trim().indexOf("TODO") !== 0;
  }

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* --- section metadata -------------------------------------------------- */

  var CATEGORIES = [
    { key: "games",       label: "Games" },
    { key: "interactive", label: "Interactive & Physical" },
    { key: "creative",    label: "Creative Coding" },
    { key: "design",      label: "Design & Writing" }
  ];

  /* --- shared fragments -------------------------------------------------- */

  function coverHTML(p) {
    if (has(p.cover)) {
      return '<img src="' + esc(p.cover) + '" alt="" loading="lazy" decoding="async">';
    }
    var initials = p.title.replace(/[^A-Za-z0-9 ]/g, "")
      .split(/\s+/).slice(0, 2)
      .map(function (w) { return w.charAt(0); }).join("");
    return '<div class="ph"><span>' + esc(initials.toUpperCase()) + "</span></div>";
  }

  function badgeHTML(p) {
    var s = (p.status || [])[0];
    if (!s) return "";
    var mod = /playable/i.test(s) ? " badge--playable"
            : /needs/i.test(s)    ? " badge--todo"
            : "";
    return '<span class="badge' + mod + '">' + esc(s) + "</span>";
  }

  function metaLine(p) {
    return [p.engine, p.role].filter(has).join("  ·  ");
  }

  function tagsHTML(list, limit) {
    var t = (list || []).slice(0, limit || 99);
    if (!t.length) return "";
    return '<div class="tags">' + t.map(function (x) {
      return '<span class="tag">' + esc(x) + "</span>";
    }).join("") + "</div>";
  }

  function sectionLabel(num, text) {
    return '<div class="sec-label">' +
             '<span class="sec-label__num">' + esc(num) + "</span>" +
             '<span class="sec-label__text">' + esc(text) + "</span>" +
             '<span class="sec-label__rule"></span>' +
           "</div>";
  }

  /* --- shared: header, footer, contact links ----------------------------- */

  function contactLinks(opts) {
    opts = opts || {};
    var L = SITE.links || {};
    var out = [];
    if (has(L.email))    out.push({ label: "Email",    href: "mailto:" + L.email, accent: true });
    if (has(L.github))   out.push({ label: "GitHub",   href: L.github });
    if (has(L.itch))     out.push({ label: "itch.io",  href: L.itch });
    if (has(L.linkedin)) out.push({ label: "LinkedIn", href: L.linkedin });
    if (has(L.resume) && opts.resume !== false) out.push({ label: "Résumé ↓", href: L.resume });
    return out;
  }

  function linkButtons(list) {
    return list.map(function (l) {
      var ext = l.href.indexOf("http") === 0;
      return '<a class="btn' + (l.accent ? " btn--accent" : "") + '" href="' + esc(l.href) + '"' +
             (ext ? ' target="_blank" rel="noopener"' : "") + ">" + esc(l.label) + "</a>";
    }).join("");
  }

  function mountHeader() {
    var host = document.querySelector("[data-header]");
    if (!host) return;
    var L = SITE.links || {};
    var onIndex = !!document.querySelector("[data-featured]");
    var prefix = onIndex ? "" : "index.html";

    var nav = '<a href="' + prefix + '#work">Work</a>' +
              '<a href="' + prefix + '#about">About</a>' +
              '<a href="' + prefix + '#contact">Contact</a>';
    if (has(L.resume)) {
      nav += '<a class="nav-cta" href="' + esc(L.resume) + '" target="_blank" rel="noopener">Résumé</a>';
    }

    host.innerHTML =
      '<div class="site-header__inner">' +
        '<a class="brand" href="index.html">' + esc(SITE.name || "") + '<span>.</span></a>' +
        '<nav class="nav">' + nav + "</nav>" +
      "</div>";
  }

  function mountFooter() {
    var host = document.querySelector("[data-footer]");
    if (!host) return;
    var links = contactLinks({ resume: false }).map(function (l) {
      var ext = l.href.indexOf("http") === 0;
      return '<a href="' + esc(l.href) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" +
             esc(l.label) + "</a>";
    }).join(" · ");

    host.innerHTML =
      '<div class="site-footer__inner">' +
        "<div>© " + new Date().getFullYear() + " " + esc(SITE.name || "") + "</div>" +
        "<div>" + links + "</div>" +
        "<div>" + esc(SITE.footerNote || "") + "</div>" +
      "</div>";
  }

  /* --- reveal on scroll -------------------------------------------------- */

  function observeReveals(root) {
    var nodes = (root || document).querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* --- index page -------------------------------------------------------- */

  function mountHero() {
    var host = document.querySelector("[data-hero]");
    if (!host) return;

    var specRows = (SITE.spec || []).map(function (r) {
      return '<div class="spec__row">' +
               '<div class="spec__key">' + esc(r.label) + "</div>" +
               '<div class="spec__val">' + esc(r.value) + "</div>" +
             "</div>";
    }).join("");

    host.innerHTML =
      '<div class="wrap hero__grid">' +
        "<div>" +
          '<div class="hero__eyebrow">Portfolio · ' + new Date().getFullYear() + "</div>" +
          "<h1>" + esc(SITE.name || "") + "</h1>" +
          '<div class="hero__role">' + esc(SITE.role || "") + "</div>" +
          '<p class="hero__statement">' + esc(SITE.statement || "") + "</p>" +
          '<div class="hero__links">' + linkButtons(contactLinks()) + "</div>" +
        "</div>" +
        '<aside class="spec">' +
          '<div class="spec__head">Spec</div>' +
          specRows +
        "</aside>" +
      "</div>";
  }

  function featuredHTML(p, i) {
    return '<article class="feature reveal">' +
             '<a class="feature__media" href="project.html?id=' + esc(p.id) + '" aria-label="' + esc(p.title) + '">' +
               badgeHTML(p) + coverHTML(p) +
             "</a>" +
             "<div>" +
               '<div class="feature__index">Featured / ' + pad(i + 1) + "</div>" +
               "<h3>" + esc(p.title) + "</h3>" +
               '<div class="feature__meta">' + esc(metaLine(p)) + (has(p.year) ? "  ·  " + esc(p.year) : "") + "</div>" +
               '<p class="feature__summary">' + esc(p.summary) + "</p>" +
               tagsHTML(p.tags, 5) +
               '<p style="margin-top:22px;margin-bottom:0">' +
                 '<a class="btn btn--accent" href="project.html?id=' + esc(p.id) + '">' +
                   'View project <span class="btn__arrow">→</span>' +
                 "</a>" +
               "</p>" +
             "</div>" +
           "</article>";
  }

  function cardHTML(p) {
    return '<a class="card reveal" href="project.html?id=' + esc(p.id) + '">' +
             '<div class="card__media">' + badgeHTML(p) + coverHTML(p) + "</div>" +
             '<div class="card__body">' +
               '<div class="card__top">' +
                 "<h3>" + esc(p.title) + "</h3>" +
                 '<span class="card__year">' + esc(p.year || "") + "</span>" +
               "</div>" +
               '<div class="card__meta">' + esc(metaLine(p)) + "</div>" +
               '<p class="card__summary">' + esc(p.summary) + "</p>" +
               '<div class="card__more">View <span>→</span></div>' +
             "</div>" +
           "</a>";
  }

  function mountWork() {
    var featHost = document.querySelector("[data-featured]");
    var catHost  = document.querySelector("[data-categories]");
    if (!featHost || !catHost) return;

    var featured = PROJECTS.filter(function (p) { return p.featured; });
    var rest     = PROJECTS.filter(function (p) { return !p.featured; });

    featHost.innerHTML = featured.map(featuredHTML).join("");

    var n = 1;
    catHost.innerHTML = CATEGORIES.map(function (c) {
      var items = rest.filter(function (p) { return p.category === c.key; });
      if (!items.length) return "";
      n += 1;
      return '<section class="cat">' +
               sectionLabel(pad(n), c.label) +
               '<div class="grid">' + items.map(cardHTML).join("") + "</div>" +
             "</section>";
    }).join("");

    // Keep the trailing section numbers in step with however many categories
    // actually rendered, so removing or emptying one never leaves a gap.
    document.querySelectorAll("[data-autonum]").forEach(function (node) {
      n += 1;
      node.textContent = pad(n);
    });
  }

  function mountAbout() {
    var host = document.querySelector("[data-about]");
    if (!host) return;
    host.innerHTML = (SITE.about || []).map(function (p) {
      return "<p>" + esc(p) + "</p>";
    }).join("");
  }

  function mountContact() {
    var host = document.querySelector("[data-contact-links]");
    if (!host) return;
    host.innerHTML = linkButtons(contactLinks());
  }

  /* --- expose for the detail page ---------------------------------------- */

  window.PF = {
    esc: esc, has: has, pad: pad, el: el,
    PROJECTS: PROJECTS,
    SITE: SITE,
    coverHTML: coverHTML,
    tagsHTML: tagsHTML,
    linkButtons: linkButtons,
    sectionLabel: sectionLabel,
    observeReveals: observeReveals
  };

  /* --- boot -------------------------------------------------------------- */

  function boot() {
    mountHeader();
    mountHero();
    mountWork();
    mountAbout();
    mountContact();
    mountFooter();
    if (window.PF_DETAIL) window.PF_DETAIL();
    observeReveals(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
