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
}

let leaf = {
    x: 30, // will be random later
    y: 30, // will be random later
    angle: 0, // will be random later
    colorR: 100, // will be random between 60 and 200 to choose tint of leaf between yellow-ish and red-ish and everything in between
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    for (let leaf of leaves) {
        leaf.x = random(0, width);
        leaf.y = random(0, height);
        leaf.angle = random();
        leaf.colorR = random(60, 200);
        generateLeaf()
    }
}