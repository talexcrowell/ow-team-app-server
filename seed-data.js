'use strict';

const heroes = [
  {
    heroName: 'D.Va',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/dva/hero-select-portrait.png',
    role: 'Tank (Dive, Burst)',
    damage: 22,
    dps: 146.74,
    health: 600,
    hps: 0,
    abilities:['Defense Matrix','Boosters','Micro Missles'],
    ultimate: {
      ultName: 'Self-Destruct',
      desc: 'D.Va ejects from mech and launches it as a bomb, deals max damage of 1000 from point of explosion.'
    }
  },
  {
    heroName: 'Orisa',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/orisa/hero-select-portrait.png',
    role: 'Tank (Shield)',
    damage: 11,
    dps: 137.5,
    health: 400,
    hps: 0,
    abilities:['Halt!', 'Fortify', 'Protective Barrier'],
    ultimate: {
      ultName: 'Supercharger',
      desc: 'Deploys a device that increases damage of surrounding (within line of sight) allies by 50% for 16 seconds.'
    }
  },
  {
    heroName: 'Reinhardt',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/hero-select-portrait.png',
    role: 'Tank (Shield)',
    damage: 75,
    dps: 82.5,
    health: 500,
    hps: 0,
    abilities:['Barrier Field', 'Charge', 'Fire Strike'],
    ultimate: {
      ultName: 'Earthshatter',
      desc: 'Slams hammer into the ground and knocks/damages all enemies in front of Reinhardt.'
    }
  },
  {
    heroName: 'Roadhog',
    role: 'Tank (Sustain)',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/hero-select-portrait.png',
    damage: 150,
    dps: 195,
    health: 600,
    hps: 0,
    abilities:['Chain Hook', 'Take A Breather'],
    ultimate: {
      ultName: 'Whole Hog',
      desc: 'Roadhog transforms scrap gun to be gatling gun that cranks out a stream of shrapnel that knocks back enemies.'
    }
  },
  {
    heroName: 'Winston',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/winston/hero-select-portrait.png',
    role: 'Tank (Dive)',
    damage: 3,
    dps: 60,
    health: 500,
    hps: 0,
    abilities:['Jump Pack', 'Barrier Projector'],
    ultimate: {
      ultName: 'Primal Rage',
      desc: 'Winston transforms boosting health, strengthing melee attacks, and is able to use Jump Pack more often.'
    }
  },
  {
    heroName: 'Wrecking Ball',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/wrecking-ball/hero-select-portrait.png',
    role: 'Tank (Dive)',
    damage: 5,
    dps: 150,
    health: 600,
    hps: 0,
    abilities:['Grappling Claw', 'Roll', 'Adaptive Shield', 'Piledriver'],
    ultimate: {
      ultName: 'Minefield',
      desc: 'Deploys a minefield in a collected area that deals damage of 130 for each mine.'
    }
  },
  {
    heroName: 'Zarya',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/hero-select-portrait.png',
    role: 'Tank (Shield)',
    damage: 6,
    dps: 95,
    health: 400,
    hps: 0,
    abilities:['Particle Barrier', 'Projected Barrier'],
    ultimate: {
      ultName: 'Graviton Surge',
      desc: 'Launches a gravity bomb that attracts/traps enemies and deals damages as they are trapped.'
    }
  },
  {
    heroName: 'Ashe',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/hero-select-portrait.png',
    role: 'Damage (Hitscan)',
    damage: 40,
    dps: 160,
    health: 200,
    hps: 0,
    abilities:['The Viper', 'Dynamite', 'Coach Gun'],
    ultimate: {
      ultName: 'B.O.B',
      desc: 'Ashe\'s sidekick, B.O.B, charges forward and launches enemies into air, then acts as a turret.'
    }
  },
  {
    heroName: 'Bastion',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/hero-select-portrait.png',
    role: 'Damage (Hitscan)',
    damage: 20,
    dps: 160,
    health: 300,
    hps: 0,
    abilities:['Recon/Sentry', 'Self-Repair'],
    ultimate: {
      ultName: ' Config: Tank',
      desc: 'Changes into a tank and uses a powerful long-range cannon for a short period of time.'
    }
  },
  {
    heroName: 'Doomfist',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/doomfist/hero-select-portrait.png',
    role: 'Damage (Flanker)',
    damage: 6,
    dps: 66,
    health: 250,
    hps: 0,
    abilities:['Seismic Slam', 'Rising Uppercut', 'Rocket Punch'],
    ultimate: {
      ultName: 'Metoer Strike',
      desc: 'Doomfist leaps into the sku and crashes into the ground with heavy damage.'
    }
  },
  {
    heroName: 'Genji',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/hero-select-portrait.png',
    role: 'Damage (Flanker)',
    damage: 28,
    dps: 3,
    health: 200,
    hps: 0,
    abilities:['Swift Strike', 'Deflect'],
    ultimate: {
      ultName: 'Dragonblade',
      desc: 'Genji draws his sword and attacks enemies with devastating power.'
    }
  },
  {
    heroName: 'Hanzo',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/hero-select-portrait.png',
    role: 'Damage (Sniper)',
    damage: 29,
    dps: 29,
    health: 200,
    hps: 0,
    abilities:['Storm Arrows', 'Sonic Arrow'],
    ultimate: {
      ultName: 'Dragonstrike',
      desc: 'Hanzo summons a dragon that flies through the air in a straight line damaging any who touch it.'
    }
  },
  {
    heroName: 'Junkrat',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/hero-select-portrait.png',
    role: 'Damage (Blast)',
    damage: 120,
    dps: 120,
    health: 200,
    hps: 0,
    abilities:['Concussion Mine', 'Steel Trap'],
    ultimate: {
      ultName: 'RIP-Tire',
      desc: 'Junkrat deploys a motorized tire bomb that can climb and jump.'
    }
  },
  {
    heroName: 'McCree',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/hero-select-portrait.png',
    role: 'Damage (Hitscan)',
    damage: 70,
    dps: 140,
    health: 200,
    hps: 0,
    abilities:['Peacekeeper', 'Combat Roll', 'Flashbang'],
    ultimate: {
      ultName: 'Deadeye',
      desc: 'Takes a couple seconds, but McCree hits every target in front of him with deadly accuracy.'
    }
  },
  {
    heroName: 'Mei',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mei/hero-select-portrait.png',
    role: 'Damage (Off-tank)',
    damage: 45,
    dps: 45,
    health: 250,
    hps: 0,
    abilities:['Blaster: Icicle, Cryo-Freeze', 'Ice Freeze'],
    ultimate: {
      ultName: 'Bizzard',
      desc: 'Mei deploys a drone that emits freezing weather within a large area.'
    }
  },
  {
    heroName: 'Pharah',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/hero-select-portrait.png',
    role: 'Damage (Blast)',
    damage: 120,
    dps: 120,
    health: 200,
    hps: 0,
    abilities:['Concussive Blast', 'Jump Jet'],
    ultimate: {
      ultName: 'Barrage',
      desc: 'Pharah launches a barrage of rockets at aimed direction.'
    }
  },
  {
    heroName: 'Reaper',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/hero-select-portrait.png',
    role: 'Damage (Burst)',
    damage: 140,
    dps: 280,
    health: 250,
    hps: 0,
    abilities:['Wraith Form', 'Shadow Step'],
    ultimate: {
      ultName: 'Death Blossom',
      desc: 'In a whirlwind, Reaper blasts his shotguns in every direction for a period of time.'
    }
  },
  {
    heroName: 'Soldier: 76',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/hero-select-portrait.png',
    role:'Damage (Hitscan)',
    damage: 19,
    dps: 171,
    health: 200,
    hps: 0,
    abilities:['Helix Rockets', 'Sprint', 'Biotic Field'],
    ultimate: {
      ultName: 'Tactical Visor',
      desc: 'Soldier: 76 uses his visor\'s aim assist to auto-aim his rifle at enemies\' heads' 
    }
  },
  {
    heroName: 'Sombra',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/sombra/hero-select-portrait.png',
    role: 'Damage (Flanker)',
    damage: 8,
    dps: 160,
    health: 200,
    hps: 0,
    abilities:['Hack', 'Stealth', 'Translocater'],
    ultimate: {
      ultName: 'EMP',
      desc: 'Sombra releases an EMP that nullifies enemies\' abilities and gear for a brief period.'
    }
  },
  {
    heroName: 'Symmetra',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/hero-select-portrait.png',
    role: 'Damage (Turret)',
    damage: 120,
    dps: 120,
    health: 200,
    hps: 0,
    abilities:['Photon: Orb', 'Sentry Turret', 'Teleporter'],
    ultimate: {
      ultName: 'Photon Barrier',
      desc: 'Symmetra deploys a massive energy shield that spans the map and blocks all ranged attacks.'
    }
  },
  {
    heroName: 'Torbjorn',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/hero-select-portrait.png',
    role: 'Damage (Turret)',
    damage: 70,
    dps: 70,
    health: 200,
    hps: 0,
    abilities:['Rivet: Shotgun', 'Forge Hammer', 'Deploy Turret', 'Overload'],
    ultimate: {
      ultName: 'Molten Core',
      desc: 'Torbjorn launches pools of molten-goo that sets enemies on fire.'
    }
  },
  {
    heroName: 'Tracer',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/hero-select-portrait.png',
    role: 'Damage (Flanker)',
    damage: 12,
    dps: 240,
    health: 150,
    hps: 0,
    abilities:['Blink', 'Recall'],
    ultimate: {
      ultName: 'Pulse Bomb',
      desc: 'Tracer tosses a large bomb that sticks to any surface dealing high damage.'
    }
  },
  {
    heroName: 'Widowmaker',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/hero-select-portrait.png',
    role: 'Damage (Sniper)',
    damage: 120,
    dps: 120,
    health: 200,
    hps: 0,
    abilities:['Grappling Hook', 'Venom Mine'],
    ultimate: {
      ultName: 'Infra-Sight',
      desc: 'Widow\'s visor gives ally team heat signatures of enemy team for a period of time.'
    }
  },
  {
    heroName: 'Ana',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ana/hero-select-portrait.png',
    role: 'Support',
    damage: 70,
    dps: 70,
    health: 200,
    hps: 75,
    abilities:['Sleep Dart', 'Biotic Grenade'],
    ultimate: {
      ultName: 'Nano Boost',
      desc: 'Ana shoots a dart into ally boosting their health and damage given/resistance.'
    }
  },
  {
    heroName: 'Brigitte',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/brigitte/hero-select-portrait.png',
    role: 'Support',
    damage: 35,
    dps: 35,
    health: 200,
    hps: 16,
    abilities:['Repair Pack', 'Whip Shot', 'Barrier Shield', 'Shield Bash'],
    ultimate: {
      ultName: 'Rally',
      desc: 'Brigitte continously provides allies in range with up to 100 armor.'
    }
  },
  {
    heroName: 'Lucio',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/hero-select-portrait.png',
    role: 'Support',
    damage: 20,
    dps: 160,
    health: 200,
    hps: 16.25,
    abilities:['Soundwave', 'Crossfade', 'Amp It Up'],
    ultimate: {
      ultName: 'Sound Barrier',
      desc: 'Lucio blasts a wave that provides him and allies with personal shields.'
    }
  },
  {
    heroName: 'Mercy',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/hero-select-portrait.png',
    role: 'Support',
    damage: 0,
    dps: 0,
    health: 200,
    hps: 50,
    abilities:['Blaster', 'Guardian Angel', 'Resurrect'],
    ultimate: {
      ultName: 'Valkryie',
      desc: 'Mercy gains the ability to fly and her abilities are enhanced greatly.'
    }
  },
  {
    heroName: 'Moira',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/moira/hero-select-portrait.png',
    role: 'Support',
    damage: 1,
    dps: 50,
    health: 200,
    hps: 80,
    abilities:['Biotic Orb', 'Fade'],
    ultimate: {
      ultName: 'Coalescence',
      desc: 'Moira blasts a beam that heals allies and damages enemies.'
    }
  },
  {
    heroName: 'Zenyatta',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/hero-select-portrait.png',
    role: 'Support',
    damage: 46,
    dps: 115,
    health: 200,
    hps: 30,
    abilities:['Orb Volley', 'Orb of Discord', 'Orb of Harmony'],
    ultimate: {
      ultName: 'Transcendence',
      desc: 'Zenyatta is immune to damage and automatically heals all allies nearby.'
    }
  }
];

module.exports ={ heroes};

