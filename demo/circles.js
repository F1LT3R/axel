'use strict';

var screen = require('../index.js');

// random integer over interval [min, max)
function rand(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// a 'color' is a point bouncing around a 3d color-space cube
function randomColor() {
	return [
		rand(0, 256),	// red
		rand(0, 256),	// green
		rand(0, 256),	// blue
		rand(0, 21)-10,	// red vector component
		rand(0, 21)-10,	// green vector component
		rand(0, 21)-10	// blue vector component
	];
}

// change the color using the vector and bounce at the "walls"
function mutateColor(c) {
	for (var i = 0; i < 3; i++) {
		c[i] += c[i+3];
		if (c[i] > 255) {
			c[i] = 255 - (c[i] - 255);
			c[i+3] = -c[i+3];
		} else if (c[i] < 0) {
			c[i] = -c[i];
			c[i+3] = -c[i+3];
		}
	}
}

function circle() {
	var x = rand(0, screen.cols);
	var y = rand(0, screen.rows);

	var radiusLimit = rand(1, Math.max(screen.rows,screen.cols) / 2);

	var radius = rand(0, 2) * radiusLimit;
	var radiusDelta = radius ? -1 : 1;

	var color = randomColor();
	var brush = String.fromCharCode(32 + rand(0,95)); // char 127 is unprintable

	var interval = setInterval(function() {

		mutateColor(color);

		screen.fg(color[0], color[1], color[2]);
		screen.brush = brush;
		screen.circ(x,y,radius);

		radius += radiusDelta;

		if (--radiusLimit == 0) {
			clearInterval(interval);
			circle();
		}
	}, rand(10, 80));
}

function start() {
	screen.bg(0,0,0);
	screen.clear();

	for (var i = 0; i < 8; i++) {
		circle();
	}
}

if (screen.cols < 128 || screen.rows < 50) {
    console.log('Best viewed in a maximimed terminal (at least 128x50). ');
    setTimeout(function(){start();}, 2000);
} else {
    start();
}
