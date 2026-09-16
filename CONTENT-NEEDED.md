# Content needed

Everything here is a gap I could not fill from your files. Ordered by how much it
affects whether the site works as a job application.

---

## Tier 1 — blocking. The site is not ready to send until these are done.

### Your details — DONE
- [x] LinkedIn, itch.io, GitHub links
- [x] Résumé wired into the header button (`assets/docs/NathanialHodnett-Resume.pdf`)
- [x] Location — Corpus Christi, TX
- [x] About section — three paragraphs drafted from your résumé. **Read them and
      edit.** I wrote them in your voice as I understood it; the Sunday Robotics
      framing and the "software meets the room it's in" line are my interpretation,
      not your words.
- [x] Email — switched to `nathanialhodnett@gmail.com`, the address on your résumé,
      rather than the `nphodnett10@` one I had. Confirm that's right.

### Still open
- [ ] **Phone number** — it's on your résumé but I deliberately left it off the site.
      A public page gets scraped. Say the word if you want it on there.
- [ ] **Labyrinth: the one shot that's still missing.** The entry now has five photos
      of the physical build, but nothing of the experience *running*. What it needs is
      a blindfolded participant mid-reach with the projection visible behind them —
      that single frame explains the whole piece. A 30–60 second video of a run would
      be better still.
- [ ] **Was Labyrinth the "immersive exhibit for a live SXSW-style event"** on your
      résumé, or was that a separate project? If separate, tell me and I'll add it.

---

## Tier 2 — high value. Do these next.

### Ship one playable WebGL build
Snake Arena is still the only playable thing on the site.

- [ ] **FPS Prototype** — easiest by far. 399KB, already on Unity 6, no networking.
      Open it, switch platform, build. Do this one first to prove the itch.io embed
      pipeline works end to end.
- [ ] **Zombits 3.0** — the one people actually want to play. Two obstacles:
  - It's on **Unity 6000.0.63f1**, and **only 6000.3.7f1 has the WebGL module
    installed**. Install WebGL Build Support for 6000.0.63f1 in Unity Hub (~1GB),
    or upgrade the project to 6000.3.7f1.
  - **Netcode multiplayer will not work in WebGL** without a WebSocket transport and
    a hosted relay. Build the singleplayer `Gameplay` scene only; let the video carry
    the multiplayer story.

See the README for the full build-and-embed steps.

### Put screenshots on your itch.io page
Your Ghost Game itch page has no images and no description — just a title, a tag and
a zip. It's a portfolio link that currently does nothing for you. The screenshots in
`assets/img/ghost/` are right there.

### Push source to GitHub
"View source" links are commented out because the repos don't exist yet.

- [ ] Public repo for **Zombits 3.0**
- [ ] Public repo for **Labyrinth**
- [ ] Proper Unity `.gitignore` on each (`Library/`, `Temp/`, `Logs/`, `UserSettings/`,
      `obj/`) — otherwise you'll push gigabytes of cache
- [ ] Uncomment the `links` entries in `data/projects.js`

### 8-Bit Eye Candy video
- [ ] Your file is **380MB** — too large for this repo. Upload to YouTube (unlisted is
      fine) and paste the ID into `data/projects.js`.
- [ ] Confirm my description. I read the source as "autonomous AI ships fight through
      an asteroid field, no player" — correct me if that's wrong.

---

## Tier 3 — rounds out the site.

- [ ] **Zombits 3.0 screenshots.** The current three are from the older VGS build. Once
      3.0 is presentable: the procedural map, the perk machines, a multiplayer session
      with two players visible.
- [ ] **DOTS Particle System** — a screen recording, and your particle-count numbers if
      you measured them. A benchmark is the whole point of a DOTS project.
- [ ] **Lil Ghost Game** — solo or team? And the one playtesting story: what broke, what
      players did, what you changed. A 20-second gameplay clip would beat the stills.
- [ ] **Eco-Viridis** — which bibles you personally wrote.
- [ ] **Narrative Work** — a paragraph each on Over Yonder, Deliverance, and the
      animated cutscene.
- [ ] **Brotivator 5000** — what it does, what user problem it solved, and your role on
      the team. Pick the best 20 seconds of build footage. It's all `.MOV`/`.HEIC`;
      those need converting to `.mp4`/`.jpg` for the web (no ffmpeg on this machine).
- [ ] **Off-Road Rovers** and **FORGE** are in `data/projects.js` as `hidden: true`.
      Flip them on if you want them.

---

## Where the media came from

Two projects had no usable media and now do, recovered from files you already had:

- **Lil Ghost Game** — PPTX files are zip archives, so the gameplay screenshots and
  mood board were extracted from the images embedded in your design decks.
- **Labyrinth** — the photos were carved out of the JPEG streams inside
  `Labyrinth final documentation.pdf`.

That PDF also contains teammates' headshots and a personal graduation photo. Those are
**deliberately not on the site** — they're other people's likenesses, not project media.

---

## Things I deliberately left out

- **MOBAProject** — two commits, one scene from a purchased asset pack.
- **MyProject** — empty `Assets` folder.
- **Rocket Man The Musical**, **Game Industry Jam** — couldn't tell what your role was.
- **The oil portrait** — genuinely good, but it pulls the site away from games. Say the
  word and I'll add a small "Other work" section.
- **Your phone number** — see Tier 1.
