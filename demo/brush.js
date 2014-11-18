
  // Uses AXEL's node module
  var ctx = require('../index.js');
  
  // Clear the terminal/screen/console
  ctx.clear();

  // "Brush" refers to a "character-brush"
  // Every time a pixel is drawn in a line for example,
  // the foreground color and the brush can be used to 
  // add texture/detail to the pixel.

  var brushes = " ░▒▓█";


  function nextBrush(n){
    return brushes[parseInt(n%brushes.length)];
  }


  // Draw some lines which step through the brush characters
  for (var y =1; y< ctx.rows; y+=1) {
    
    ctx.brush = nextBrush(y);
    
    // Each line is now draw with the specified 
    // character in each pixel
    ctx.line(1, y, ctx.cols, y);
  }


  // Draw some circles which step through some brush characters
  
  var circSize = Math.sqrt(ctx.rows + ctx.cols)*2
    , centerX = ctx.cols / 2
    , centerY = ctx.rows / 2
    ;

  for (var m =1; m< circSize; m+=1) {
    
    ctx.brush = nextBrush(m);
    
    ctx.circ(centerX, centerY, m);
  }


  ctx.cursor.restore();
