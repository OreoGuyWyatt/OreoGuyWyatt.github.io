function handleKeyDown(e) {
  keyPress.any = true;
  if (e.key === " ") {
    keyPress.space = true;
  }}

  function handleKeyUp(e) {
  if (e.key === " ") {
    keyPress.space = false;
  }}
  
