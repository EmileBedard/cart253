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
    createCanvas(1080, 1920)
    angleMode(DEGREES)
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
    fill(leafIndex.colorR, leafIndex.colorG, leafIndex.colorB);
    noStroke();
    ellipse(leafIndex.x, leafIndex.y, 250);
    arc(leafIndex.x, leafIndex.y, 400, 400, leafIndex.angle, leafIndex.angle + 10);
    pop();
}

// function generateLeaf(leafIndex) {
//     leafIndex.x = random(0, width);
//     leafIndex.y = random(0, height);
//     leafIndex.angle = random();
//     leafIndex.colorG = random(60, 200);
// }

/**
 * adds a leaf to the array everytime the user click's mouse button
 */
function mousePressed() {
    leaves.push(createLeaf());
}