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
        y: 500, // 500 on y
        w: 123,
        h: 163,
        color: "#8A5431",
        step: -15, // frog moves 15 pixels up every time it eats
        xSpeed: 6 // speed to move when key A and key L are pressed to controll horizontal movement
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

//defines the area of the main play zone
const playZone = {
    x: 640,
    y: 480,
}


// an object to store the rgb value of our background
let fillBack = {
    r: 135,
    g: 206,
    b: 235,
}

// creates the gameState variable to later store what state are we in
let gameState;

// creates the font variable for the custom font
let spaceMonoFont;

// creates an undefined variable to later store wich insect was caught
let ateResult = undefined;

// a variable to store the device type of the user. this lets the user control the game accordingly after
let deviceType = undefined;

let leaves = []; // this array will store the leaves we create for the background

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
    flightAmplitude: 30,
};

// Our ant
// Has a position, size, and speed of horizontal movement
const ant = {
    x: 40,
    y: 200, // Will be random
    size: 10,
    speed: 2,
};

// Our spider
// Has a position, size, and speed of horizontal movement
const spider = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 1
};

// object to store coordinates of touch by mobile users
let touch = {
    x: 320, // later updates according to touch
    y: undefined, // will stay unused
};


/**
 * preload the specific font used for texts
 */
function preload() {
    spaceMonoFont = loadFont('assets/fonts/SpaceMono-Bold.ttf'); // removed a slash here for the filepath to become relative
};


/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(1200, 700);
    angleMode(DEGREES);

    // sets the initial state of the game to intro before starting the game
    gameState = "intro";

    // sets the initial frog tongue y to its body location on y
    frog.tongue.y = frog.body.y;

    if (navigator.userAgent.match(/Android|iPhone/i)) { // checks user's device and stores the data in the varaible
        deviceType = "mobile";
    }
    else {
        deviceType = "desktop";
    }
    console.log(deviceType);
};

/**
 * a function that continuously draws the game depending on wich gamestate we are
 */
function draw() {


    for (let newLeaf of leaves) {
        drawLeaf(newLeaf);
    };

    if (gameState === "main") {
        drawBackground();

        moveSpider();
        moveAnt();
        moveFly();

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
        drawSnow();
        drawBackground();
        moveFrogEnding();
        drawFrog();
        drawEndingScreen(); // draws ending screen to finish

    }

    // if we are not in the game or the ending, we must be in the intro with the title screen
    else {

        drawBackground();
        drawTitleScreen(); // draws title screen to start    
        drawBigFly();
        moveFrog();
        moveTongue();
        drawFrog();
        checkTongueInsectOverlap(bigFly);
    };
    drawMask();

}

/**
 * Moves the spider according to its speed and double wave with sine and cosine on x and y axis
 * Resets the spider if it gets all the way to the right
 */
function moveSpider() {

    // used Google AI Gemini here to figure out the functions needed to make the spiral
    // successfully made a spider goi in circles forward to reach the other end of the canvas
    spider.x += ((spider.speed * 0.5) * sin(frameCount * 0.05) + 1 * (spider.speed * 0.3));
    spider.y += ((spider.speed * 0.5) * cos(frameCount * 0.05));

    if (spider.x > width) {
        resetInsect(spider);
    }
}

/**
 * Moves the ants according to their speed
 * Resets the insects if it gets all the way to the right
 */
function moveAnt() {

    ant.x += (ant.speed * sin(frameCount * 0.05) + 1);

    if (ant.x > width) {
        resetInsect(ant);
    }
}

/**
 * Moves the flies according to their speed
 * Resets the insects if it gets all the way to the right
 */
function moveFly() {

    fly.x += fly.speed
    fly.y = (fly.flightAmplitude * sin(frameCount * 0.05) + 200);

    if (fly.x > width) {
        resetInsect(fly);
    }
}


/**
 * Draws the fly as a black circle with two itty bitty flapping wings
 */
function drawFly() {
    push();
    translate(280, 110,);
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
    translate(280, 110,);
    stroke("#000000");
    strokeWeight(2);
    fill("#000000");


    ellipse(ant.x, ant.y, ant.size - 3);//main ant body
    ellipse(ant.x + 7, ant.y, ant.size);//head
    ellipse(ant.x - 7, ant.y, ant.size);//abdomen

    line(ant.x, ant.y, ant.x + 3, ant.y + 10);//right legs
    line(ant.x, ant.y, ant.x - 3, ant.y + 10);

    line(ant.x, ant.y, ant.x + 3, ant.y - 10);//left legs
    line(ant.x, ant.y, ant.x - 3, ant.y - 10);

    line(ant.x, ant.y, ant.x + 16, ant.y + 2);//antennas
    line(ant.x, ant.y, ant.x + 16, ant.y - 2);

    pop();
}

/**
 * Draws the spider as a black circle with legs
 */
function drawSpider() {
    push();
    translate(280, 110,);
    stroke("#000000");
    strokeWeight(2);
    fill("#000000");

    ellipse(spider.x, spider.y, spider.size - 1);//main body

    line(spider.x, spider.y, spider.x - 6, spider.y + 10);
    line(spider.x, spider.y, spider.x, spider.y + 10);//right legs
    line(spider.x, spider.y, spider.x + 6, spider.y + 10);

    line(spider.x, spider.y, spider.x - 6, spider.y - 10);
    line(spider.x, spider.y, spider.x, spider.y - 10);//left legs
    line(spider.x, spider.y, spider.x + 6, spider.y - 10);

    pop();
}

/**
 * Resets the insects to the left with a random y
 */
function resetInsect(insect) {

    insect.x = 0;
    insect.y = random(5, frog.body.y - 100);
    insect.speed = random(2, 5);

}

/**
 * Moves the frog with "A" and "L" keys on horizontal axis
 */
function moveFrog() {

    if (deviceType === "desktop") {
        if (keyIsDown(65)) {
            frog.body.x -= frog.body.xSpeed;
        }

        if (keyIsDown(76)) {
            frog.body.x += frog.body.xSpeed;
        }

        if (frog.body.y < 110) {  // sets the game state if the frog moved above finishing game threshold
            gameState = "ending"
        }
    }

    if (deviceType === "mobile") {
        frog.body.x = touch.x;

        if (frog.body.y < 110) {  // sets the game state if the frog moved above finishing game threshold
            gameState = "ending"
        }
    }
}

/**
 * a function to check if the mobile user started a touch action. when called, stores the coordinate in a variable. Also adds a leaf to the array everytime the user on mobile touches.
 */
function touchStarted() {

    if (deviceType === "mobile") {
        push();
        // translate(280, 110,);
        touch.x = mouseX - 280;
        touch.y = mouseY - 110; //unused
        leaves.push(createLeaf());
        pop();

    }
}

/**
 * a function that stores the x coordinate of the touch action whenever the user moves.
 */
function touchMoved() {
    if (deviceType === "mobile") {
        push();
        // translate(280, 110,);
        touch.x = mouseX - 280;
        touch.y = mouseY - 110; //unused
        pop();
    }
}

/**
 * a function to start the tongue launch when the user stops a touch action
 */
function touchEnded() {
    if (deviceType === "mobile") {
        frog.tongue.state = "outbound";
    }
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
        if (frog.tongue.y === frog.body.y || frog.tongue.y > frog.body.y) {
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
    translate(280, 110,);
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    translate(280, 110,);
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    translate(280, 110,);
    fill(frog.body.color);
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.w, frog.body.h); // frog main body
    ellipse(frog.body.x + 57, frog.body.y - 17, 32, 57) // frog right arm
    ellipse(frog.body.x - 57, frog.body.y - 17, 32, 57) // frog left arm
    ellipse(frog.body.x + 40, frog.body.y + 40, 85) // frog right thigh
    ellipse(frog.body.x - 40, frog.body.y + 40, 85) // frog left thigh
    pop();

    push();
    translate(280, 110,);
    fill('black');
    ellipse(frog.body.x + 40, frog.body.y - 55, 20)// draw the frog's right eyes
    ellipse(frog.body.x - 40, frog.body.y - 55, 20)// draw the frog's left eyes
    pop();
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
        frog.tongue.state = "inbound";


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
            }
        }

        if (ateResult === "ateAnt") {


            // Reset a new ant
            resetInsect(ant);
            // Bring back the tongue
            frog.tongue.state = "inbound";
            frog.body.y += frog.body.step;
        }

        if (ateResult === "ateFly") {

            frog.body.y += frog.body.step;
            // Reset a new fly
            resetInsect(fly);
            // Bring back the tongue
            frog.tongue.state = "inbound";
        }

        if (ateResult === "ateSpider") {

            frog.body.y += frog.body.step;
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
 * Launch the tongue when spacebar key "32" is pressed
 */
function keyPressed() {
    if (keyIsDown(32) && deviceType === "desktop") { // spacebar = 32, only for desktop users
        frog.tongue.state = "outbound";

    }
    leaves.push(createLeaf());
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
/**
 * a function to draw all the text for the ending screen
 */
function drawEndingScreen() {

    // main announcement
    drawText("WINTER ARRIVED", 320, 250, 50);

    //subtext to explain the phenomenon
    drawText("Wood frog reached maximum glycogen.", 320, 320, 20)
    drawText("It can now survive winter completely frozen,", 320, 350, 20)
    drawText("see you in spring", 320, 400, 14)



}


function drawText(string, x, y, s) {
    push();
    translate(280, 110,);
    textAlign(CENTER, CENTER);
    fill("#E66800");
    textSize(s);
    textFont(spaceMonoFont);
    text(string, x, y);
    pop();
}

function drawBigFly() {

    let wingBuzz = bigFly.wingAmplitude * sin(frameCount * 40) + bigFly.y - 10;

    // draws the buzzing wings of the big fly
    push();
    translate(280, 110,);
    fill(bigFly.wingColor);
    noStroke();
    ellipse(bigFly.x + 22, wingBuzz, bigFly.wingSize)
    pop();

    push();
    translate(280, 110,);
    fill(bigFly.wingColor);
    noStroke();
    ellipse(bigFly.x - 22, wingBuzz, bigFly.wingSize)
    pop();

    // draws the main body of the big fly
    push();
    translate(280, 110,);
    fill(bigFly.color);
    ellipse(bigFly.x, bigFly.y, bigFly.size)
    pop();
}

/**
 * moves the frog out of frame when the game threshold is reached
 */
function moveFrogEnding() {
    frog.body.y += (frog.body.step / 6);
    frog.tongue.y += (frog.body.step / 6);
}

/**
 * draws the background for the game
 */
function drawBackground() {
    push();
    translate(280, 110,);
    noStroke();
    fill(fillBack.r, fillBack.g, fillBack.b);
    rect(0, 0, playZone.x, playZone.y);
    pop();

}

/**
 * creates a new leaf
 */
function createLeaf() {

    let newLeaf = {
        x: random(0, width),
        y: random(0, height),
        angle: random(0, 360),
        colorR: 190,
        colorG: random(60, 200), //  between 60 and 200 to choose tint of leaf between yellow-ish and red-ish and everything in between
        colorB: 0,
    }
    return newLeaf;
}

/**
 * a function to draw the leaves according to the leaf object and array
 */
function drawLeaf(leafIndex) {
    push();
    translate(leafIndex.x, leafIndex.y);
    rotate(leafIndex.angle);
    fill(leafIndex.colorR, leafIndex.colorG, leafIndex.colorB);
    noStroke();
    bezier(0, 0, 250, -270, -250, -270, 0, 0);
    arc(0, -50, 400, 400, 268, 273);

    pop();
}

function drawMask() {
    push();
    noStroke();
    fill(150, 142, 161); // 120,142,161
    rect(0, 0, 1200, 110);
    rect(0, 0, 280, 700);
    rect(0, 590, 1200, 110);
    rect(920, 0, 280, 700);
    pop();
}


