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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    var legendaryJokers = {
                "Canio": "img/Joker Canio.png",
                "Chicot": "img/Joker Chicot.png",
                "Perkeo": "img/Joker Perkeo.png", 
                "Triboulet": "img/Joker Triboulet.png", 
                "Yorick": "img/Joker Yorick.png"
    }


    function obstacleMake(enemy,x,y,speed){
    var HZ = 20;
    var Damage = 10;
    var HitZone = game.createObstacle(HZ, Damage);
    HitZone.x = x;
    HitZone.y = y;
    HitZone.velocityX = -speed;
    game.addGameItem(HitZone);
    var jokes = draw.bitmap(enemy);
    jokes.y = -20
    jokes.x = -20
    HitZone.addChild(jokes);
    }
    

    

    function createEnemy(x, y, speed){
    var enemy = game.createGameItem("enemy", 25);
    var jokes = draw.bitmap("img/marker blind.png");
    jokes.regX = jokes.image.width / 2;
    jokes.regY = jokes.image.height / 2;
    jokes.y = 0
    jokes.x = 0
    jokes.scaleX = jokes.scaleY= 100 / jokes.image.height
    enemy.addChild(jokes);
    enemy.x = x;
    enemy.y = y;
    enemy.velocityX = -speed;
    enemy.rotationalVelocity = 10;
    game.addGameItem(enemy);
    enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
    };
    enemy.onProjectileCollision = function () {
      game.increaseScore(100);
      enemy.flyTo()
      
      
    };
  }



  function createReward(x, y, speed){
   
    var reward = game.createGameItem("reward", 25);
    var small = draw.bitmap("img/small blind.png");
    small.regX = small.image.width / 2;
    small.regY = small.image.height / 2;
    small.y = 0
    small.x = 0
    small.scaleX = small.scaleY= 100 / small.image.height
    reward.addChild(small);
    reward.x = x;
    reward.y = y;
    reward.velocityX = -speed;
    reward.rotationalVelocity = 10;
    game.addGameItem(reward);
    reward.onPlayerCollision = function () {
      game.increaseScore(100);
      game.changeIntegrity(+10);
    };
    reward.onProjectileCollision = function () {
      game.increaseScore(100);
      game.changeIntegrity(+10);
      reward.flyTo()
      
      
    };
  }
  function createMarker(x, y, speed){
   
    var marker = game.createGameItem("marker", 25);
    var big = draw.bitmap("img/big bling.png");
    big.regX = big.image.width / 2;
    big.regY = big.image.height / 2;
    big.y = 0
    big.x = 0
    big.scaleX = big.scaleY= 100 / big.image.height
    marker.addChild(big);
    marker.x = x;
    marker.y = y;
    marker.velocityX = -speed;
    marker.rotationalVelocity = 10;
    game.addGameItem(marker);
    marker.onPlayerCollision = function () {
      startLevel();
    };
    marker.onProjectileCollision = function (){
      startLevel(marker.x);
    };
  }
  
    function startLevel(x) {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      var levelSpeed = level.speed;
      for (var i = 0; i < levelObjects.length; i++){
        if(levelObjects[i].type === "Canio"){
          obstacleMake(legendaryJokers.Canio, levelObjects[i].x + x, levelObjects[i].y,levelSpeed);
        }
        else if(levelObjects[i].type === "Chicot"){
          obstacleMake(legendaryJokers.Chicot, levelObjects[i].x + x, levelObjects[i].y,levelSpeed);
        }
        else if(levelObjects[i].type === "Perkeo"){
          obstacleMake(legendaryJokers.Perkeo, levelObjects[i].x + x, levelObjects[i].y,levelSpeed);
        }
        else if(levelObjects[i].type === "Triboulet"){
          obstacleMake(legendaryJokers.Triboulet, levelObjects[i].x + x, levelObjects[i].y,levelSpeed);
        }
        else if(levelObjects[i].type === "Yorick"){
          obstacleMake(legendaryJokers.Yorick, levelObjects[i].x + x, levelObjects[i].y,levelSpeed);
        }
        else if(levelObjects[i].type === "enemy"){
          createEnemy(levelObjects[i].x + x, levelObjects[i].y, levelSpeed);
        }
        else if(levelObjects[i].type === "reward"){
          createReward(levelObjects[i].x + x, levelObjects[i].y, levelSpeed);
        }
        else if(levelObjects[i].type === "marker"){
          createMarker(levelObjects[i].x + x, levelObjects[i].y, levelSpeed);
        }
      }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel(0);
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
