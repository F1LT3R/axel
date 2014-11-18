
  // Uses AXEL's node module
  var ctx = require('../index.js');
  
  // Clear the terminal
  ctx.clear();

  // Red box
  ctx.bg(255,0,0);
  ctx.box(2,2,8,4);

  // Yellow box
  ctx.bg(255,255,0);
  ctx.box(12,2,8,4);

  // Green box
  ctx.bg(0,255,0);
  ctx.box(2,7,8,4);

  // Blue box
  ctx.bg(0,0,255);
  ctx.box(12,7,8,4);

  ctx.cursor.restore();