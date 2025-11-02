/**
 * Leaf floor maker
 * by emile bedard
 * 
 * This code creates random leaves at the click of a 
 * button for a complete fall immersion, 
 * let's celebrate the harvest season together
 */

"use strict";

let leaves = []; // this array will store the leaves we create

/**
 * creates canvas HD resolution
*/
function setup() {
    createCanvas(1080, 1920);
    angleMode(DEGREES);
}

/**
 * creates a new leaf
 */
function createLeaf() {

    let newLeaf = {
        x: random(0, width),
        y: random(0, height),
        angle: random(0, 360),
        colorR: 190,
        colorG: random(60, 200), //  between 60 and 200 to choose tint of leaf between yellow-ish and red-ish and everything in between
        colorB: 0,
    }
    return newLeaf;
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(190, 150, 0);

    for (let newLeaf of leaves) {
        drawLeaf(newLeaf);
    };
}

function drawLeaf(leafIndex) {
    push();
    translate(leafIndex.x, leafIndex.y);
    rotate(leafIndex.angle);
    fill(leafIndex.colorR, leafIndex.colorG, leafIndex.colorB);
    noStroke();
    bezier(0, 0, 500, -540, -500, -540, 0, 0);
    arc(0, -300, 400, 400, 266, 275);

    pop();
}

/**
 * adds a leaf to the array everytime the user click's mouse button
 */
function keyPressed() {
    leaves.push(createLeaf());
}