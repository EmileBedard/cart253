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

let road = {
    color: 85,
    angle: 0,
    x: 0,
    y: 480 * 0.75,
    w: 900,
    h: 700,
}


/**
 * Creates canvas
*/
function setup() {
    createCanvas(800, 480);

    // draws flat background one time
    background(0)
}


/**
 * draws the road and the cyclist
*/
function draw() {

    drawRoad();
    drawCyclist();

}


// draws the grey road
function drawRoad() {
    push();
    fill(road.color);
    noStroke();
    rect(road.x, road.y, road.w, road.h)
    pop();
}

// draws the cyclist and his beloved bike
function drawCyclist() {
    drawBikeFrame();
    drawBikeWheels();
    drawCyclistBody();
    drawCyclistHead();
    drawCyclistLeg();

}

