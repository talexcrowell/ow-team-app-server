'use strict';

const heroes = [
  {
    heroName: 'D.Va',
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
    role: 'Damage (Hitscan)'
  },
  {
    heroName: 'Bastion',
    role: 'Damage (Hitscan)'
  },
  {
    heroName: 'Doomfist',
    role: 'Damage (Flanker)'
  },
  {
    heroName: 'Genji',
    role: 'Damage (Flanker)'
  },
  {
    heroName: 'Hanzo',
    role: 'Damage (Projectile)'
  },
  {
    heroName: 'Junkrat',
    role: 'Damage (Blast)'
  },
  {
    heroName: 'McCree',
    role: 'Damage (Hitscan)'
  },
  {
    heroName: 'Mei',
    role: 'Damage (Off-tank)'
  },
  {
    heroName: 'Pharah',
    role: 'Damage (Blast)'
  },
  {
    heroName: 'Reaper',
    role: 'Damage (Close-Range)'
  },
  {
    heroName: 'Soldier: 76',
    role:'Damage (Hitscan)'
  },
  {
    heroName: 'Sombra',
    role: 'Damage (Flanker)'
  },
  {
    heroName: 'Symmetra',
    role: 'Damage (Turret)'
  },
  {
    heroName: 'Torbjorn',
    role: 'Damage (Turret)'
  },
  {
    heroName: 'Tracer',
    role: 'Damage (Flanker)'
  },
  {
    heroName: 'Widowmaker',
    role: 'Damage (Hitscan)'
  },
  {
    heroName: 'Ana',
    role: 'Support'
  },
  {
    heroName: 'Brigitte',
    role: 'Support'
  },
  {
    heroName: 'Lucio',
    role: 'Support'
  },
  {
    heroName: 'Mercy',
    role: 'Support'
  },
  {
    heroName: 'Moira',
    role: 'Support'
  },
  {
    heroName: 'Zenyatta',
    role: 'Support'
  }
];

module.exports ={ heroes };

