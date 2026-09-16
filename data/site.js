/* ---------------------------------------------------------------------------
   SITE CONFIG — edit this file to change your identity, links and about text.
   Anything left as an empty string "" is automatically hidden on the site.
   --------------------------------------------------------------------------- */

window.SITE = {
  name: "Nathanial Hodnett",
  role: "Game Development · Data Collection",

  // One or two sentences. This is the first thing a recruiter reads.
  statement:
    "I build games and the systems underneath them — gameplay engineering, " +
    "procedural generation, and experiences that reach off the screen into " +
    "physical space.",

  // The "spec sheet" block in the hero. Add or remove rows freely.
  spec: [
    { label: "Engines",   value: "Unity, Unreal Engine" },
    { label: "Languages", value: "C#, C++, Python" },
    { label: "Tools",     value: "Blender, Aseprite, Photoshop, DaVinci Resolve" },
    { label: "Mocap",     value: "Qualisys Track Manager" },
    { label: "Education", value: "B.S. Arts & Entertainment Technologies, UT Austin" },
    { label: "Location",  value: "Corpus Christi, TX" },
    { label: "Status",    value: "Open to work" }
  ],

  // Leave a URL empty ("") and its link disappears from the site.
  links: {
    email:    "nathanialhodnett@gmail.com",
    github:   "https://github.com/MintChocoDino",
    itch:     "https://mintchocodino.itch.io/",
    linkedin: "https://www.linkedin.com/in/nathanial-hodnett-6664a5270/",
    resume:   "assets/docs/NathanialHodnett-Resume.pdf"
  },

  about: [
    "I'm an Arts and Entertainment Technologies graduate from UT Austin, currently " +
    "building training environments for household robotics at Sunday Robotics. My day " +
    "job is constructing real household spaces and capturing them with multi-sensor, " +
    "multi-camera rigs — turning the mess and variation of actual homes into repeatable " +
    "training data for a domestic assistance robot.",

    "The through-line with my game work is the same problem from both directions: how " +
    "physical space becomes something a system can act on. In Labyrinth that meant " +
    "taking motion-capture data and building a maze you navigate blindfolded, by touch " +
    "and sound. In Zombits it meant generating the space procedurally and making it hold " +
    "up under a wave system. I like the layer where software meets the room it's in.",

    "Before this I spent four years in hospitality and team leadership — bartending, " +
    "training servers, running bar service at a multi-day festival. It's where I learned " +
    "to stay useful under pressure and on a deadline. I'm looking to keep working at the " +
    "intersection of interactive design and emerging technology, on teams building things " +
    "people actually use."
  ],

  footerNote: "Built from scratch — no framework, no build step."
};
