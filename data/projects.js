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
                 { type:"itch",    src:"https://itch.io/embed-upload/0000000?color=0d0f11",
                   width:960, height:600 }
                 { type:"local",   src:"play/snake/index.html", ratio:"16/10" }
                 { type:"youtube", src:"VIDEO_ID" }
                 { type:"video",   src:"assets/media/file.mp4", poster:"assets/img/x.png" }
                 { type:"image",   src:"assets/img/x.png", caption:"..." }
     cover     image used on the index card. Omit for a generated placeholder.
     links     array of { label, href }
     status    array of short badges, e.g. ["Playable","Source"]
   --------------------------------------------------------------------------- */

window.PROJECTS = [

  /* ===================================================================== */
  {
    id: "zombits",
    title: "Zombits 3.0",
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

      "Version 3.0 is a full rebuild of an earlier build (Zombits VGS). The rebuild " +
      "replaced the hand-authored level with a procedural map generator and added " +
      "networked co-op on Unity's Netcode for GameObjects. The screenshots and gameplay " +
      "video below are from the earlier VGS build."
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
      // TODO: once the WebGL build is on itch, uncomment and paste your embed URL:
      // { type: "itch", src: "https://itch.io/embed-upload/0000000?color=0d0f11", width: 960, height: 600 },
      { type: "video", src: "assets/media/zombits-gameplay.mp4", poster: "assets/img/zombits/gameplay.png" },
      { type: "image", src: "assets/img/zombits/title.png",    caption: "Title screen" },
      { type: "image", src: "assets/img/zombits/gameplay.png", caption: "Mid-run gameplay — wave counter, points and equipped weapon on the HUD" },
      { type: "image", src: "assets/img/zombits/gameover.png", caption: "Game over screen" }
    ],
    links: [
      // { label: "Play in browser",  href: "https://YOURNAME.itch.io/zombits" },
      // { label: "Source on GitHub", href: "https://github.com/MintChocoDino/zombits" }
    ],
    status: ["Video"]
  },

  /* ===================================================================== */
  {
    id: "labyrinth",
    title: "Labyrinth",
    category: "interactive",
    featured: true,
    year: "2026",
    engine: "Unity 6 · C# · Qualisys QTM · Joy-Con",
    role: "TODO — your role",
    team: "TODO — solo or team size",
    summary:
      "A physical-space maze experience where a full-body motion-capture volume is the " +
      "controller and a haptic gauntlet is the feedback channel.",
    body: [
      "Labyrinth moves the maze out of the screen and into the room. A Qualisys optical " +
      "motion-capture system streams the player's real position into Unity in real time, " +
      "so walking across the physical floor is how you move through a maze that only " +
      "exists in software.",

      "The player wears a gauntlet built around Joy-Con hardware. When they walk into a " +
      "virtual wall or an enemy closes in, the gauntlet is what tells them — the feedback " +
      "arrives through touch rather than through a display. Unity also drives the room " +
      "itself over OSC, so physical lighting responds to what is happening in the maze.",

      "TODO — add a sentence about the exhibition or course context, and what you learned " +
      "about designing for a space instead of a screen."
    ],
    built: [
      "Real-time integration with Qualisys Track Manager, mapping live optical mocap coordinates into Unity world space so physical movement drives the player.",
      "Haptic gauntlet driver on Joy-Con hardware — collision events in the virtual maze are translated into rumble patterns the player feels on their arm.",
      "Procedural maze generator producing the layout, with a map display for orientation and a win condition.",
      "Enemy AI that pursues the player through the generated maze.",
      "OSC sender that broadcasts game state to external hardware, driving physical lighting in the installation space.",
      "Lighting controller and custom Unity editor tooling (audio tuner, tile/wall material editor) so the installation is tunable on site without code changes."
    ],
    tags: ["Motion Capture", "Haptics", "Physical Computing", "OSC", "Procedural Generation", "Installation"],
    media: [
      // TODO: THIS PROJECT HAS NO MEDIA YET. See CONTENT-NEEDED.md for the shot list.
      // { type: "youtube", src: "YOUR_VIDEO_ID" },
      // { type: "image", src: "assets/img/labyrinth/rig.jpg", caption: "The gauntlet" }
    ],
    links: [],
    status: ["Needs media"]
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
      "An autonomous space combat simulation — AI ships hunt each other through an " +
      "asteroid field with no player involved.",
    body: [
      "TODO — replace with your own description. From the source, this spawns AI ships and " +
      "asteroids and runs laser combat and explosions autonomously, as a generative visual " +
      "piece rather than a playable game. Correct me if that is wrong."
    ],
    built: [
      "Autonomous AI ship behaviour — target acquisition, navigation and firing.",
      "Asteroid and ship spawners that keep the scene populated as objects are destroyed.",
      "Projectile and collision system with explosion effects."
    ],
    tags: ["Generative", "AI Agents", "Visual Systems"],
    media: [
      // TODO: the source video is 380MB — too large for this repo.
      // Upload it to YouTube (unlisted is fine) and paste the video ID here:
      // { type: "youtube", src: "YOUR_VIDEO_ID" }
    ],
    links: [],
    status: ["Needs media"]
  },

  /* ===================================================================== */
  {
    id: "dots-particles",
    title: "DOTS Particle System",
    category: "games",
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
    media: [],
    links: [],
    status: ["Needs media"]
  },

  /* ===================================================================== */
  {
    id: "fps-range",
    title: "FPS Prototype",
    category: "games",
    featured: false,
    year: "2025",
    engine: "Unity 6 · C# · URP",
    role: "Solo developer",
    team: "Solo",
    summary:
      "A compact first-person shooting range — character controller, projectiles and a " +
      "target spawner, built to get the feel right.",
    body: [
      "A small, deliberately scoped prototype focused on feel rather than content: " +
      "first-person movement and look, jumping, and projectile shooting against targets " +
      "that respawn.",

      "Because the whole project is under half a megabyte, it is the cheapest thing here " +
      "to ship as a WebGL build — a good first playable for this site."
    ],
    built: [
      "First-person character controller built on Unity's Input System — movement, mouse look and jumping.",
      "Projectile system with bullet prefabs and collision response.",
      "Target spawner that keeps the range populated."
    ],
    tags: ["First-Person Controller", "Game Feel", "Input System"],
    media: [],
    links: [],
    status: ["Needs media"]
  },

  /* ===================================================================== */
  {
    id: "lil-ghost",
    title: "Lil Ghost Game",
    category: "games",
    featured: false,
    year: "2024",
    engine: "Unity 2021 · C#",
    role: "Designer / developer",
    team: "TODO — solo or team",
    summary:
      "A 2D platformer taken through a full design process — mood boards, challenge " +
      "design, playtesting rounds and documented revisions.",
    body: [
      "Lil Ghost is the project where the paper trail is the point. It went through mood " +
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
    cover: "assets/img/ghost-creature.png",
    media: [
      { type: "image", src: "assets/img/ghost-creature.png", caption: "Character concept" }
      // TODO: add gameplay screenshots and a short clip.
    ],
    links: [],
    status: ["Needs media"]
  },

  /* ===================================================================== */
  {
    id: "eco-viridis",
    title: "Eco-Viridis",
    category: "design",
    featured: false,
    year: "2025",
    engine: "World bible · Collaborative",
    role: "TODO — which bible(s) you wrote",
    team: "Team project",
    summary:
      "A collaborative world bible for an original setting, covering its science, " +
      "technology, culture and government as internally consistent systems.",
    body: [
      "Eco-Viridis is a constructed world documented across four linked bibles — science, " +
      "technology, culture and society, and government relations. The design premise is " +
      "that magic is not innate to living things but a gravitational force bound up in the " +
      "planet's rock, which then constrains everything downstream: how the world " +
      "physically moves, what technology is possible, and who holds power.",

      "TODO — state clearly which sections you personally wrote. On a team project, being " +
      "specific about your contribution is what makes it usable as a portfolio piece."
    ],
    built: [
      "TODO — list your specific contributions to the world bible."
    ],
    tags: ["World Building", "Systems Design", "Collaborative Writing"],
    media: [],
    links: [],
    status: ["Writing"]
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
    team: "TODO",
    summary:
      "Original scripts and game narrative — including Over Yonder and Deliverance — plus " +
      "an animated cutscene produced end to end.",
    body: [
      "TODO — write a short paragraph on each piece: what Over Yonder is, what Deliverance " +
      "is, and what the animated cutscene was made for. Two or three sentences each."
    ],
    built: [
      "TODO — what you wrote, and what you produced."
    ],
    tags: ["Narrative Design", "Screenwriting", "Animation"],
    media: [],
    links: [],
    status: ["Writing"]
  },

  /* ===================================================================== */
  {
    id: "brotivator",
    title: "Brotivator 5000",
    category: "interactive",
    featured: false,
    year: "2025",
    engine: "Arduino · Physical computing",
    role: "Solo",
    team: "Solo",
    summary:
      "An Arduino-driven physical device — hardware, sensing and enclosure built end to end.",
    body: [
      "TODO — describe what the Brotivator 5000 actually does, what sensors and actuators " +
      "it uses, and what problem or joke it was built around. You have a lot of build " +
      "footage for this one; pick the clearest twenty seconds."
    ],
    built: [
      "TODO — circuit, firmware, enclosure, and anything that went wrong and got fixed."
    ],
    tags: ["Arduino", "Physical Computing", "Prototyping"],
    media: [],
    links: [],
    status: ["Needs media"]
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
