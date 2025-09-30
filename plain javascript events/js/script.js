/**
 * plain events experimenting with javascript
 * by emile bedard
 */

"use strict";

const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff",
    },
    switchKey: 32
}



/**
 * 
*/
function setup() {
    createCanvas(400, 400);


    window.addEventListener("keyDown", changeBG);
}


/**
 *
*/
function draw() {
    background(bg.fill);
}

function changeBG(event) {
    if (event.keyCode === bg.switchKey) {
        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white;
        }

        else {
            bg.fill = bg.fills.black;
        }
    }
}