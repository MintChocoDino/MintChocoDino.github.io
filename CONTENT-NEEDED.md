# Content needed

Everything here is a gap I could not fill from your files. Ordered by how much it
affects whether the site works as a job application.

---

## Tier 1 — blocking. The site is not ready to send until these are done.

### Your details
In `data/site.js`:

- [x] ~~`links.linkedin`~~ — done
- [x] ~~`links.itch`~~ — done
- [ ] **`links.resume`** — drop the PDF in `assets/docs/` and point at it,
      e.g. `assets/docs/NathanialHodnett-Resume.pdf`
- [ ] **`spec[].Location`** — city and state, or "Remote"
- [ ] **`about`** — two paragraphs. Currently `TODO` placeholder text.
- [ ] Confirm **`links.email`** is the address you want on a public page
      (currently `nphodnett10@gmail.com`)

### Labyrinth has no media at all
This is your most distinctive project and there is currently nothing to look at.
It is also the hardest to photograph, so plan it rather than improvising:

- [ ] **A 30–60 second video**, shot from the side so both things are in frame at
      once: the person walking in the capture volume, *and* the screen showing where
      they are in the maze. That single shot is the whole pitch — it shows the
      physical space and the software are the same space.
- [ ] **A close-up photo of the gauntlet**, ideally being worn.
- [ ] **A wide photo of the installation space** with the mocap cameras visible.
- [ ] **A screen recording of the Unity view** with the mocap data driving the player.
- [ ] Upload the video to YouTube (unlisted is fine) and paste the ID into
      `data/projects.js` → `labyrinth` → `media`.

### Labyrinth facts I had to guess
- [ ] **`role`** — what did you personally do? I wrote the `built` list from the
      source (Qualisys streaming, Joy-Con haptics, maze generator, enemy AI, OSC,
      editor tools) — **delete anything on that list that wasn't you.**
- [ ] **`team`** — solo or team, and how many
- [ ] What the project was *for* — a course, an exhibition, a research lab? There is
      a `TODO` paragraph in `body` waiting for this.

---

## Tier 2 — high value. Do these next.

### Ship one playable WebGL build
Right now Snake Arena is the only playable thing on the site. Two candidates:

- [ ] **FPS Prototype** — easiest by far. It is 399KB, already on Unity 6, and you
      only need to open it, switch platform and build. Good way to test the whole
      itch.io pipeline end to end before attempting a big one.
- [ ] **Zombits 3.0** — the one people actually want to play. Two obstacles:
  - Your Zombits 3.0 project is on **Unity 6000.0.63f1**, and **only 6000.3.7f1 has
    the WebGL module installed**. Install WebGL Build Support for 6000.0.63f1 in
    Unity Hub (~1GB), or upgrade the project to 6000.3.7f1.
  - **Netcode multiplayer will not work in a WebGL build** without a WebSocket
    transport and a hosted relay. Build the singleplayer `Gameplay` scene only,
    and let the video carry the multiplayer story.

See the README for the full build-and-embed steps.

### Push source to GitHub
The site has "View source" links commented out because the repos do not exist yet.

- [ ] Create a public repo for **Zombits 3.0**
- [ ] Create a public repo for **Labyrinth**
- [ ] Add a proper Unity `.gitignore` to each (`Library/`, `Temp/`, `Logs/`,
      `UserSettings/`, `obj/`) — otherwise you will push gigabytes of cache
- [ ] Uncomment the `links` entries in `data/projects.js`

### 8-Bit Eye Candy video
- [ ] Your file is **380MB** — far too large for this repo. Upload to YouTube and
      paste the ID into `data/projects.js`.
- [ ] Confirm my description is right. I read the source as "autonomous AI ships
      fight through an asteroid field, no player" — correct me if it is something else.

---

## Tier 3 — rounds out the site.

- [ ] **Zombits 3.0 screenshots.** The three currently on the site are from the older
      VGS build. Once 3.0 is presentable, capture the procedural map, the perk
      machines, and a multiplayer session with two players visible.
- [ ] **DOTS Particle System** — a screen recording, and your particle-count numbers
      if you measured them. A benchmark is the whole point of a DOTS project.
- [ ] **Lil Ghost Game** — screenshots are in (recovered from the design decks). Still
      needs a 20-second gameplay clip, and the one playtesting story:
      what broke, what players did, what you changed.
- [ ] **Eco-Viridis** — which bibles you personally wrote.
- [ ] **Narrative Work** — a paragraph each on Over Yonder, Deliverance, and the
      animated cutscene.
- [ ] **Brotivator 5000** — what it does. Pick the best 20 seconds from your build
      footage. All of it is `.MOV`/`.HEIC`; convert to `.mp4`/`.jpg` for the web.
- [ ] **Off-Road Rovers** and **FORGE** are in `data/projects.js` as
      `hidden: true`. Flip them on if you want them.

---

## Things I deliberately left out

- **MOBAProject** — two commits, one scene assembled from a purchased asset pack.
  Nothing of yours in it yet.
- **MyProject** — empty `Assets` folder.
- **Rocket Man The Musical**, **Game Industry Jam** — I could not tell what your role
  was. Tell me and I will add them.
- **The oil portrait** (`MomPortrait_R5_B-Ink_24x16in_300dpi.tif`) — genuinely good,
  but it pulls the site away from games. Say the word and I will add a small
  "Other work" section.
