// dots = 1 at start
// when button clicked dots ++
// add dot to Array
// add dot poses to dif array
// get a hit by doing 
for (let i = 0; xPos[0] >= xPos[i] - 70 && xPos[0] <= xPos[i] + 70 && yPos[0] >= yPos[i] - 70 && yPos[0] <= yPos[i] + 70; i ++){
  moveBoxTo2(true, true, i);
}