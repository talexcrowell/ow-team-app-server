const express = require('express');

const router = express.router();

router.get('/api/teamlist', (req, res) => res.json(
  [
    {
      heroName: 'D.Va',
      role: 'Tank (Dive, Burst)'
    },
    {
      heroName: 'Orisa',
      role: 'Tank (Shield)'
    },
    {
      heroName: 'Reinhardt',
      role: 'Tank (Shield)'
    },
    {
      heroName: 'Roadhog',
      role: 'Tank (Sustain)'
    },
    {
      heroName: 'Winston',
      role: 'Tank (Dive)'
    },
    {
      heroName: 'Wrecking Ball',
      role: 'Tank (Dive)'
    },
    {
      heroName: 'Zarya',
      role: 'Tank (Shield)'
    },
    {
      heroName: 'Ashe',
      role: "Damage (Hitscan)"
    },
    {
      heroName: 'Bastion',
      role: "Damage (Hitscan)"
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
      role: 'Damage '
    },
    {
      heroName: 'Soldier: 76'
    },
    {
      heroName: 'Sombra'
    },
    {
      heroName: 'Symmetra'
    },
    {
      heroName: 'Torbjorn'
    },
    {
      heroName: 'Tracer'
    },
    {
      heroName: 'Widowmaker'
    },
    {
      heroName: 'Ana'
    },
    {
      heroName: 'Brigitte'
    },
    {
      heroName: 'Lucio'
    },
    {
      heroName: 'Mercy'
    },
    {
      heroName: 'Moira'
    },
    {
      heroName: 'Zenyatta'
    }
  ]));

module.exports = router;

