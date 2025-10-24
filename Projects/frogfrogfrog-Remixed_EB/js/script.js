/**
 * Wood Frogfrogfrog
 * new remixed version of frogfrogfrog by Emile Bedard
 * original game by Pippin Barr
 * 
 * A game of catching insects with your frog-tongue to reach hibernation
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch insects
 *                                          TO MODIFY INSTRUCTIONS BEFORE SUBMISSION!
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 500,
        w: 123,
        h: 163,
        color: "#8A5431",
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

const bigFly = {
    color: 'black',
    x: 348,
    y: 250,
    size: 50,
    wingColor: 300,
    wingSize: 30,
    wingAmplitude: 6,
}

// creates the gameState variable to later store what state are we in
let gameState

// creates the font variable for the custom font
let spaceMonoFont




// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};


/**
 * preload the specific font used for texts
 */
function preload() {
    spaceMonoFont = loadFont('/assets/fonts/SpaceMono-Bold.ttf');
}


/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // sets the initial state of the game to intro before starting the game
    gameState = "intro";
}

function draw() {

    if (gameState === "main") {
        background("#87ceeb");
        moveInsect(fly);
        drawFly();
        moveFrog();
        moveTongue();
        drawFrog();
        checkTongueFlyOverlap(fly);
    }

    else if (gameState === "ending") {

    }

    // if we are not in the game or the ending, we must be in the intro with the title screen
    else {

        background("#87ceeb");
        drawTitleScreen(); // draws title screen to start    
        drawBigFly();
        drawText();
        moveFrog();
        moveTongue();
        drawFrog();
        checkTongueFlyOverlap(bigFly);

    }

}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveInsect(insect) {
    // Move the fly
    insect.x += insect.speed;
    // Handle the fly going off the canvas
    if (insect.x > width) {
        resetInsect(fly);
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetInsect(insect) {
    insect.x = 0;
    insect.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it reaches back to the frog location Y
        if (frog.tongue.y === frog.body.y) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill(frog.body.color);
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.w, frog.body.h); // frog main body
    ellipse(frog.body.x + 57, frog.body.y - 17, 32, 57) // frog right arm
    ellipse(frog.body.x - 57, frog.body.y - 17, 32, 57) // frog left arm
    ellipse(frog.body.x + 40, frog.body.y + 40, 85) // frog right thigh
    ellipse(frog.body.x - 40, frog.body.y + 40, 85) // frog left thigh
    pop();

    // draw the frog's eyes





}

/**
 * Handles the tongue overlapping any insect. param here control which insect to check for overlap
 */
function checkTongueFlyOverlap(insect) {
    // Get distance from tongue to ANY insect
    const d = dist(frog.tongue.x, frog.tongue.y, insect.x, insect.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + insect.size / 2);
    if (eaten) {

        if (gameState === "intro") {

            // sets the game state to main game
            gameState = "main"
            // Reset the first insect of the game
            resetInsect(fly);
            // Bring back the tongue
            frog.tongue.state = "inbound";
        }

        // Reset a new insect
        resetInsect(fly);
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

function drawTitleScreen() {

    // first draw the instructions
    drawText("MOVE WITH MOUSE / TOUCH", 320, 40, 25);
    drawText("CLICK / RELEASE TO EAT", 320, 70, 25);

    // draws the main title
    drawText("wood", 320, 110, 30);
    drawText("FROG", 320, 150, 90);
    drawText("FR G", 320, 230, 90); // missing O here to place the big starting fly
    drawText("FROG", 320, 310, 90);

    // draws the call to action to start the game
    drawText("EAT THE FLY TO START", 320, 410, 25);


}

function drawText(string, x, y, s) {
    push();
    textAlign(CENTER, CENTER);
    fill("#E66800");
    textSize(s);
    textFont(spaceMonoFont);
    text(string, x, y);
    pop();
}

function drawBigFly() {

    let wingBuzz = bigFly.wingAmplitude * sin(frameCount * 1) + bigFly.y - 10;

    // draws the buzzing wings of the big fly
    push();
    fill(bigFly.wingColor);
    noStroke();
    ellipse(bigFly.x + 22, wingBuzz, bigFly.wingSize)
    pop();

    push();
    fill(bigFly.wingColor);
    noStroke();
    ellipse(bigFly.x - 22, wingBuzz, bigFly.wingSize)
    pop();

    // draws the main body of the big fly
    push();
    fill(bigFly.color);
    ellipse(bigFly.x, bigFly.y, bigFly.size)
    pop();
}