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
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200,625,100,20);
    createPlatform(400,525,100,20);
    createPlatform(600,400,150,20);
    createPlatform(500,280,100,20);
    createPlatform(700,200,150,20);
    createPlatform(1050,450,100,20);



    // TODO 3 - Create Collectables
    createCollectable("database", 750,150);
    createCollectable("steve",600,170,1.0,0.9);
    createCollectable("diamond", 200, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("right",125,950);
    createCannon("right",700,950);
    createCannon("left",500,1080);
    createCannon("left",240,1080);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
