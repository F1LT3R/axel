
  // Uses AXEL's node module
  var ctx = require('../index.js');
  
  // Clear the terminal
  ctx.clear();

  // Green box
  ctx.bg(128,255,0);
  ctx.box(2,2,30,15);

  // Scub some holes in the green box
  ctx.scrub(4,3,8,5);
  ctx.scrub(13,3,8,7);
  ctx.scrub(22,3,8,13);

  ctx.cursor.restore();