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
      //start game
      lvl = 1;
      levelsetup();
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500,"navy"); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
  function levelsetup() {
  if (lvl === 1) {
    createPlatform(0, 650,400, 2, "red"),
    createPlatform(400, 550, 2, 100, "red")
    createPlatform(500, 650, 50, 2, "red")
    createPlatform(550, 450, 50, 2, "red")
    createPlatform(200, 350, 250, 2, "red")
    createCollectable("database", 250, 300, 1, 0.7)
  }
  else if (lvl === 2) {
    createPlatform(0, 400, 400, 2, "blue")

  }
  else {
    lvl = 1;
    levelsetup();
  }

  createPlatform(-50, -50, canvas.width + 100, 50); // top wall
  createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
  createPlatform(-50, -50, 50, canvas.height + 500,"navy"); // left wall
  createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
}


  

    


    // TODO 2 - Create Platforms



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
