/**
 * variables challenge, the angry RED!
 * Joyce Lam and Emile Bedard
 * 
 * An angry red ball ! And mostly practicing variables in p5
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 50,
        g: 50,
        b: 50,
    }
};

let angriness = 1;

let skyShade = {
    r: 140,
    g: 180,
    b: 220,
}

let darkSky = -1;

let bird = {
    x: 50,
    y: 50,
    size: 50,
    velocity: {
        x: 1,
        y: 0
    },
    minVelocity: {
        x: -3,
        y: 0
    },
    maxVelocity: {
        x: 3,
        y: 0
    },
    acceleration: {
        x: 0.025,
        y: -0.05
    }
};



/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    background(skyShade.r, skyShade.g, skyShade.b,);
    drawMrFurious();
    drawSky();
    drawBird();
    // making mrfurious angrier and angrier
    mrFurious.fill.r += angriness;
    // slowly making the sky darker over time
    skyShade.r += darkSky;
    skyShade.g += darkSky;
    skyShade.b += darkSky;

    // making the bird fly annoyingly over mrfurious head
    // ALL THE CODE FOR THE BIRD WAS TAKEN FROM THE MOVEMENT EXERCISE FROM PIPPIN BARR
    bird.velocity.x += bird.acceleration.x;
    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.x = bird.x + bird.velocity.x;

    mrFurious.x = random(180, 220);




}

/**
 * Draw Mr. Furious as a coloured circle 
 * */
function drawMrFurious() {

    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}

function drawSky() {
    push();
    fill(skyShade.r, skyShade.g, skyShade.b,);
    pop();
}

// draw bird
function drawBird() {
    push();
    fill(120, 81, 169);
    noStroke();
    ellipse(bird.x, bird.y, bird.size);
    pop();
}