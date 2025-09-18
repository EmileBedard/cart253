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

// a variable to control the road that the cyclist is using
let road = {
    color: 85,
    angle: 0,
    x: 0,
    y: 480 * 0.75,
    w: 900,
    h: 700,
}

// a variable to set and organize the cyclist's bike
let bike = {
    frameColor: "blue",
    frameWeight: 13,
    wheelsColor: "white",
    wheelsDiameter: 120,
}

// a variable to define the different parameters of the cyclist
let cyclist = {
    bodyColor: "white",
    headColor: "white",
    knee = {
        x: 338,
        y: 298,
    }

}




/**
 * Creates canvas
*/
function setup() {
    createCanvas(800, 480);

    // draws flat background one time
    background(0);
}


/**
 * draws the road and the cyclist
*/
function draw() {

    drawRoad();
    drawCyclist();

    cyclist.knee.y += pedalingSpeed;


}


/** 
 *  draws the grey road
*/
function drawRoad() {
    push();
    fill(road.color);
    noStroke();
    rect(road.x, road.y, road.w, road.h)
    pop();
}

/** 
 * Combines the cyclist drawing function and 
 * his beloved bike drawing function 
*/
function drawCyclist() {
    drawBikeWheels();
    drawBikeFrame();
    drawCyclistBody();
    drawCyclistHead();
    drawCyclistLeg();

}

/**
 * draws the bike frame 
 */
function drawBikeFrame() {
    push();
    stroke(bike.frameColor);
    strokeWeight(bike.frameWeight);
    strokeCap(SQUARE);

    //draws the essential lines of the bike frame

    //center frame triangle
    line(300, 240, 420, 240);
    line(300, 240, 330, 330);
    line(330, 330, 420, 240);
    //fork
    line(420, 240, 450, 320);
    //rear wheel support
    line(300, 240, 250, 320);
    line(250, 320, 330, 330);

    pop();

}

/**
 * draws the bike wheels 
 */
function drawBikeWheels() {
    push();
    fill(bike.wheelsColor);
    noStroke();

    // draws the two wheels according to bike object
    ellipse(450, 320, bike.wheelsDiameter);
    ellipse(250, 320, bike.wheelsDiameter);

    pop();

}

/**
 * draws the cyclist body
 */
function drawCyclistBody() {
    push();
    fill(cyclist.bodyColor);
    noStroke();

    // draws the cyclist body in a blocky/geometric style
    beginShape();

    vertex(295, 175);
    vertex(429, 150);
    vertex(440, 192);
    vertex(417, 219);
    vertex(449, 238);
    vertex(437, 250);
    vertex(390, 229);
    vertex(400, 207);
    vertex(338, 223);
    vertex(305, 268);
    vertex(266, 213);

    endShape(CLOSE);
    pop();
}

/**
 * draws the cyclist leg to after animate it
 */
function drawCyclistLeg() {

    push();
    strokeWeight(43);
    stroke(cyclist.bodyColor);
    strokeCap(SQUARE);
    strokeJoin(ROUND);
    noFill();

    beginShape();

    vertex(305, 235);
    vertex(357, 268);
    vertex(320, 328);

    endShape();
    pop();

}

function drawCyclistHead() {
    push();
    fill(cyclist.bodyColor)
    noStroke();
    ellipse(474, 170, 53);
    pop();
}