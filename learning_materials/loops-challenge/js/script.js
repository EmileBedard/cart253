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
    colorMode(HSL);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {


    for (let gradientX = 0; gradientX <= width; gradientX += 1) {
        const gradientHue = map(gradientX, 0, width, 255, 0);

        push();
        stroke(gradientHue, 100, 70);
        line(gradientX, 0, gradientX, height);
        pop();
    };


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
}