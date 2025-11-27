/**
 * Variation Jam
 * Émile Bédard
 * 
 *
 */

"use strict";

let state = "menu";
let pixelfont = "undefined";

/**
 * preload the specific font used for texts
 */
function preload() {
    pixelfont = loadFont('assets/fonts/VCR_OSD_MONO_1.001.ttf'); //loads my pixel font
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "red-variation":
            redDraw();
            break
        case "green-variation":
            greenDraw();
            break;
        case "happy-variation":
            happyDraw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "red-variation":
            redMousePressed();
            break
        case "green-variation":
            greenMousePressed();
            break;
        case "happy-variation":
            happyMousePressed();
            break;
    }
}

function mouseMoved() {
    switch (state) {
        case "menu":
            menuMouseMoved();
            break;
        case "red-variation":
            redMouseMoved();
            break
        case "green-variation":
            greenMouseMoved();
            break;
        case "happy-variation":
            happyMouseMoved();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "red-variation":
            redKeyPressed(event);
            break
        case "green-variation":
            greenKeyPressed(event);
            break;
        case "happy-variation":
            happyKeyPressed(event);
            break;
    }
}