
  // Uses AXEL's node module
  var ctx = require('../index.js');
  
  // Clear the terminal
  ctx.clear();

  // Sets the pixel BG color to orange
  ctx.bg(0,128,255);

  // Draw 100 random blue dots on the console
  for (var i=0; i< 100; i+=1) {
    ctx.point(
      Math.random()*ctx.cols, 
      Math.random()*ctx.rows
    );
  }

  ctx.cursor.restore();