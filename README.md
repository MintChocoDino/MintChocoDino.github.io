# Portfolio — Nathanial Hodnett

Static portfolio site. No framework, no build step, no dependencies. Open
`index.html` in a browser and it works; push to `main` and GitHub Pages serves it.

---

## How to add or change a project

Everything on the site comes from two files. You will almost never touch anything else.

| File | What it controls |
| --- | --- |
| `data/site.js` | Your name, role, statement, spec sheet, links, about text |
| `data/projects.js` | Every project on the site |

**To add a project:** copy any block in `data/projects.js`, change the fields, save.
The card, the detail page, the section it appears in and the prev/next navigation all
follow automatically.

**To hide a project without deleting it:** add `hidden: true` to its block.

**To promote a project to the big treatment at the top:** set `featured: true`.

Any field left as an empty string, an empty array, or starting with `TODO` is hidden
from the site rather than rendered. So half-finished entries degrade quietly instead
of showing placeholder text to a recruiter.

---

## Project fields

```js
{
  id:       "zombits",          // unique, url-safe. Detail page = project.html?id=zombits
  title:    "Zombits",
  category: "games",            // games | interactive | creative | design
  featured: true,               // large treatment at the top of Selected Work
  hidden:   false,              // true = kept in the file but not shown

  year:    "2026",
  engine:  "Unity 6 · C# · URP 2D",
  role:    "Solo developer",
  team:    "Solo",

  summary: "One sentence. Shown on the card.",
  body:    ["Paragraph.", "Another paragraph."],
  built:   ["A specific thing you implemented.", "Another."],
  tags:    ["Procedural Generation", "Netcode"],

  cover:  "assets/img/zombits/gameplay.png",   // omit for a generated placeholder
  media:  [ /* see below */ ],
  links:  [ { label: "Play", href: "https://..." } ],
  status: ["Playable"]          // small badge on the card
}
```

### Media types

Media renders in the order you list it. The first item is the biggest thing on the page,
so put the playable build or the video first.

```js
// Playable WebGL build hosted on itch.io
{ type: "itch", src: "https://itch.io/embed-upload/1234567?color=0d0f11" }

// Video hosted on YouTube (use this for anything over ~20MB)
{ type: "youtube", src: "dQw4w9WgXcQ" }

// Video committed to this repo
{ type: "video", src: "assets/media/clip.mp4", poster: "assets/img/thumb.png" }

// Something playable living inside this repo (like play/snake)
{ type: "local", src: "play/snake/index.html", ratio: "16/10" }

// Screenshot
{ type: "image", src: "assets/img/zombits/title.png", caption: "Title screen" }
```

---

## Adding a WebGL build

Builds are hosted on itch.io rather than committed here, so the repo stays small and
you get an itch page out of it too.

**In Unity:**

1. `File → Build Settings → WebGL`. If WebGL is greyed out, install the module from
   Unity Hub: *Installs → the version's gear icon → Add Modules → WebGL Build Support*.
2. `Player Settings → Publishing Settings`:
   - Compression Format: **Brotli**
   - **Decompression Fallback: ON** (without this the build fails to load on some hosts)
3. `Player Settings → Resolution and Presentation`: set a fixed canvas size, e.g. 960×600.
4. Build to a new folder, then zip the *contents* of that folder — `index.html` must be
   at the top level of the zip, not inside a subfolder.

**On itch.io:**

5. Create a new project, upload the zip, tick **"This file will be played in the browser"**.
6. Kind of project: **HTML**. Set the viewport to match your canvas size.
7. Set the project to **Public** (a draft will not embed).
8. On the project's edit page, open **Embed options** and copy the embed URL. It looks
   like `https://itch.io/embed-upload/1234567`.

**Here:**

9. Paste it into that project's `media` array:
   `{ type: "itch", src: "https://itch.io/embed-upload/1234567?color=0d0f11" }`
10. Change the project's `status` to `["Playable"]`.

---

## Local preview

Double-click `index.html`. Everything is plain `<script>` tags rather than `fetch()`,
so it works straight off the filesystem — no local server needed.

## Deploying

Push to `main`. In the repo's **Settings → Pages**, set source to
**Deploy from a branch → main → / (root)**. The site appears at
`https://mintchocodino.github.io/LandingPage/` within a minute or two.

---

## Structure

```
index.html            landing page
project.html          detail page, driven by ?id=
404.html
data/site.js          identity, links, about        <- edit this
data/projects.js      every project                 <- edit this
assets/css/site.css   the whole theme
assets/js/site.js     shared chrome + index rendering
assets/js/project.js  detail page rendering
assets/img/           screenshots
assets/media/         video committed to the repo
assets/docs/          résumé PDF goes here
play/snake/           a playable piece served from this repo
```
