/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    let lineShadeX = 0;
    let lineShadeY = 0;

    let x = 0;
    let y = 0;

    while (x <= width) {

        stroke(lineShadeX);
        line(x, 0, x, height);

        lineShadeX += 5;
        x += 5;

    };

    while (y <= height) {

        stroke(lineShadeY);
        line(0, y, width, y);

        lineShadeY += 5;
        y += 5;

    };



    // stroke(25);
    // line(50, 0, 50, height);

    // stroke(50);
    // line(100, 0, 100, height);

    // stroke(75);
    // line(150, 0, 150, height);

    // stroke(100);
    // line(200, 0, 200, height);

    // stroke(125);
    // line(250, 0, 250, height);

    // stroke(150);
    // line(300, 0, 300, height);

    // stroke(175);
    // line(350, 0, 350, height);

    // stroke(200);
    // line(400, 0, 400, height);

    // stroke(225);
    // line(450, 0, 450, height);

    // stroke(250);
    // line(500, 0, 500, height);
}