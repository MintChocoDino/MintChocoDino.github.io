/* ---------------------------------------------------------------------------
   SITE CONFIG — edit this file to change your identity, links and about text.
   Anything left as an empty string "" is automatically hidden on the site.
   --------------------------------------------------------------------------- */

window.SITE = {
  name: "Nathanial Hodnett",
  role: "Game Developer",

  // One or two sentences. This is the first thing a recruiter reads.
  statement:
    "I build games and the systems underneath them \u2014 procedural generation, " +
    "networked gameplay, and interfaces between software and physical hardware.",

  // The "spec sheet" block in the hero. Add or remove rows freely.
  spec: [
    { label: "Engines",   value: "Unity 6, Unity DOTS" },
    { label: "Languages", value: "C#, JavaScript, Arduino C" },
    { label: "Focus",     value: "Gameplay systems, procedural generation, interactive installation" },
    { label: "Location",  value: "TODO \u2014 city, state" },
    { label: "Status",    value: "Open to work" }
  ],

  // Leave a URL empty ("") and its link disappears from the site.
  links: {
    email:    "nphodnett10@gmail.com",
    github:   "https://github.com/MintChocoDino",
    itch:     "https://mintchocodino.itch.io/",
    linkedin: "https://www.linkedin.com/in/nathanial-hodnett-6664a5270/",
    resume:   ""                     // TODO: "assets/docs/NathanialHodnett-Resume.pdf"
  },

  about: [
    "TODO \u2014 replace this paragraph. Two to four sentences: who you are, what you " +
    "studied and where, and what kind of work you want to be doing next.",

    "TODO \u2014 optional second paragraph. A good place for the thing that makes you " +
    "different: the motion-capture and haptics work, the hardware projects, the " +
    "writing and world building."
  ],

  footerNote: "Built from scratch \u2014 no framework, no build step."
};
