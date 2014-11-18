
  // Uses AXEL's node module
  var ctx = require('../index.js');
  
  // Clear the terminal/screen/console
  ctx.clear();

  // Background to red, foreground to white
  ctx.bg(255,0,0);
  ctx.fg(255,255,255);
  ctx.text(5,1," WHITE ON RED! ");

// Background to yellow, foreground to black
  ctx.bg(255,255,0);
  ctx.fg(0,0,0);
  ctx.text(10,2," BLACK ON YELLOW! ");
  

  // Position the cursor at the end of the console
  // so as not to draw over the bottom of the circle
  ctx.cursor.restore();