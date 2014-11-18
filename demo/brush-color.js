
  // Uses AXEL's node module
  var ctx = require('../index.js');
  
  // Clear the terminal/screen/console
  ctx.clear();



  // "Brush" refers to a "character-brush"
  // Every time a pixel is drawn in a line for example,
  // the foreground color and the brush can be used to 
  // add texture/detail to the pixel.

  var brushRamp = " ░▒▓█";

  var h = 0;

  y =1;

  for (var y =1; y< ctx.rows; y+=1) {

    h+=.03;
    
    if(h>1){
      h=0
    }

    col = hslToRgb(h,1,.5);
    ctx.fg(col[0],col[1],col[2]);
    
    ctx.brush = brushRamp[parseInt(y%brushRamp.length)];
    
    ctx.line(1, y, ctx.cols, y);
    
  }


  ctx.cursor.restore();



  // Source: http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
  function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}