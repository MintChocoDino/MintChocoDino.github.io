# Portfolio site — Nathanial Hodnett

Static site, no framework, no build step, no dependencies. GitHub Pages target:
`MintChocoDino/LandingPage`. **The repo is currently private and Pages is off** —
Pages on a private repo needs a paid GitHub plan, and going public is the user's
call, not an assumed step.

## How this site works

`data/site.js` and `data/projects.js` drive every page. Adding a project is editing
one block in `data/projects.js`. Read `README.md` for the field reference before
changing either.

Fields left empty, or whose string starts with `TODO`, are **hidden at render time**
rather than printed. That is deliberate: unfinished entries degrade quietly instead
of showing placeholder text to a recruiter. Do not "fix" a TODO by inventing content.

Preview by opening `index.html` directly — data loads via plain `<script>` tags, not
`fetch()`, so it works off the filesystem with no server.

## Where the source material lives

This repo intentionally holds **only** finished web assets. The raw material is in
`C:\Users\natha\Desktop\PortfolioSpringboard` (~5.5GB of Unity projects, design
decks, PDFs and video). That folder must never be committed here.

Other relevant locations outside this repo:

- `C:\Users\natha\Desktop\PortfolioSpringboard\LabyrinthProject` — Labyrinth source,
  plus `Labyrinth Individual Documentation.pdf`, which is the authoritative record of
  what Nathanial personally built on that project
- `C:\Users\natha\Desktop\Labyrinth Showcase Build -...\...\ImmersiveEnvironmentsFinal`
  — the showcase build, with its own `CLAUDE.md` describing the installation
- `C:\Users\natha\Downloads\NathanialHodnettResume2026.pdf` — source of the résumé
  in `assets/docs/`

## Techniques that worked here

Two projects had no usable media until it was recovered from files already on disk:

- **PPTX files are zip archives.** `unzip -o deck.pptx 'ppt/media/*'` pulled the Ghost
  Game gameplay screenshots and mood board out of its design decks.
- **JPEGs can be carved from PDFs** by scanning the raw bytes for `FFD8FF`…`FFD9`.
  That produced the Labyrinth build photos. Note that it also surfaces unrelated
  images — teammates' headshots and a personal graduation photo came out of that PDF
  and are deliberately not on the site.

`ffmpeg` is installed (winget, Gyan.FFmpeg) but **may not be on PATH in a fresh shell**.
Full path:
`C:\Users\natha\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.1-full_build\bin\ffmpeg.exe`

There is **no Node and no npm** on this machine. To run JS (syntax checks, data
validation), use VS Code's bundled Electron as a Node runtime:
`$env:ELECTRON_RUN_AS_NODE=1; & "C:\Users\natha\AppData\Local\Programs\Microsoft VS Code\Code.exe" script.js`
Note that its `console.log` output can be swallowed — write results to a file and read
that instead.

## Video policy

Videos go on **YouTube** (`{ type: "youtube", src: "ID" }`), not in this repo. One
source file is 380MB; GitHub caps single files at 100MB. Video already committed
(`assets/media/zombits-gameplay.mp4`) was re-encoded at CRF 25 to 6.7MB.

WebGL builds go on **itch.io** and are iframed in, for the same reason.

## Open items

`CONTENT-NEEDED.md` is the live checklist of gaps, tiered by urgency. Keep it current
when something gets filled in.
