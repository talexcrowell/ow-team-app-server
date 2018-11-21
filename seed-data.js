'use strict';

const heroes = [
  {
    heroName: 'D.Va',
    role: 'Tank (Dive, Burst)',
    damage: 22,
    dps: 146.74,
    health: 600,
    hps: 0,
    abilties:[
      {
        abilityName: 'Defense Matrix',
        desc: 'Absorbs incoming projectiles' 
      },
      {
        abilityName: 'Boosters',
        desc: 'Mech uses boosters to fly in the air and/or barrel through enemies'
      }, 
      {
        abilityName: 'Micro Missles',
        desc:'Shoots a burst of missles, up to 162 damage per use '
      }
    ],
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
    abilties:[
      {
        abilityName: 'Halt!',
        desc: 'Launches a graviton surge that slows nearby enemies and pulls them towards the explosion' 
      },
      {
        abilityName: 'Fortify',
        desc: 'Deploys personal barrier around Orisa reducing damage and nullifying effects for a short periodof time'
      }, 
      {
        abilityName: 'Protective Barrier',
        desc:'Tosses a stationary barrier that blocks enemies\' attacks, 900 sheild-health'
      }
    ],
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
    abilties:[
      {
        abilityName: 'Barrier Field',
        desc: 'Projects a large barrier that absorbs enemy damage. Reinhardt can not attack while projecting barrier, 2000 shield-health' 
      },
      {
        abilityName: 'Charge',
        desc: 'Charges forward in a straight line, pinning the the first enemy in his path and knocking others out of the way. Initial damage is 50, while pinning an enemy to the wall is 300 damage'
      }, 
      {
        abilityName: 'Fire Strike',
        desc:'Launches a flaming projectile that pierces shields and damages all enemies it contacts, deals 100 damage'
      }
    ],
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
    abilties:[
      {
        abilityName: 'Chain Hook',
        desc: 'Hurls a chain at a target. If the hook catches the target, Roadhog drags them closer to himself' 
      },
      {
        abilityName: 'Take A Breather',
        desc: 'Restores 300 health to self and reduces incoming damage by 50% for 2 seconds'
      }
    ],
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
    abilties:[
      {
        abilityName: 'Jump Pack',
        desc: 'Lunges Winston into the air. Upon landing, Winston staggers enemies and deals up to 45 damage' 
      },
      {
        abilityName: 'Barrier Projector',
        desc: 'Drops a bubble-shaped barrier with 600 shield-health'
      }
    ],
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
    abilties:[
      {
        abilityName: 'Grappling Claw',
        desc: 'Shoots a claw into a surface allowing for Wrecking Ball to gain momentum or act as a swing. When at max speed, Wrecking Ball inflicts 50 damage and knocks back in his path' 
      },
      {
        abilityName: 'Roll',
        desc: 'Transforms into a ball that increase movement speed. Can be used again to transform back into quad-mode'
      }, 
      {
        abilityName: 'Adaptive Shield',
        desc:'Deploys a temporary personal shield with a base of 100 shield-health and increases 100 sheild-health with each enemy within radius'
      }, 
      {
        abilityName: 'Piledriver',
        desc:'While in the air, Wrecking Ball can slam the ground dealing max damage of 100 and launches enemies into the air'
      }
    ],
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
    abilties:[
      {
        abilityName: 'Particle Barrier',
        desc: 'Projects a barrier around Zarya and absorbs damage by redirecting into energy increasing damage for Zarya\'s weapons' 
      },
      {
        abilityName: 'Projected Barrier',
        desc: 'Projects a barrier around an allu and absorbs damage by redirecting into energy increasing damage for Zarya\'s weapons'
      }
    ],
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

