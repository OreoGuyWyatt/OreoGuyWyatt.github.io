var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        var percentX = canvasWidth / 100;
        // 1 percent of chromebook screen is 13.67
        var percentY = canvasHeight / 100;
        // 1 percent of chromebook screen is _ UNFULLSCREEN
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            // var bg = jQuery("#background");
            // bg.attr('style', "height: 100%");
            var bg = draw.bitmap("img/Screenshot 2025-11-21 9.34.44 AM.png");
            bg.x = 0;
            bg.y = 0;
            bg.scaleX = 3.1;
            bg.scaleY = 3.1;     
            var backgroundFill = draw.rect(canvasWidth,canvasHeight, 'white');
            background.addChild(backgroundFill);
            // background.addChild(bg);

            var legendaryJokers = {
                "Canio": draw.bitmap("img/Joker Canio"),
                "Chicot": draw.bitmap("img/Joker Chicot"),
                "Perkeo": draw.bitmap("img/Joker Perkeo"), 
                "Triboulet": draw.bitmap("img/Joker Triboulet"), 
                "Yorick": draw.bitmap("img/Joker Yorick")
            }
            
            
            // for (var images in legendaryJokers){
            //     images.x = 300;
            //     images.y = 200;
            //     images.scaleX = 1;
            //     images.scaleY = 1;   
            //     background.addChild(images)
            // }
            // TODO 2: - Add a moon and starfield
            
            var moon2 = draw.bitmap("img/moon.png");
            moon2.x = percentX * 73.1;
            moon2.y = percentY * 15;
            moon2.scaleX = 0.5;
            moon2.scaleY = 0.5;
            background.addChild(moon2);
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            for (var i = 0; i < 5; i++) {
            var buildingHeight = 300;
            var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1);
            building.x = percentX * 14.63 * i;
            building.y = groundY - buildingHeight;
            background.addChild(building);
            buildings.push(building);
            }   
            // TODO 3: Part 1 - Add a tree
            
            tree = draw.bitmap("img/tree.png");
            tree.x = 0;
            tree.y = 0;
            background.addChild(tree);
            
            // perkeo = draw.bitmap("img/Joker Perkeo");
            // perkeo.x = 0;
            // perkeo.x = 0;
            // background.addChild(perkeo);
            


            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
           
            tree.x = tree.x - percentX * 0.36;
            
            if (tree.x < percentX * -14.63) {
                tree.x = canvasWidth;
            }
           


          for (var i = 0; i < buildings.length; i++) {
            var eachElement = buildings[i];
            eachElement.x  = eachElement.x - percentX * 0.73
            if (eachElement.x < percentX * -14.63){
                eachElement.x = canvasWidth;
             }            
            }
         } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
