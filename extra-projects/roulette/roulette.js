var wheel = jQuery("#wheel");
setInterval(rotateImage, 1)
var rotationSpeed = 10;
var angle = 0;

function rotateImage() {
    // Increment the angle
    angle += rotationSpeed;
    if (angle >= 360){
      angle -= 360;
    }
    wheel.css("transform", "translate(-50%, -50%)");
    wheel.css("transform",  "rotate(" + angle + "deg)");
    wheel.css("position", "absolute");
    wheel.css("top", "50%"); 
    wheel.css("left", "50%");
    
}

rotateImage();