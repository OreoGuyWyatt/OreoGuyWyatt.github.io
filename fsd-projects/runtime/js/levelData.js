var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
  {
    name: "slow",
    number: 1,
    speed: 5,
    gameItems: [
      { type: "Canio", x: 500, y: groundY - 20 },
      { type: "enemy", x: 1000, y: groundY - 20},
      { type: "Chicot", x: 1100, y: groundY - 100 },
      { type: "Perkeo", x: 1700, y: groundY - 150 },
      { type: "enemy", x: 2000, y: groundY - 20},
      { type: "Triboulet", x: 2300, y: groundY - 20 },
      { type: "Yorick", x: 2900, y: groundY - 100 },
      { type: "enemy", x: 3000, y: groundY - 20},
      { type: "Canio", x: 3500, y: groundY - 20 },
      { type: "reward", x: 4000, y: groundY - 20 },
      { type: "Chicot", x: 4100, y: groundY - 100 },
      { type: "Perkeo", x: 4700, y: groundY - 150 },
      { type: "enemy", x: 5000, y: groundY - 20},
      { type: "Triboulet", x: 5300, y: groundY - 20 },
      { type: "Yorick", x: 5900, y: groundY - 100 },
      { type: "enemy", x: 6000, y: groundY - 20},
      { type: "Canio", x: 6500, y: groundY - 20 },
      { type: "enemy", x: 7000, y: groundY - 20},
      { type: "Chicot", x: 7100, y: groundY - 100 },
      { type: "Perkeo", x: 7700, y: groundY - 150 },
      { type: "enemy", x: 8000, y: groundY - 20 },
      { type: "Triboulet", x: 8300, y: groundY - 20 },
      { type: "Yorick", x:8900, y: groundY - 100 },  
      { type: "marker", x: 10000, y: groundY - 20},
    ],
  },
  {
    name: "medium",
    number: 2,
    speed: 10,
    gameItems: [
      { type: "Canio", x: 500, y: groundY - 20 },
      { type: "enemy", x: 1000, y: groundY - 20},
      { type: "Chicot", x: 1100, y: groundY - 100 },
      { type: "Perkeo", x: 1700, y: groundY - 150 },
      { type: "enemy", x: 2000, y: groundY - 20},
      { type: "Triboulet", x: 2300, y: groundY - 20 },
      { type: "Yorick", x: 2900, y: groundY - 100 },
      { type: "enemy", x: 3000, y: groundY - 20},
      { type: "Canio", x: 3500, y: groundY - 20 },
      { type: "reward", x: 4000, y: groundY - 20 },
      { type: "Chicot", x: 4100, y: groundY - 100 },
      { type: "Perkeo", x: 4700, y: groundY - 150 },
      { type: "enemy", x: 5000, y: groundY - 20},
      { type: "Triboulet", x: 5300, y: groundY - 20 },
      { type: "Yorick", x: 5900, y: groundY - 100 },
      { type: "enemy", x: 6000, y: groundY - 20},
      { type: "Canio", x: 6500, y: groundY - 20 },
      { type: "enemy", x: 7000, y: groundY - 20},
      { type: "Chicot", x: 7100, y: groundY - 100 },
      { type: "Perkeo", x: 7700, y: groundY - 150 },
      { type: "enemy", x: 8000, y: groundY - 20 },
      { type: "Triboulet", x: 8300, y: groundY - 20 },
      { type: "Yorick", x:8900, y: groundY - 100 },  
      { type: "marker", x: 10000, y: groundY - 20},
    ],
  },
  {
    name: "good luck",
    number: 3,
    speed: 50,
    gameItems: [
      { type: "Canio", x: 500, y: groundY - 20 },
      { type: "enemy", x: 1000, y: groundY - 20},
      { type: "Chicot", x: 1100, y: groundY - 100 },
      { type: "Perkeo", x: 1700, y: groundY - 150 },
      { type: "enemy", x: 2000, y: groundY - 20},
      { type: "Triboulet", x: 2300, y: groundY - 20 },
      { type: "Yorick", x: 2900, y: groundY - 100 },
      { type: "enemy", x: 3000, y: groundY - 20},
      { type: "Canio", x: 3500, y: groundY - 20 },
      { type: "reward", x: 4000, y: groundY - 20 },
      { type: "Chicot", x: 4100, y: groundY - 100 },
      { type: "Perkeo", x: 4700, y: groundY - 150 },
      { type: "enemy", x: 5000, y: groundY - 20},
      { type: "Triboulet", x: 5300, y: groundY - 20 },
      { type: "Yorick", x: 5900, y: groundY - 100 },
      { type: "enemy", x: 6000, y: groundY - 20},
      { type: "Canio", x: 6500, y: groundY - 20 },
      { type: "enemy", x: 7000, y: groundY - 20},
      { type: "Chicot", x: 7100, y: groundY - 100 },
      { type: "Perkeo", x: 7700, y: groundY - 150 },
      { type: "enemy", x: 8000, y: groundY - 20 },
      { type: "Triboulet", x: 8300, y: groundY - 20 },
      { type: "Yorick", x:8900, y: groundY - 100 },  
      { type: "marker", x: 10000, y: groundY - 20},
    ],
  },
];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
