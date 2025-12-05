var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    var legendaryJokers = {
                "Canio": "img/Joker Canio.png",
                "Chicot": "img/Joker Chicot.png",
                "Perkeo": "img/Joker Perkeo.png", 
                "Triboulet": "img/Joker Triboulet.png", 
                "Yorick": "img/Joker Yorick.png"
    }

    
    var x = 500
    var HZPlace = 0
    for (let joker in legendaryJokers){
    
    obstacleMake(legendaryJokers[joker], HZPlace);
    HZPlace ++;
    if (HZPlace === 3){
      HZPlace = 0;
    }
    }
    function obstacleMake(enemy, place){
    var HZ = 20;
    var Damage = 100;
    var HitZone = game.createObstacle(HZ, Damage);
    HitZone.x = x;
    if (place === 0){
    HitZone.y = groundY-20;
    }
    else if (place === 1){
    HitZone.y = groundY-100;
    }
    else{
    HitZone.y = groundY-150;
    }
    game.addGameItem(HitZone);

    var jokes = draw.bitmap(enemy);
    jokes.y = -20
    jokes.x = -20
    HitZone.addChild(jokes);
    x += 600
    }
    
    // setInterval(createEnemy(1367, groundY - 20), 1000);
    setInterval(() => {
      createEnemy(1367, groundY - 20)
    }, 1000);

    

    function createEnemy(x, y){
   
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    enemy.velocityX = -10;
    enemy.rotationalVelocity = 10;
    game.addGameItem(enemy);
    var count = 0
    setInterval(() => {
      if (count === 0){
      enemy.velocityY = -1;
      count = 1;
      }
      else {
        enemy.velocityY = 1;
        count = 0;
      }
    }, 3);
    enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
    };
    enemy.onProjectileCollision = function () {;
      game.increaseScore(100);
      enemy.flyTo()
      
      
    };
  }


  function createReward (){

  }
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
