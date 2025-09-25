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
    x: -750,
    y: -20,
    w: 1500,
    h: 700,
}

// a variable to set and organize the cyclist's bike
let bike = {
    frameColor: "blue",
    frameWeight: 13,
    wheelsColor: (255),
    wheelsDiameter: 120,
}

// JS object for everything about the cyclist, visual aspects and dynamic parameters
let cyclist = {
    bodyColor: (255),
    leftLegColor: (180),
    headColor: (255),
    pedalingAngle: 0,
    pedalingSpeed: 12,
    pedalingAmplitude: 30,
    kneeR: {
        x: 357,
        y: 285,
    },
    kneeL: {
        x: 357,
        y: 285,
    },
    feetR: {
        x: 320,
        y: 360,
    },
    feetL: {
        x: 320,
        y: 360,
    },

}

//sets the original value of "allrotate" to 0
let allRotate = 0

let slopeAngle = 0








/**
 * Creates canvas
*/
function setup() {
    createCanvas(800, 480);
    angleMode(DEGREES);


}


/**
 * draws the road and the cyclist after redrawing the background every frame
*/
function draw() {

    // draws flat background every frame
    background(0);

    allRotate = map(mouseX, 0, 800, -15, 15, true);

    cyclist.pedalingAngle += 1;

    drawRoad();
    drawCyclist();

    if (mouseMoved()) {
        mouseMoved()
    }




}


/** 
 *  draws the grey road
*/
function drawRoad() {
    push();
    fill(road.color);
    noStroke();

    //sets the origin of the road for the interactive rotation
    translate(400, 380);


    rotate(allRotate);

    rect(road.x, road.y, road.w, road.h)
    pop();
}

/** 
 * Combines the cyclist drawing function and 
 * his beloved bike drawing function 
*/
function drawCyclist() {
    push();

    //sets the origin of the cyclist on the center bottom of the cyclist composition for interactive rotation
    translate(400, 380);

    //rotates the horizon line for changing the interactive cyclist rode slope
    rotate(allRotate);


    translate(allRotate * 10, 0,);


    drawCyclistLegL();
    drawBikeWheels();
    drawBikeFrame();
    drawCyclistBody();
    drawCyclistHead();
    drawCyclistLegR();



    // //sets the pedaling speed according to slope angle, in cyclist language, it can be translated to difficulty
    cyclist.pedalingSpeed = map(mouseX, 0, width, 12, 30, true);


    // animates the leg animation for the cyclist's RIGHT leg
    cyclist.kneeR.y = cyclist.pedalingAmplitude * sin(cyclist.pedalingAngle * cyclist.pedalingSpeed) + 270;
    cyclist.feetR.y = cyclist.pedalingAmplitude * sin(cyclist.pedalingAngle * cyclist.pedalingSpeed) + 330;

    // animates the leg animation for the cyclist's LEFT leg
    cyclist.kneeL.y = (cyclist.pedalingAmplitude * -1) * sin(cyclist.pedalingAngle * cyclist.pedalingSpeed) + 270;
    cyclist.feetL.y = (cyclist.pedalingAmplitude * -1) * sin(cyclist.pedalingAngle * cyclist.pedalingSpeed) + 330;

    pop();

}

/**
 * draws the bike frame 
 */
function drawBikeFrame() {
    push();
    stroke(bike.frameColor);
    strokeWeight(bike.frameWeight);
    strokeCap(SQUARE);
    translate(-350, -380);
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
    translate(-350, -380);
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

    translate(-350, -380);

    // draws the cyclist body in a blocky/geometric style
    beginShape();

    //back
    vertex(295, 175);
    vertex(410, 160);

    vertex(440, 192);
    vertex(417, 219);
    vertex(449, 238);
    vertex(437, 250);
    vertex(390, 229);
    vertex(400, 207);
    vertex(338, 223);
    vertex(320, 260);
    vertex(266, 240);

    endShape(CLOSE);
    pop();
}

/**
 * draws and sets the main lines for the RIGHT leg of the cyclist
 */
function drawCyclistLegR() {

    push();
    strokeWeight(43);
    stroke(cyclist.bodyColor);
    strokeCap(SQUARE);
    strokeJoin(ROUND);
    noFill();
    translate(-350, -380);

    beginShape();
    // 3 point line to draw the leg
    vertex(315, 235);
    vertex(cyclist.kneeR.x, cyclist.kneeR.y);
    vertex(cyclist.feetR.x, cyclist.feetR.y);

    endShape();
    pop();

}
/**
 * draws and sets the main lines for the LEFT leg of the cyclist
 */
function drawCyclistLegL() {

    push();
    strokeWeight(43);
    stroke(cyclist.leftLegColor);
    strokeCap(SQUARE);
    strokeJoin(ROUND);
    noFill();
    translate(-350, -380);

    beginShape();
    // 3 point line to draw the leg
    vertex(315, 235);
    vertex(cyclist.kneeL.x, cyclist.kneeL.y);
    vertex(cyclist.feetL.x, cyclist.feetL.y);

    endShape();
    pop();

}

function drawCyclistHead() {
    push();
    translate(-350, -380);
    fill(cyclist.bodyColor)
    noStroke();
    ellipse(470, 170, 50);
    pop();
}

// function checkIfSlopeAngleChanged() {

//     if (mouseMoved()) {
//         cyclist.pedalingSpeed = cyclist.pedalingSpeed * 0
//     }
//     else {
//         cyclist.pedalingSpeed = cyclist.pedalingSpeed * 1
//     }
// }

function mouseMoved() {
    cyclist.pedalingSpeed = cyclist.pedalingSpeed * 0
}

function mousestatic() {
    cyclist.pedalingSpeed = cyclist.pedalingSpeed * 1
}