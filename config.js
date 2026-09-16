/**
 * ============================================================
 *  Ts makes my life easier
 * ============================================================
 */

const CONFIG = {

  /* ── Identity ──────────────────────────────────────────── */
  name:   "Lostgalaxy",                  // display name on site (navbar, hero, footer)
  title:  "MC Dev & Server Configurator",
  status: "Open To Commissions",
  currentlyWorkingOn: "PvPBot v3.5.0",   // set to "" to hide ticker

  /* ── Hero boot console lines ───────────────────────────── */
  /* These show up in the terminal block above typed title */
  consoleLines: [
    { time: "00:00:01", text: "Cooking..."       },
    { time: "00:00:02", text: "Adding Spices..." },
    { time: "00:00:03", text: "Served. 🍲"       }
  ],

  /* Hero typed lines (typed out one by one) */
  heroLines: [
    "Minecraft plugin & mod dev.",
    "5 years deep in server shi.",
    "I build things that actually work."
  ],
  heroBio: "From custom Fabric mods to fine-tuned Spigot plugins I work across the full Minecraft stack. If it runs on a server, I've probably broken and fixed it.",

  /* ── Music ─────────────────────────────────────────────── */
  music: {
    enabled:  true,
    src:      "./assets/Creator.mp3",   // capital C — must match filename exactly
    autoplay: true,                     // tries to autoplay; unlocks on first click if browser blocks it
    label:    "Creator.mp3"
  },

  /* ── Avatar ────────────────────────────────────────────── */
  avatar: {
    src:     "./assets/avatar.png",
    width:   140,
    height:  140,
    shape:   "rounded",   // "circle" | "square" | "rounded"
    border:  true,
    visible: true
  },

  /* ── Projects ──────────────────────────────────────────── */
  projects: [
    {
      name:    "Vulgar's PvPBot",
      type:    "Fabric Mod",
      version: "1.21.1",
      loader:  "Fabric",
      lang:    "Java",
      desc:    "Adds smart combat bots via Carpet PvP's API. Bots can breach swap, place cobwebs at your feet, and on UltraHard mode fire an Orbital Strike Cannon at you. Coded In Pure Java.",
      tags:    ["Java", "Fabric API", "Carpet PvP", "1.21.1"],
      link:    "https://www.youtube.com/watch?v=oHg5SJYRHA0",
      image: {
        src:    "./assets/pvpbot.png",
        height: "180px",
        fit:    "cover"
      }
    },
    {
      name:    "Vulgar's OSC",
      type:    "Fabric Mod",
      version: "1.21.1",
      loader:  "Fabric",
      lang:    "Java",
      desc:    "Addon for PvPBot. Give bots orbital strike charges, set difficulty to UltraHard, web yourself and watch the shot land. Use a charge yourself to reset the cooldown if it bugs out. Pure Java.",
      tags:    ["Java", "Fabric API", "PvPBot Addon", "1.21.1"],
      link:    "https://www.curseforge.com/minecraft/mc-mods/vulgars-orbital-strike-mod",
      image: {
        src:    "./assets/osc.png",
        height: "180px",
        fit:    "cover"
      }
    },
    {
      name:    "MaceControl",
      type:    "Spigot Plugin",
      version: "1.21.1",
      loader:  "Spigot / Paper",
      lang:    "Java",
      desc:    "Full control over mace enchant damage values. Nerf, buff, or single out a specific mace to wreck your friends. Per-enchant multipliers with live reload. Ground breach swap damage intentionally untouched & not configurable.",
      tags:    ["Java", "Spigot", "Paper", "1.21.1"],
      link:    "https://www.curseforge.com/minecraft/bukkit-plugins/macecontrol",
      image: {
        src:    "./assets/macecontrol.png",
        height: "180px",
        fit:    "cover"
      }
    }
  ],

  /* ── Skills ────────────────────────────────────────────── */
  skillGroups: [
    {
      label: "plugin development",
      file:  "plugin-dev.yml",
      sub:   "Java / Spigot API",
      lines: [
        { key: "bukkit-api",       val: "expert",        type: "bool" },
        { key: "spigot-api",       val: "expert",        type: "bool" },
        { key: "paper-api",        val: "proficient",    type: "bool" },
        { key: "java-version",     val: "8 → 17",        type: "str"  },
        { key: "event-listeners",  val: true,            type: "bool" },
        { key: "custom-commands",  val: true,            type: "bool" },
        { key: "custom-items",     val: true,            type: "bool" },
        { key: "database",         val: "SQLite, MySQL", type: "str"  }
      ]
    },
    {
      label: "mod development",
      file:  "mods.yml",
      sub:   "Fabric / Paper",
      lines: [
        { key: "fabric-mod-dev",  val: true,  type: "bool" },
        { key: "forge-mod-dev",   val: false, type: "bool" },
        { key: "mixins",          val: true,  type: "bool" },
        { key: "carpet-api",      val: true,  type: "bool" },
        { key: "client-side",     val: true,  type: "bool" },
        { key: "server-side",     val: true,  type: "bool" }
      ]
    },
    {
      label: "server configuration",
      file:  "server.yml",
      sub:   "Spigot / Paper / Velocity",
      lines: [
        { key: "multiverse-core",    val: "advanced",              type: "bool" },
        { key: "znpcs",              val: "advanced",              type: "bool" },
        { key: "luckperms",          val: "advanced",              type: "bool" },
        { key: "worldguard",         val: "advanced",              type: "bool" },
        { key: "essentialsx",        val: "advanced",              type: "bool" },
        { key: "server-software",    val: "Spigot, Paper, Purpur", type: "str"  },
        { key: "proxy",              val: "BungeeCord, Velocity",  type: "str"  },
        { key: "performance-tuning", val: true,                    type: "bool" }
      ]
    }
  ],

  /* ── Stats ─────────────────────────────────────────────── */
  stats: [
    { num: "5",   label: "Years Experience"    },
    { num: "3+",  label: "Mods & Plugins"      },
    { num: "30+", label: "Plugins Mastered"    },
    { num: "14+", label: "Servers Configured"  }
  ],

  /* ── About ──────────────────────────────────────────────── */
  aboutParagraphs: [
    "I've spent <b>5 years</b> deep in the Minecraft server ecosystem configuring, breaking, fixing, and optimising everything from vanilla survival setups to complex multi world servers.",
    "On the development side I write <b>Fabric mods and Bukkit/Paper plugins</b> in pure Java, handling everything from custom combat mechanics to Carpet API integrations and per-item stat overrides.",
    "I know the plugins server owners actually use — <b>Multiverse-Core, zNPCs, EssentialsX, WorldGuard, LuckPerms</b> and plenty more — not just as an end user, but at the configuration and troubleshooting level."
  ],

  /* ── Contact ────────────────────────────────────────────── */
  contact: {
    headline:   "Let's build something Beautiful!",
    body:       "Need a custom mod, a plugin, or someone who knows their way around a server setup/stack? Hit me up on Discord.",
    discord:    "lostgalax_y",
    discordUrl: "https://discord.com/users/lostgalax_y"
  },

  /* ── Easter egg terminal commands ──────────────────────── */
  easterEggCommands: {
    help:    "Commands: help, whoami, status, skills, uptime, sudo, version, clear, exit",
    whoami:  "Lostgalaxy — MC Dev & Server Configurator",
    status:  "Server: ONLINE | Players: 1/1 (that's you lil vro)",
    skills:  "Java · Fabric API · Spigot · Paper · LuckPerms · WorldGuard · Multiverse",
    uptime:  "5 years, 0 crashes, Roughly",
    version: "Portfolio v3.0 · MC 1.21.1 · Java 17",
    sudo:    "Permission denied. Nice try lil bro",
    exit:    "__EXIT__"
  },

  /* ── Page meta ──────────────────────────────────────────── */
  pageTitle:   "lostgalax_y // VulgarMC",
  accentColor: "#00D26A"

};
