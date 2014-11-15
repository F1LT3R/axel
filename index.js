#!/usr/bin/env node

(function() {

  // Requires
  var ansi = require('ansi')
    , cursor = ansi(process.stdout)
    
    , stdo = process.stdout
    , cols = stdo.columns
    , rows = stdo.rows
    , defaultChar = ' '
    
    , color = {
        fg:{ r: 255, g: 255, b: 255 },
        bg:{ r: 255, g: 255, b: 255 }
      }
    ;



  var axel = {

    // Clears a block
    scrub: function(x1, y1, x2, y2){
      var x=x1
        , y=y1
        ;
         
      // Turn off the color settings while we scrub
      cursor.reset();

      for(y=y1; y< x2; y++){
        for(x=x1; x< x2; x++){
          this.point(x, y, ' ');
        }
      }

      cursor.fg.rgb(color.fg.r, color.fg.g, color.fg.b);
      cursor.bg.rgb(color.bg.r, color.bg.g, color.bg.b);
    },


    get clear () {
      console.log('\033[2J');
    },


    // Changes the foreground character █ default is [space]
    set brush (character){
      defaultChar = character || ' ';
    },

    get brush (){
      return defaultChar;
    },


    cursorInterface: {
      get on    (){ cursor.show();  },
      get off   (){ cursor.hide();  },
      get reset (){
        cursor.reset();
        cursor.goto(rows, cols);
      }
    },


    get cursor(){
      return this.cursorInterface;
    },

    get rows(){
      return stdo.rows;
    },

    get cols(){
      return stdo.columns;
    },

    goto: function(x, y){
      cursor.goto(parseInt(x), parseInt(y));
    },

    point: function (x, y, char){
      if(!(
          x < 0             || y < 0          ||
          x > stdo.columns  || y > stdo.rows  ||
          x < 0             || y < 0          ||
          x > stdo.columns  || y > stdo.rows
      )){
          cursor.goto(parseInt(x), parseInt(y)).write(char || defaultChar);
      }
    },


    // Get in interpolation point between two points at a given magnitude
    lerp: function (p1, p2, m) {
      return ((p2 - p1) * m) + p1;
    },


    // Get the distance between two points
    dist: function (x1, y1, x2, y2){
      return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
    },


    // Get all the points along a line and draw them
    line: function (x1, y1, x2, y2) {
      var D = this.dist(x1, y1, x2, y2);

      // this.point(x1, y1);
      for(var i=0; i< D; i++){
        var m = 1 / D * i
          , x = this.lerp(x1, x2, m)
          , y = this.lerp(y1, y2, m)
          ;
        this.point(x, y);
      }
      // this.point(x2, y2);
    },

    color: function (hex, g, b, a) {
      // if 
    },

    // Changes foreground color
    fg: function (r, g, b) {
      color
      cursor.fg.rgb(r,g,b);
    },

    // Changes background color
    bg: function (r, g, b) {
      cursor.bg.rgb(r,g,b);
    },

    draw: function(cb){
      with(this){
        cb();
      }
    }
  };
  
  module.exports = axel;

}());