$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      // //start game
      // lvl = 1;
      // levelsetup();
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
createCannon('top', 420, 500);
createCannon('top', 870, 500);
createCannon('top', 1170, 500);

createPlatform(100, 500, 100, 50, '#4c4a4f', true);
createPlatform(600, 300, 10, 100, '#4c4a4f', true);
createPlatform(800, 300, 10, 100, '#4c4a4f', true);
createPlatform(1100, 350, 10, 100, '#4c4a4f', true);
createPlatform(800, 450, 100, 10, '#4c4a4f', true);
createPlatform(1000, 400, 100, 10, '#4c4a4f', true);
createPlatform(1200, 300, 100, 10, '#4c4a4f', true);
createPlatform(100, 0, 10, 650, '#4c4a4f', true);
createPlatform(100, 200, 100, 10, '#4c4a4f', true);
createPlatform(300, 500, 100, 10, '#4c4a4f', true);
createPlatform(400, 640, 100, 10, '#4c4a4f', true);
createPlatform(500, 550, 100, 10, '#4c4a4f', true);
createPlatform(300, 300, 100, 10, '#4c4a4f', true);
createPlatform(200, 300, 100, 10, '#4c4a4f', true);
createPlatform(190, 400, 10, 100, '#4c4a4f', true);

createCollectable('oreo', 250, 250);
createCollectable('leaf', 850, 400);
createCollectable('water', 1250, 250);


    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // // TODO 1 - Enable the Grid
    //  toggleGrid();
//   function levelsetup() {
//   if (lvl === 1) {
//   }
//   else if (lvl === 2) {
//     createPlatform(0, 400, 400, 2, "blue")

//   }
//   else {
//     lvl = 1;
//     levelsetup();
//   }

  createPlatform(-50, -50, canvas.width + 100, 50); // top wall
  createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
  createPlatform(-50, -50, 50, canvas.height + 500,"navy"); // left wall
  createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
// }


  

    


    // TODO 2 - Create Platforms



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
