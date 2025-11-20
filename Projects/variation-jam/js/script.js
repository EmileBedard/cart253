/**
 * Variation Jam
 * Émile Bédard
 * 
 *
 */

"use strict";

let state = "menu";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 800);
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

function mouseMouved() {
    switch (state) {
        case "menu":
            menuMouseMouved();
            break;
        case "red-variation":
            redMouseMouved();
            break
        case "green-variation":
            greenMouseMouved();
            break;
        case "happy-variation":
            happyMouseMouved();
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