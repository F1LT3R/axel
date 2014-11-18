
  // Uses AXEL's node module
  var ctx = require('../index.js');
  
  // Clear the terminal
  ctx.clear();

  // Sets the pixel BG color to orange
  ctx.bg(255,128,0);


  // Get the center of the console
  var midX = ctx.cols / 2
    , midY = ctx.rows / 2
    ;

  // Draws a circle in the middle
  ctx.circ(midX, midY, 20);

  // Note: circles are draw squashed becuase 
  // the terminals characters are usually 
  // 1.6 times high as they are wide


  // Position the cursor at the end of the console
  // so as not to draw over the bottom of the circle
  ctx.cursor.restore();