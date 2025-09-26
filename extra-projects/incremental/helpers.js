var total = 0
function keyboardControlActions() {
  keyPress.any = false; //keyboardHandler will set this to true if you press any key. Setting the variable to false here makes sure that key press dosen't stick around.
  //this is used for respawning; if you hit any key after you die this variable will be set to true and you will respawn.
  
  if (keyPress.space || keyPress.up) {
  total ++;
  }
  }