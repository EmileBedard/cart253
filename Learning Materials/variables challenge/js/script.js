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
    size: 50,
    minSize: 50,
    maxSize: 450,
    growth: 2,
    // Colour
    fill: {
        r: 50,
        g: 50,
        b: 50,
    }
};

let angriness = {
    value: 1,
    min: 50,
    max: 255,
}

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

let rage = {
    l: 200,
    r: 200,
    min: {
        l: 180,
        r: 200,
    },
    max: {
        l: 200,
        r: 220,
    },


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

    // making mrfurious angrier and angrier and constraining the red color
    mrFurious.fill.r += angriness.value;
    mrFurious.fill.r = constrain(mrFurious.fill.r, angriness.min, angriness.max)

    // slowly making the sky darker over time
    skyShade.r += darkSky;
    skyShade.g += darkSky;
    skyShade.b += darkSky;

    // making the bird fly annoyingly over mrfurious head
    // ALL THE CODE FOR THE BIRD WAS TAKEN FROM THE MOVEMENT EXERCISE FROM PIPPIN BARR
    bird.velocity.x += bird.acceleration.x;
    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.x = bird.x + bird.velocity.x;

    // making the shaking ramp up slowly over time
    mrFurious.x = random(rage.l, rage.r);
    rage.l += -0.2;
    rage.r += 0.2;
    rage.l = constrain(rage.l, rage.min.l, rage.max.l);
    rage.r = constrain(rage.r, rage.min.r, rage.max.r);

    // added mrfurious size growth
    mrFurious.size += mrFurious.growth;
    mrFurious.size = constrain(mrFurious.size, mrFurious.minSize, mrFurious.maxSize);




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