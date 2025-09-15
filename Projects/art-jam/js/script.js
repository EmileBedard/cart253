/**
 * A cyclist struggles
 * By Emile Bedard
 * 
 * This project is about the everyday ups and downs of being
 * a cyclist in the city. It is interactive by responding to
 * the user mous position to change the cyclist effort to roll
 * down or climb up the hill.
 */

"use strict";

/**
 * Creates canvas
*/
function setup() {
    createCanvas(1920, 1080);

    // draws flat background one time
    background(0)
}


/**
 * draws the road and the cyclist
*/
function draw() {

    // draws the grey road
    push();
    fill(40);
    noStroke();
    rect(0, 700, 2300, 800)
    pop();

}