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
    abilties:[],
    ultimate: {
      ultName: 'Self-Destruct',
      desc: 'D.Va ejects from mech as reactor is overloading creating an explosion, deals max damage of 1000 from point of explosion'
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
    abilties:[],
    ultimate: {
      ultName: 'Supercharger',
      desc: 'Deploys a device that increases damage of surrounding (within line of sight) allies by 50% for 16 seconds'
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
    abilties:[],
    ultimate: {
      ultName: 'Earthshatter',
      desc: 'Slams hammer into the ground and knocks/damages all enemies in front of Reinhardt'
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
    abilties:[],
    ultimate: {
      ultName: 'Whole Hog',
      desc: 'Roadhog transforms scrap gun to be gatling gun that cranks out a stream of shrapnel that knocks back enemies'
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
    abilties:[],
    ultimate: {
      ultName: 'Primal Rage',
      desc: 'Winston transforms boosting his health, strengthing his melee attacks, and allows him to use Jump Pack more often'
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
    abilties:[],
    ultimate: {
      ultName: 'Minefield',
      desc: 'Deploys a minefield in a collected area that deals damage of 130 for each mine'
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
    abilties:[],
    ultimate: {
      ultName: 'Graviton Surge',
      desc: 'Launches a gravity bomb that attracts/traps enemies around the bomb and deals damages as they are trapped'
    }
  },
  {
    heroName: 'Ashe',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ashe/hero-select-portrait.png',
    role: 'Damage (Hitscan)'
  },
  {
    heroName: 'Bastion',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/hero-select-portrait.png',
    role: 'Damage (Hitscan)'
  },
  {
    heroName: 'Doomfist',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/doomfist/hero-select-portrait.png',
    role: 'Damage (Flanker)'
  },
  {
    heroName: 'Genji',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/hero-select-portrait.png',
    role: 'Damage (Flanker)'
  },
  {
    heroName: 'Hanzo',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/hero-select-portrait.png',
    role: 'Damage (Projectile)'
  },
  {
    heroName: 'Junkrat',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/hero-select-portrait.png',
    role: 'Damage (Blast)'
  },
  {
    heroName: 'McCree',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/hero-select-portrait.png',
    role: 'Damage (Hitscan)'
  },
  {
    heroName: 'Mei',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mei/hero-select-portrait.png',
    role: 'Damage (Off-tank)'
  },
  {
    heroName: 'Pharah',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/hero-select-portrait.png',
    role: 'Damage (Blast)'
  },
  {
    heroName: 'Reaper',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/hero-select-portrait.png',
    role: 'Damage (Close-Range)'
  },
  {
    heroName: 'Soldier: 76',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/hero-select-portrait.png',
    role:'Damage (Hitscan)'
  },
  {
    heroName: 'Sombra',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/sombra/hero-select-portrait.png',
    role: 'Damage (Flanker)'
  },
  {
    heroName: 'Symmetra',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/hero-select-portrait.png',
    role: 'Damage (Turret)'
  },
  {
    heroName: 'Torbjorn',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/hero-select-portrait.png',
    role: 'Damage (Turret)'
  },
  {
    heroName: 'Tracer',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/hero-select-portrait.png',
    role: 'Damage (Flanker)'
  },
  {
    heroName: 'Widowmaker',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/hero-select-portrait.png',
    role: 'Damage (Hitscan)'
  },
  {
    heroName: 'Ana',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ana/hero-select-portrait.png',
    role: 'Support'
  },
  {
    heroName: 'Brigitte',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/brigitte/hero-select-portrait.png',
    role: 'Support'
  },
  {
    heroName: 'Lucio',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/hero-select-portrait.png',
    role: 'Support'
  },
  {
    heroName: 'Mercy',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/hero-select-portrait.png',
    role: 'Support'
  },
  {
    heroName: 'Moira',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/moira/hero-select-portrait.png',
    role: 'Support'
  },
  {
    heroName: 'Zenyatta',
    image: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/hero-select-portrait.png',
    role: 'Support'
  }
];

module.exports ={ heroes };

