/* ---------------------------------------------------------------------------
   PROJECTS — this is the living document. To add a project, copy any block
   below, change the fields, and drop your images in assets/img/<id>/.

   FIELD REFERENCE
     id        required, unique, url-safe. Detail page = project.html?id=<id>
     title     required
     category  "games" | "interactive" | "design" | "creative"
     featured  true  -> large treatment at the top of Selected Work
     hidden    true  -> kept in this file but not shown anywhere on the site
     year, engine, role, team    -> the mono spec sheet
     summary   one sentence, shown on the card
     body      array of paragraphs, shown on the detail page
     built     array of bullet strings: what YOU specifically implemented
     tags      array of short strings
     media     array, rendered in order on the detail page. Types:
                 { type:"itch",    src:"https://itch.io/embed-upload/0000000?color=221A15",
                   width:960, height:600 }
                 { type:"local",   src:"play/snake/index.html", ratio:"16/10" }
                 { type:"youtube", src:"VIDEO_ID" }
                 { type:"video",   src:"assets/media/file.mp4", poster:"assets/img/x.png" }
                 { type:"image",   src:"assets/img/x.png", caption:"..." }
                 { type:"excerpt", label:"Piece name", meta:"Form", text:["para", "para"] }
                   -> a readable sample of writing, for projects where the prose
                      is the work. Rendered as type, not as a picture of a page.
     cover     image used on the index card. Omit for a generated placeholder.
     links     array of { label, href }
     status    array of short badges, e.g. ["Playable","Source"]
   --------------------------------------------------------------------------- */

window.PROJECTS = [

  /* ===================================================================== */
  {
    id: "zombits",
    title: "Zombits",
    category: "games",
    featured: true,
    year: "2026",
    engine: "Unity 6 · C# · URP 2D",
    role: "Solo developer",
    team: "Solo",
    summary:
      "Wave-based top-down zombie survival built on a procedurally generated map, " +
      "with a round economy and networked co-op.",
    body: [
      "Zombits is a round-based survival shooter in the Call of Duty Zombies tradition: " +
      "you hold out against escalating waves, spend points on doors and upgrades, and " +
      "push deeper into the map as it opens up.",

      "The current version is a full rebuild of the first one. The hand-authored level " +
      "was replaced with a procedural map generator, and networked co-op was added on " +
      "Unity's Netcode for GameObjects. The playable build below is singleplayer — the " +
      "Netcode co-op layer does not run in WebGL, so the co-op screenshots are from the " +
      "desktop build."
    ],
    built: [
      "Procedural map generator that places rooms, carves connecting corridors, and derives door and zombie-spawn positions from the resulting layout — seeded, so any run can be reproduced exactly.",
      "Wave manager that scales zombie count, health, movement speed and damage independently per wave, each with its own ceiling so difficulty curves instead of spiking.",
      "Round economy of buyable interactables: doors that gate map access, a Mystery Box, a Pack-a-Punch weapon upgrade station, and five distinct perk machines.",
      "Networked multiplayer layer on Netcode for GameObjects — player replication, server-authoritative projectiles, and a connection UI for hosting and joining.",
      "Weapon system with per-weapon fire rate, damage and reload behaviour, plus a player weapon holder managing equipping and swapping.",
      "Supporting systems: interaction prompts, HUD, pause and game-over flow, positional footstep audio, and a central audio manager."
    ],
    tags: ["Procedural Generation", "Wave Systems", "Netcode / Multiplayer", "Tilemap", "Game Feel"],
    cover: "assets/img/zombits/gameplay.png",
    media: [
      // Unity 6 WebGL build, upload 19271120. itch reports the embed viewport as 856x400,
      // the same 2.14:1 the frame below uses, so the two agree.
      // Click-to-play on purpose: it takes keyboard and mouse, and the build is ~27MB over the wire,
      // so it should not start grabbing input the moment the page opens.
      // Singleplayer only — Netcode co-op does not run in WebGL. Page: https://mintchocodino.itch.io/zombits
      // ratio tracks the BUILD, not taste. This build's template fills the embedding frame
      // (.unity-fill, 100% wide by calc(100% - 38px) for the footer strip) rather than pinning
      // the canvas, so .media__frame's overflow:hidden no longer clips it.
      // The previous upload hard-coded <canvas width=960 height=600> and styled only
      // .unity-mobile #unity-canvas, which is what cropped the HUD at the corners.
      // The durable fix is still a Canvas Scaler set to Scale With Screen Size in Unity.
      { type: "itch", src: "https://itch.io/embed-upload/19271120?color=221A15", width: 1040, height: 486, ratio: "2.14/1",
        caption: "Zombits running in the browser — singleplayer. WASD to move, mouse to aim, F to interact, R to reload. Fullscreen button, bottom right" },

      // 15s cut from a single unbroken run (waves 1-3), so the pacing is the game's own.
      // Music is CC BY 4.0 and the credit below is the licence condition, not decoration.
      // Poster is a frame of this same cut, so it matches the video's 2.07:1 box exactly
      // and does not letterbox the way a 16/9-ish screenshot would.
      { type: "video", src: "assets/media/zombits-trailer.mp4", poster: "assets/img/zombits/trailer-poster.png",
        caption: "Fifteen seconds from one run — wave escalation, the Mystery Box, and a perk buy. Music: \"Volatile Reaction\" by Kevin MacLeod (incompetech.com), CC BY 4.0" },

      // Three separate runs, not three angles on one map. Shown together on purpose:
      // the point of the generator is only legible when you can compare outputs.
      { type: "image", src: "assets/img/zombits/procgen-1.png",
        caption: "Procedural generation — a generated map, shown whole. Rooms are carved, then linked by corridors, and door and spawn positions are derived from the layout that results" },
      { type: "image", src: "assets/img/zombits/procgen-2.png",
        caption: "Procedural generation — a second seed. Same generator, different room count, corridor runs and branching" },
      { type: "image", src: "assets/img/zombits/procgen-3.png",
        caption: "Procedural generation — a third seed. Every run is laid out from scratch, and any seed can be replayed exactly" },

      { type: "image", src: "assets/img/zombits/multiplayer-connect.png",
        caption: "Netcode connection UI — host or join by address, with live connection state" },
      { type: "image", src: "assets/img/zombits/multiplayer-coop.png",
        caption: "Two clients in one session — player replication over Netcode for GameObjects" },

      { type: "image", src: "assets/img/zombits/title.png",    caption: "Title screen" },
      { type: "image", src: "assets/img/zombits/gameplay.png", caption: "Mid-run gameplay — wave counter, points and equipped weapon on the HUD" },
      { type: "image", src: "assets/img/zombits/gameover.png", caption: "Game over screen" }
    ],
    links: [
      { label: "Play in browser",  href: "https://mintchocodino.itch.io/zombits" },
      { label: "Source on GitHub", href: "https://github.com/MintChocoDino/Zombits3.0" }
    ],
    status: ["Runs in browser", "Source"]
  },

  /* ===================================================================== */
  {
    id: "labyrinth",
    title: "Labyrinth",
    category: "interactive",
    featured: true,
    year: "2026",
    engine: "Unity 6 · C# · Qualisys QTM · Joy-Con",
    role: "Primary gameplay developer / engineer",
    team: "Team project · Laboratory for Immersive Media, UT Austin",
    summary:
      "A blind maze, navigated for real. A tracked helmet blindfolds the player, who " +
      "finds the walls by touch and sound while an audience watches the hunt on a " +
      "projector. I built the software: the mocap-to-gameplay pipeline, the haptics, " +
      "the Minotaur AI and the game states.",
    body: [
      "Labyrinth is a live-audience installation built for UT Austin's Laboratory for " +
      "Immersive Media. A participant wears a sculpted Greek helmet that covers their " +
      "eyes and a gauntlet on each arm. All three are tracked by a Qualisys optical " +
      "motion-capture rig, which streams 6DOF data into Unity as `head`, `left` and " +
      "`right`. The team fabricated the wearables and dressed the room. I was the " +
      "primary gameplay developer, and everything that happens in software once that " +
      "data arrives is my work — the collision and haptics, the Minotaur, the game " +
      "states, the audience projection and the virtual maze itself.",

      "They cannot see anything. The maze exists only in software, and the only way to " +
      "find its walls is to reach out and touch them: raycasts run from the helmet to " +
      "each gauntlet, and when one intersects a wall the Joy-Con strapped inside that " +
      "gauntlet rumbles and a sound fires from that wall's position through the lab's " +
      "spatial audio system. You learn the room with your hands and your ears.",

      "Touching a wall has a cost. A Minotaur roams the maze in a passive wander state, " +
      "and holding contact with a wall too long alerts it to your position — so the only " +
      "way to navigate is also the thing that gets you caught. The audience watches the " +
      "whole hunt play out on a full-screen projection that the player never sees.",

      "The video below is cut from the progress recordings I sent the team: the grey-box " +
      "prototype in February, the March beta with the Minotaur and spatial audio, and the " +
      "April build with QTM streaming live, the projection view and the win and loss " +
      "states. The full Unity project is on GitHub — everything in Assets/Scripts is mine."
    ],
    built: [
      "Gauntlet collision system — raycasts from the tracked helmet to each tracked gauntlet detect wall contact per hand, driving Joy-Con rumble on the correct side and moving a spatial audio source to the exact hit point so the wall sounds where it physically is.",
      "Minotaur AI as a two-state machine on Unity's AI Navigation package: a passive wander that picks random reachable NavMesh destinations, and an alerted chase triggered by a grace timer that drains while the player holds wall contact and resets when they pull away.",
      "Distinct passive and alerted audio for the Minotaur, so the audience and the blindfolded player both hear the state change.",
      "Game manager owning start, win, loss and restart states, coordinating the enemy, the projection display and the lighting response on every transition.",
      "The projected audience view — what spectators see of a run the player is experiencing blind.",
      "Built the virtual maze the physical space maps onto.",
      "Local playback workflow: development ran against recorded .qtm takes streamed as if live, so gameplay could be built and tested without booking the mocap lab."
    ],
    tags: ["Motion Capture", "Haptics", "Enemy AI", "Spatial Audio", "Installation", "Physical Computing"],
    // Cover is the piece RUNNING under the alert lighting rather than the props on a
    // table: the red is the LightingController reacting to the Minotaur state, which
    // is software, so the card leads with the work rather than the fabrication.
    cover: "assets/img/labyrinth/running-alert.jpg",
    // Ordered as the data flows: mocap in -> a run -> game states -> projection ->
    // the room -> the hardware.
    // Screenshots of source code used to sit between these; they came off once the
    // repo went public, because a screenshot of code is strictly worse than the code.
    // Fabrication-process photos (helmet build, crest, cardboard sword) are still in
    // assets/img/labyrinth/ but off the page: they are the team's work, not this entry's.
    media: [
      // 29.9s from three narrated progress recordings (Feb 25, Mar 30, Apr 7 2026), cut
      // silent under music so the team-update narration stays private. Each video is a
      // full-desktop Unity Editor capture, so every segment carries its own crop.
      // Music is CC BY 4.0 and the credit in the caption is the licence condition.
      { type: "video", src: "assets/media/labyrinth-devlog.mp4", poster: "assets/img/labyrinth/devlog-poster.png",
        caption: "Thirty seconds across three months of my progress recordings — the February grey-box prototype, the March beta with the Minotaur and spatial audio, and the April build with QTM streaming live. Music: \"Dark Walk\" by Kevin MacLeod (incompetech.com), CC BY 4.0" },

      { type: "image", src: "assets/img/labyrinth/still-qtm-streaming.png",
        caption: "Qualisys Track Manager during a run — the helmet and both gauntlets tracked as 6DOF rigid bodies (head, left, right) and streamed into Unity. This is the input everything below is built on" },
      { type: "image", src: "assets/img/labyrinth/still-gameplay-map.png",
        caption: "A run in progress. Left: the projected audience view, player and Minotaur in the maze. Right: the Scene view with the map" },
      { type: "image", src: "assets/img/labyrinth/still-projection-start.png",
        caption: "What the audience sees between runs: the projected start screen, with the Scene view beside it" },

      { type: "image", src: "assets/img/labyrinth/running-alert.jpg",
        caption: "A participant mid-run under the alert lighting — helmet on, gauntlets up, feeling for a wall. Photo by the team" },
      { type: "image", src: "assets/img/labyrinth/showcase-playtest.jpg",
        caption: "Playtest at the AET Showcase, with the audience watching the projection. Photo by the team" },
      { type: "image", src: "assets/img/labyrinth/props-final.jpg",
        caption: "The wearables the team fabricated — helmet, gauntlets with the Joy-Cons inside, and sword. The white spheres are the retroreflective markers the Qualisys rig tracks" }
    ],
    links: [
      { label: "Source on GitHub", href: "https://github.com/MintChocoDino/Labyrinth" }
    ],
    status: ["Installation", "Source"]
  },

  /* ===================================================================== */
  {
    id: "snake-arena",
    title: "Snake Arena",
    category: "creative",
    featured: false,
    year: "2025",
    engine: "p5.js · JavaScript",
    role: "Solo developer",
    team: "Solo",
    summary:
      "Twenty autonomous snakes compete for food on a shared grid until one is left. " +
      "Runs live in the browser — click to restart.",
    body: [
      "An agent simulation rather than a game you play. Twenty snakes spawn on a grid, " +
      "each running the same decision loop at its own tick rate, all competing for a food " +
      "supply that replenishes to a floor value. Snakes grow when they eat and die on " +
      "collision.",

      "The interesting part is what falls out of it: because every snake shares one rule " +
      "set but ticks at a different speed, the population produces very different outcomes " +
      "run to run. A live leaderboard tracks every snake's score and greys out the dead " +
      "ones, so you can watch the field thin."
    ],
    built: [
      "Autonomous snake agents with per-agent tick intervals, so identical logic yields different behaviour across the population.",
      "Food system that maintains a minimum supply and refuses to spawn on top of any living snake segment.",
      "Collision, growth and death handling with a last-one-standing win state.",
      "Live sorted leaderboard rendering every agent's score and survival status."
    ],
    tags: ["Agent Simulation", "Generative", "p5.js", "Emergent Behaviour"],
    // Captured mid-round rather than at the win screen: the leaderboard greying out
    // the dead is the thing worth showing, and an empty grid is not.
    cover: "assets/img/snake/cover.jpg",
    media: [
      { type: "local", src: "play/snake/index.html", ratio: "16/10" }
    ],
    links: [
      { label: "Open full screen", href: "play/snake/index.html" }
    ],
    status: ["Playable"]
  },

  /* ===================================================================== */
  {
    id: "eye-candy",
    title: "8-Bit Eye Candy",
    category: "creative",
    featured: false,
    year: "2025",
    engine: "Unity 6 · C#",
    role: "Solo developer",
    team: "Solo",
    summary:
      "An ambient generative piece — autonomous ships fight through an asteroid field " +
      "with nobody playing. Built to be left running.",
    body: [
      "8-Bit Eye Candy is closer to a screensaver than a game. Ships spawn, hunt each " +
      "other through a field of wireframe asteroids, fire, explode, and are replaced. " +
      "There are no controls, no player and nothing to win — it is meant to be left " +
      "running in the corner of a screen and glanced at.",

      "That non-interactivity is the design constraint rather than a limitation. " +
      "Everything on screen has to keep itself going: ships acquire their own targets " +
      "and navigate on their own, and the spawners keep the field populated as objects " +
      "are destroyed, so the piece never runs down or settles into a static frame."
    ],
    built: [
      "Autonomous AI ship behaviour — target acquisition, navigation and firing, with no player input anywhere in the loop.",
      "Asteroid and ship spawners that keep the scene populated as objects are destroyed, so the piece sustains itself indefinitely.",
      "Projectile and collision system with explosion effects."
    ],
    tags: ["Generative", "Ambient", "AI Agents", "Visual Systems"],
    cover: "assets/img/eyecandy/cover.png",
    media: [
      // Autostarts — no click-to-play splash, which is the point for an ambient piece.
      // Source build is 640x360 (16:9); .media__embed is aspect-ratio 16/9, so it fits
      // exactly. Page: https://mintchocodino.itch.io/8biteyecandy
      { type: "itch", src: "https://itch.io/embed-upload/19259485?color=221A15", width: 960, height: 540,
        caption: "Running live. There are no controls — it plays itself. Fullscreen button, bottom right" },
      { type: "image", src: "assets/img/eyecandy/cover.png", caption: "Ships and wireframe asteroids mid-engagement" }
    ],
    links: [
      { label: "View on itch.io", href: "https://mintchocodino.itch.io/8biteyecandy" }
    ],
    status: ["Runs in browser", "Ambient"]
  },

  /* ===================================================================== */
  {
    id: "dots-particles",
    title: "DOTS Particle System",
    // Filed under creative rather than games: there is no game here, and next to
    // Snake Arena and 8-Bit Eye Candy it reads as what it is — a generative piece
    // that happens to be an engineering exercise.
    category: "creative",
    featured: false,
    year: "2026",
    engine: "Unity 6 DOTS · ECS · Burst",
    role: "Solo developer",
    team: "Solo",
    summary:
      "A particle system rebuilt on Unity's Entity Component System to run simulation work " +
      "as data-oriented jobs instead of MonoBehaviours.",
    body: [
      "A focused exercise in Unity's data-oriented stack. Rather than a GameObject per " +
      "particle, particles are entities with component data, and the simulation runs as " +
      "systems over contiguous arrays — the memory layout Burst can actually vectorise.",

      "The recording below is the system running at full field: tens of thousands of " +
      "particles resolving into a rotating shell, with the structure you can see in it " +
      "falling out of the simulation rather than being authored.",

      "TODO — add your numbers if you measured them: particle count reached, and how that " +
      "compared to the MonoBehaviour approach. Benchmarks are persuasive to engineering " +
      "interviewers."
    ],
    built: [
      "Authoring components that bake scene-authored particle settings into ECS component data.",
      "Config authoring for tunable simulation parameters without recompiling.",
      "ECS systems driving particle spawning, movement and lifetime over entity queries."
    ],
    tags: ["DOTS / ECS", "Burst", "Performance", "Data-Oriented Design"],
    cover: "assets/img/dots/cover.jpg",
    media: [
      // Silent on purpose — the source capture is digital silence (-91dB), and a
      // technical demo does not need a licensed track to justify itself.
      // Encoded at CRF 33: a field of hard white points on black is about the worst
      // case H.264 has, and anything gentler doubled the file for no visible gain.
      { type: "video", src: "assets/media/dots-particles.mp4", poster: "assets/img/dots/poster.jpg",
        caption: "The system running — twelve seconds, no audio" }
    ],
    links: [],
    status: ["Video"]
  },

  /* ===================================================================== */
  {
    id: "lil-ghost",
    title: "Lil Ghost Game",
    category: "games",
    featured: true,
    year: "2024",
    engine: "Unity 2021 · C#",
    role: "Designer / developer",
    team: "Solo",
    summary:
      "A 2D platformer set in a cosmic underworld, taken through a full design process — " +
      "mood boards, challenge design, playtesting rounds and documented revisions.",
    body: [
      "Lil Ghost is a precision platformer built around a small purple ghost navigating a " +
      "dark, ember-lit cavern. Movement, wall contact and spike hazards are the whole " +
      "vocabulary; the difficulty comes from how they are arranged.",

      "It is also the project where the paper trail is the point. It went through mood " +
      "boarding, a designed set of five escalating challenges with trigger-based setups, " +
      "asset implementation planning, and two documented rounds of playtesting and revision.",

      "TODO — pick the single best example: one challenge that playtesting proved was " +
      "broken, what players actually did, and what you changed. That specific story is " +
      "worth more to a design interviewer than the whole document set."
    ],
    built: [
      "Player controller with a custom Unity inspector for tuning movement in-editor.",
      "Trigger-driven challenge setups, level flow and scene transitions.",
      "Camera follow, parallax backgrounds and screen fade transitions.",
      "Five escalating challenges designed, playtested and revised across two documented rounds."
    ],
    tags: ["2D Platformer", "Level Design", "Playtesting", "Design Documentation"],
    // Cover is the ember cavern rather than the old deck crop: it is the look the
    // whole game is built around, and it reads at card size.
    cover: "assets/img/ghost/cover.png",
    // Curated down from seven deck screenshots. The stills are frames from a full
    // playthrough capture, cropped clear of the Unity Editor chrome (the Game view
    // sits at y 98..698 in a 1280x720 recording) — real gameplay beats the deck's
    // crops. One design screenshot stays, because the designed-challenge story is
    // what this entry is actually about.
    media: [
      // 19.5s cut from one 148s playthrough, in play order: the opening starfield,
      // the grey caverns, the ember caverns, and the ending. Music is CC BY 4.0 and
      // the credit below is the licence condition, not decoration.
      { type: "video", src: "assets/media/lil-ghost-trailer.mp4", poster: "assets/img/ghost/trailer-poster.png",
        caption: "Twenty seconds across one full run — the caverns, the hazards and the ending. Music: \"Gathering Darkness\" by Kevin MacLeod (incompetech.com), CC BY 4.0" },

      { type: "image", src: "assets/img/ghost/cavern-embers.png",
        caption: "The ember caverns — the ghost reads as the only cool colour on screen, which is what makes it findable against all that red" },
      { type: "image", src: "assets/img/ghost/pillars.png",
        caption: "A descent past spike blocks. The platforms are the safe path and the walls are not, which is the whole vocabulary of the game" },
      { type: "image", src: "assets/img/ghost/hazard.png",
        caption: "The colder upper caverns, with a spike run below the ledge" },
      { type: "image", src: "assets/img/ghost/starfield.png",
        caption: "The ending opens the cavern out into a starfield — the one moment in the game with no hazard in it" },

      { type: "image", src: "assets/img/ghost/level-climb.png",
        caption: "Design pass: a vertical climb into a hazard ceiling, one of the five escalating challenges" },
      { type: "image", src: "assets/img/ghost/moodboard.jpg",
        caption: "Mood board and colour palettes — the cosmic reference the art direction came from" },
      { type: "image", src: "assets/img/ghost/concept.png",
        caption: "Character concept" }
    ],
    links: [
      { label: "Download on itch.io", href: "https://mintchocodino.itch.io/ghost-game" }
    ],
    status: ["Video", "Download"]
  },

  /* ===================================================================== */
  {
    id: "eco-viridis",
    title: "Eco-Viridis",
    category: "design",
    featured: false,
    year: "2025",
    engine: "World bible · Collaborative",
    role: "Co-author, Technology World Bible — astronomy and communications",
    team: "Team project · UT Austin",
    summary:
      "A collaborative world bible for an original setting. I wrote the astronomy and " +
      "communications technology of a tidally locked planet, designing each system to " +
      "hand writers a story hook rather than a rule they had to work around.",
    body: [
      "Eco-Viridis is a constructed world documented across four linked bibles — science, " +
      "technology, culture and society, and government relations. The design premise is " +
      "that magic is not innate to living things but a gravitational force bound up in the " +
      "planet's rock, which then constrains everything downstream: how the world " +
      "physically moves, what technology is possible, and who holds power.",

      "I co-authored the Technology bible with four others and owned two sections of it: " +
      "astronomy, and information technology and communication. The brief I set myself was " +
      "that technology in a shared world is a tool for whoever writes in it next. A system " +
      "that only says what is impossible closes doors. Every rule I wrote was meant to open " +
      "one.",

      "The planet is tidally locked, so I split astronomy in two along that line. The light " +
      "side never sees a night sky and cannot do optical astronomy at all, so it reads the " +
      "cosmos in radio. The dark side, under permanent night, has the better telescopes and " +
      "uses the stars to navigate — which makes celestial navigation a dark-side skill and " +
      "an instant reason for a light-side character to need a dark-side guide.",

      "Communications works the same way. The light side has a regional radio network but " +
      "only at fixed terminals; the dark side is mostly proximal, so news travels slowly and " +
      "arrives distorted. Data is stored in the same magic-bearing rock the world runs on, " +
      "read in underground terminals shielded from sunlight, and moved through buried tubes " +
      "of magic-infused fluid — so archives are literally buried, physically vulnerable, and " +
      "controlled by whoever can afford the infrastructure."
    ],
    built: [
      "Astronomy for a tidally locked planet — radio astronomy on the sunward side, optical astronomy and celestial navigation on the dark side, each an asymmetry a writer can build a plot on.",
      "Information technology and communication across both hemispheres: fixed-terminal radio networks, handheld short-range transmitters, and the proximal, rumour-prone communication of the dark side.",
      "Data storage and transmission built on the setting's own magic system — information held in the gravitational state of moonstone, read in sun-shielded underground terminals, carried by buried conduits of magic-infused fluid.",
      "Worked inside a five-person section split on the Technology bible, cross-referencing against the Science, Culture & Society and Government Relations bibles so the technology stayed consistent with rules other people had written."
    ],
    tags: ["World Building", "Systems Design", "Collaborative Writing"],
    cover: "assets/img/ecoviridis/cover.jpg",
    media: [
      { type: "image", src: "assets/img/ecoviridis/miro-board.jpg",
        caption: "The shared Miro board the world was built on — brainstorming clusters, the team's section split, and the four world bibles with their mood boards. Team workspace" },

      { type: "excerpt", label: "Astronomy", meta: "Technology World Bible — my section",
        text: [
          "Since the light side of the planet is tidally locked with the sun, astronomy on the light side of the planet is unrecognizable to the normal conception of astronomy. Instead of using telescopes to look at the night sky which capture only visible light, astronomers on the light of the planet use radio telescopes to capture radio waves that appear in the cosmos.",
          "Engulfed in constant night, astronomy is an important part of civilization on the dark side of the planet. The rare nomad or explorer of the dark side uses the stars to create maps to assist in navigating the darkened half of the planet. Compared to most other forms of technology on this side of the planet, telescopes and other instruments that are used to observe the stars are more advanced, giving astronomers tools to observe cosmological events and understand how gravity behaves."
        ] },

      { type: "excerpt", label: "Information Technology & Communication", meta: "Technology World Bible — my section",
        text: [
          "The magical rocks can store information through analyzing the gravitational state of its subatomic particles. If properly contained, this information can be preserved nearly indefinitely, making storing and transporting large amounts of data possible with these rocks. Information can be uploaded and read in specially built terminals underground so as to avoid any interference with the sun. Underground networks of tubes filled with fluid infused with magic allow the data to be transmitted. This practice is primarily only done by the light side of the planet, and using this method of data manipulation is only performed by larger, more influential bodies of civilization, like governments."
        ] }
    ],
    links: [
      { label: "The world on Miro", href: "https://miro.com/app/board/uXjVKjTG50Y=/" }
    ],
    status: ["Writing", "Team"]
  },

  /* ===================================================================== */
  {
    id: "narrative",
    title: "Narrative Work",
    category: "design",
    featured: false,
    year: "2024–2025",
    engine: "Screenwriting · Game narrative",
    role: "Writer",
    team: "Solo",
    summary:
      "Original scripts and game narrative — the Conquest opening cutscene, produced end " +
      "to end, plus the Over Yonder narrative bible and the short fiction Deliverance.",
    body: [
      "Three pieces, each doing a different job. Conquest is a produced opening cutscene: " +
      "a 15th-century Spanish galleon torn apart by a storm, and a captain who grabs a " +
      "glowing Mayan gem as the ship explodes and is pulled into the sky by something that " +
      "is not weather. I wrote it as a shooting script and took it through to a finished, " +
      "edited film — the video below is the result.",

      "Over Yonder is a narrative bible for a game about growing out of adolescence. A boy's " +
      "father is lost at sea and the boy goes looking for him. Every character and location " +
      "in it is an explicit stand-in for something on that journey: the siren is temptation, " +
      "the false friend is hedonism, the undead are the small problems that only overwhelm " +
      "you all at once, and the cave is Plato's, literally. The point of the document is " +
      "that the emotional map and the world map are the same map.",

      "Deliverance is short prose rather than game writing — a sci-fi piece about M0004, " +
      "born into forced labour on a planet the ruling Union is terraforming into a monument " +
      "to itself. It is the one in the set where the writing has to carry everything, with " +
      "no art, no engine and no interactivity to lean on."
    ],
    built: [
      "Conquest — wrote the opening cutscene as a formatted shooting script, then produced it end to end: shot list, animatic, art direction, edit and title cards.",
      "Over Yonder — a narrative bible covering premise, the full character roster, settings mapped to story beats, and the branching first choice the player faces.",
      "Deliverance — an original short story, taken from working draft to final draft.",
      "A consistent method across all three: decide what a piece is about first, then make every character, location and system in it carry some of that meaning."
    ],
    tags: ["Narrative Design", "Screenwriting", "Short Fiction", "Animation"],
    cover: "assets/img/narrative/cover.jpg",
    media: [
      { type: "youtube", src: "WgTmq2ErULU",
        caption: "Conquest — the opening cutscene, written and produced end to end" },

      { type: "excerpt", label: "Conquest", meta: "Opening cutscene — shooting script",
        text: [
          "EXT. ATLANTIC OCEAN — NIGHT. Thunder roars across a black, heaving sea. A 15th-century Spanish galleon battles against towering waves. Rain lashes the deck. Lanterns swing wildly, casting frantic shadows.",
          "AT THE HELM — CAPTAIN PABLO DEL MAR grips the great wooden wheel, water pouring down his weathered face. He shouts above the storm: \"Hold the lines! Secure the mainsail! Brace yourselves, men — she'll not take us yet!\"",
          "INT. STERNCASTLE — SAME TIME. The sterncastle rocks violently. Books, maps, and navigational tools crash from shelves. A large chest slides across the floor and bursts open — gold coins and Mayan jewels spill across the planks. Amidst the treasure, one GEM begins to emit a faint, eerie glow."
        ] },

      { type: "image", src: "assets/img/narrative/conquest-helm.jpg",
        caption: "Captain Del Mar at the wheel — the storm sequence that opens the film" },
      { type: "image", src: "assets/img/narrative/conquest-gem.jpg",
        caption: "The chest bursts open and the gem starts to glow. The object the whole sequence turns on" },
      { type: "image", src: "assets/img/narrative/conquest-storyboard.jpg",
        caption: "Storyboard pass — staging the explosion before any final art existed" },
      { type: "image", src: "assets/img/narrative/animatic.jpg",
        caption: "Animatic frame — rough pass, blocking the shot for timing" },

      { type: "excerpt", label: "Deliverance", meta: "Short fiction — opening",
        text: [
          "Three sequential buzzes, deafening to the ears forced to listen — that was the sound of the alarm that conducted every aspect of life for people of Deplora. M0004, a descendant of a political prisoner sent to Deplora six-hundred and sixty years ago — though he doesn't know this — opened his eyes to the same blaring alarm he's heard his entire life. The alarm looped as he stared at the plastic shell of his sleeping pod, waiting for the lock to unlatch, freeing him into a caged world.",
          "\"May the work of today fulfill you, brother,\" J1314 proclaimed.",
          "\"May the work of today fulfill you, brother,\" M0004 repeated back — a creed mindlessly parroted after it had been ingrained in the Deploran minds since leaving their artificial wombs at age seven."
        ] },

      { type: "excerpt", label: "Over Yonder", meta: "Narrative bible — character design",
        text: [
          "The siren: The embodiment of temptation, the Siren becomes an obstacle that the boy must face on his journey. She lures sailors in with lust song and feeds on those who are weak and lack self-discipline.",
          "The false friend: Peter Pan type character that you meet along the journey. Ultimately scared of growing up and what that might mean, doesn't want to face the responsibility of life and would rather indulge in temporary pleasures. He's the embodiment of hedonism.",
          "The undead: The undead are representative of speed bumps in life. Little roadblocks that are easy to deal with one at a time but if a plethora of these small problems all emerge at once it can be overwhelming.",
          "The storm: The storm is the lowest point in the journey. It is the abyss in the hero's journey. It is a challenge that the boy must face alone and it is the place where his transformation into independence takes place."
        ] }
    ],
    links: [
      { label: "Watch Conquest on YouTube", href: "https://youtu.be/WgTmq2ErULU" }
    ],
    status: ["Writing", "Video"]
  },

  /* ===================================================================== */
  {
    id: "brotivator",
    title: "Brotivator 5000",
    category: "interactive",
    featured: false,
    year: "2025",
    engine: "Arduino · Physical computing",
    role: "Build, firmware and the film",
    team: "Team project · UT Austin",
    summary:
      "A wearable helmet that listens to the room and sprays you in the face when the " +
      "party gets too quiet. An Arduino build, and a joke taken entirely seriously.",
    body: [
      "The brief was to build an Arduino product around a specific user problem. The " +
      "problem we picked: you are at an event that has died, and nobody will admit it. " +
      "The Brotivator 5000 is a helmet with a clear visor, a sound sensor and a water " +
      "jet. It listens for the noise of a room actually enjoying itself, and if it stops " +
      "hearing any, it sprays the wearer in the face. You have to keep making noise to " +
      "avoid getting hit, which is the joke and also, technically, the solution.",

      "It is a comedy product, but nothing about the build was a joke. I assembled the " +
      "wearable and wrote the firmware: the electronics — breadboard, battery, sound " +
      "sensor and pump — sit inside the visor where the wearer can see them, which is the " +
      "whole aesthetic. The threat is visible the entire time you have it on. I also " +
      "wrote, shot and edited the infomercial we pitched it with, which is the video below.",

      "Playtesting was mostly people understanding the concept immediately and then asking " +
      "to try it. The one piece of critical feedback we acted on was a safety issue a " +
      "tester raised about the spray, which we designed around before the final build."
    ],
    built: [
      "Assembled the wearable end to end — the helmet enclosure, the visor housing, and the sensor, pump and power mounted inside it.",
      "Wrote the Arduino firmware: reading the sound sensor, deciding when the room has gone quiet, and triggering the spray.",
      "Wrote, shot and edited the infomercial the piece was pitched with, which is the video above."
    ],
    tags: ["Arduino", "Physical Computing", "Prototyping", "Wearables"],
    cover: "assets/img/brotivator/cover.jpg",
    media: [
      { type: "youtube", src: "FRx8ENo_-tY",
        caption: "The pitch, played straight — the infomercial I wrote, shot and edited for the Brotivator 5000" },
      { type: "image", src: "assets/img/brotivator/build-electronics.jpg",
        caption: "Inside the visor — breadboard, 9V supply, sound sensor and wiring, mounted where the wearer can watch it" }
    ],
    links: [
      { label: "Watch on YouTube", href: "https://youtu.be/FRx8ENo_-tY" }
    ],
    status: ["Video", "Team"]
  },

  /* ===================================================================== */
  /* Hidden entries: kept here so they are one word away from going live.   */
  /* Flip `hidden` to false when you have something worth showing.          */
  /* ===================================================================== */
  {
    id: "offroad-rovers",
    title: "Off-Road Rovers",
    category: "games",
    hidden: true,
    year: "2024",
    engine: "Unity · C#",
    role: "Solo developer",
    team: "Solo",
    summary: "An off-road vehicle prototype.",
    body: ["TODO"],
    built: [],
    tags: ["Vehicle Physics", "Prototype"],
    media: [],
    links: [],
    status: []
  },

  {
    id: "forge",
    title: "FORGE",
    category: "design",
    hidden: true,
    year: "2025",
    engine: "Pitch · Business",
    role: "TODO",
    team: "Team project",
    summary: "A game pitch developed with a full deck and supporting legal memo.",
    body: ["TODO"],
    built: [],
    tags: ["Pitching", "Production"],
    media: [],
    links: [],
    status: []
  }

];
