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
        y: undefined,
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
};

// creates the gameState variable to later store what state are we in
let gameState;

// creates the font variable for the custom font
let spaceMonoFont;

// creates an undefined variable to later store wich insect was caught
let ateResult = undefined;

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3,
    wingColor: 300,
    wingSize: 7,
    wingAmplitude: 3,
};

// Our ant
// Has a position, size, and speed of horizontal movement
const ant = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

// Our spider
// Has a position, size, and speed of horizontal movement
const spider = {
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
};


/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // sets the initial state of the game to intro before starting the game
    gameState = "intro";

    // sets the initial frog tongue y to its body location on y
    frog.tongue.y = frog.body.y;

};

function draw() {

    if (gameState === "main") {
        background("#87ceeb");

        moveInsect(fly);
        moveInsect(ant);
        moveInsect(spider);

        drawFly();
        drawAnt();
        drawSpider();

        moveFrog();
        moveTongue();
        drawFrog();

        checkTongueInsectOverlap(fly);
        checkTongueInsectOverlap(ant);
        checkTongueInsectOverlap(spider);
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
        checkTongueInsectOverlap(bigFly);
    };

}

/**
 * Moves the insects according to its speed
 * Resets the insects if it gets all the way to the right
 */
function moveInsect(insect) {
    // Move the insects
    insect.x += insect.speed;
    // Handle the insect going off the canvas
    if (fly.x > width) {
        resetInsect(fly);
    }
    if (ant.x > width) {
        resetInsect(ant);
    }
    if (spider.x > width) {
        resetInsect(spider);
    }
}

/**
 * Draws the fly as a black circle with two itty bitty flapping wings
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");

    //creates a variable proper to the small fly to flap the wings
    let wingBuzz = fly.wingAmplitude * sin(frameCount * 1) + fly.y - 2;

    // draws the buzzing wings of the fly
    push();
    fill(bigFly.wingColor);
    noStroke();
    ellipse(fly.x + 5, wingBuzz, fly.wingSize)
    pop();

    push();
    fill(fly.wingColor);
    noStroke();
    ellipse(fly.x - 5, wingBuzz, fly.wingSize)
    pop();


    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Draws the ant as three black circle with small antennas and legs
 */
function drawAnt() {
    push();
    stroke("#000000");
    strokeWeight(2);
    fill("#000000");

    ellipse(ant.x, ant.y, ant.size - 3);//main ant body
    ellipse(ant.x, ant.y + 7, ant.size);//head
    ellipse(ant.x, ant.y - 7, ant.size);//abdomen

    line(ant.x, ant.y, ant.x + 10, ant.y + 3);//right legs
    line(ant.x, ant.y, ant.x + 10, ant.y - 3);

    line(ant.x, ant.y, ant.x - 10, ant.y + 3);//left legs
    line(ant.x, ant.y, ant.x - 10, ant.y - 3);

    line(ant.x, ant.y, ant.x + 2, ant.y + 16);//antennas
    line(ant.x, ant.y, ant.x - 2, ant.y + 16);

    pop();
}

/**
 * Draws the spider as a black circle with legs
 */
function drawSpider() {
    push();
    stroke("#000000");
    strokeWeight(2);
    fill("#000000");

    ellipse(spider.x, spider.y, spider.size - 1);//main body

    line(spider.x, spider.y, spider.x + 10, spider.y - 6);
    line(spider.x, spider.y, spider.x + 10, spider.y);//right legs
    line(spider.x, spider.y, spider.x + 10, spider.y + 6);

    line(spider.x, spider.y, spider.x - 10, spider.y - 6);
    line(spider.x, spider.y, spider.x - 10, spider.y);//left legs
    line(spider.x, spider.y, spider.x - 10, spider.y + 6);

    pop();
}

/**
 * Resets the insects to the left with a random y
 */
function resetInsect(insect) {

    insect.x = 0;
    insect.y = random(0, 300);
    insect.speed = random(2, 6);

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
function checkTongueInsectOverlap(insect) {
    // Get distance from tongue to ANY insect
    const d = dist(frog.tongue.x, frog.tongue.y, insect.x, insect.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + insect.size / 2);

    if (eaten) {

        checkWichInsect(); //check wich insect was caught only if an insect is eaten
        console.log(ateResult);

        if (gameState === "intro") {

            bigFly.y = frog.tongue.y;
            // Bring back the tongue
            frog.tongue.state = "inbound";

            if (bigFly.y === frog.body.y && frog.tongue.y === frog.body.y) {
                // sets the game state to main game
                gameState = "main"
                // Reset the first three insects of the game
                resetInsect(fly);
                resetInsect(ant);
                resetInsect(spider);
                //sets the frog tongue to idle because it reached back down
                frog.tongue.state = "idle";
            }
        }

        if (ateResult === "ateAnt") {

            // Reset a new ant
            resetInsect(ant);
            // Bring back the tongue
            frog.tongue.state = "inbound";
        }

        if (ateResult === "ateFly") {

            // Reset a new fly
            resetInsect(fly);
            // Bring back the tongue
            frog.tongue.state = "inbound";
        }

        if (ateResult === "ateSpider") {

            // Reset a new fly
            resetInsect(spider);
            // Bring back the tongue
            frog.tongue.state = "inbound";
        }
    }
}



function checkWichInsect() {
    // Get distance from tongue to fly
    const distFly = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const ateFly = (distFly < frog.tongue.size / 2 + fly.size / 2);

    // check wich insect was caught and return a string to be used later in the if function of tongue overlap
    if (ateFly) {
        ateResult = "ateFly"
    }

    // Get distance from tongue to ant
    const distAnt = dist(frog.tongue.x, frog.tongue.y, ant.x, ant.y);
    // Check if it's an overlap
    const ateAnt = (distAnt < frog.tongue.size / 2 + ant.size / 2);

    if (ateAnt) {
        ateResult = "ateAnt"

    }

    // Get distance from tongue to spider
    const distSpider = dist(frog.tongue.x, frog.tongue.y, spider.x, spider.y);
    // Check if it's an overlap
    const ateSpider = (distSpider < frog.tongue.size / 2 + spider.size / 2);

    if (ateSpider) {
        ateResult = "ateSpider"

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