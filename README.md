#AXEL (ASCII-Pixel)

AXEL is a Node.js graphics library for drawing graphics to your console with ASCII characters. AXEL has been designed to help create games, retro graphics and spice up the terminal components of your Node.js applications.

> AXEL is short for ASCII-PIXEL. 

##Basic Usage

```javascript
var ctx = require('axel');

// Clear the terminal
ctx.clear();

// Sets the pixel BG color to green
ctx.bg(0,255,0);

// Draws a line into the console
ctx.line(1,1,10,10);
```

##Example Output

The screenshot below demonstrates a game I am currently writing where AXEL is being used to control the pixels. You can find the source for the Blitzr game here: https://github.com/F1LT3R/blitzr

![Blitzr a Space-Invaders type Arcade Game using AXEL](http://i.imgur.com/ZYBBxnq.gif)

##Commands

###box(x1, y1, width, height)

![Box](http://i.imgur.com/QkL5hxO.png)

```javascript
// Uses AXEL's node module
var ctx = require('axel');

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
```


###line(x1, y1, x2, y2)

![Line](http://i.imgur.com/mwqd0ab.png)

```javascript
// Uses AXEL's node module
var ctx = require('axel');

// Clear the terminal
ctx.clear();

// Sets the pixel BG color to green
ctx.bg(0,255,0);

// Draws a line into the console
ctx.line(1,1,10,10);

ctx.cursor.restore();
```



###point(x, y)

![Point example](http://i.imgur.com/qaksotU.png)

```javascript
// Uses AXEL's node module
var ctx = require('axel');

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
```


###fg(red, green, blue)

Changes the foreground color of the ASCII-Pixel

###bg(red, green, blue)

Changes the background color of the ASCII-Pixel



###text(x, y, string)

![Text](http://i.imgur.com/xo3xXxA.png)

```javascript
// Uses AXEL's node module
var ctx = require('axel');

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
```


###scrub(x1, y1, width, height)

Removes pixels from the console. Similar to HTML5 Canvas 2D context.clear().

![Scrub example](http://i.imgur.com/G1iL3G3.png)

```javascript
var ctx = require('axel');

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
```


###brush = '[character]'

Changes the character that gets drawn into the pixel location. This can be used to create texture effects, and ASCII-Art.

![Character brush example](http://i.imgur.com/XPoavKl.png)

```javascript
var ctx = require('axel');

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
```





###clear()

Clears the whole console. Similar to writing "clear" in your terminal.




##Demos

The demonstrations are stored in the ./demos directory. To begin a demonstration...

```bash
cd demos
node [demo-name.js] 
```


