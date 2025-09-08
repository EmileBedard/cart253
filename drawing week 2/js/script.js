/**
 * The empty mirror
 * by Emile Bedard
 * 
 * Learning and drawing in p5!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 640,)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // creates a beautiful teel background
    background('#B2DBBF')

    // create a pink ellipse with no outline
    // representing the pink frame of an oval mirror
    push();
    noStroke();
    fill(255, 70, 150);
    ellipse(320, 320, 400, 550);
    pop();

    // creates the empty mirror glass
    push();
    fill(255, 255, 255);
    stroke('#000000');
    ellipse(320, 320, 370, 520);
    pop();


}