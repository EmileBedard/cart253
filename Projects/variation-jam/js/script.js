/**
 * Variation Jam
 * Émile Bédard
 * 
 *
 */

"use strict";

let state = "menu";
let pixelfont = "undefined";
let sfxBrush = "undefined";
let sfxCanvas = "undefined";
let mainSplashScreen = "undefined";
let playbutton = "undefined";
let menuNoText = "undefined"



//this variable controls the color of the paintbrush in HSL mode
let color = {
    hue: 0,
    saturation: 100,
    luminance: 50,
    alpha: 1,
};

//this variable controls the color of instruction text. alpha value is used here to make it disappear when user wnats to save painting
let instructions = {
    hue: 0,
    saturation: 100,
    luminance: 0,
    alpha: 1,
};

//these variables control if the user is inactive and store the lastest active time in a data way with millis()
let lastMoveTime = 0; // will be called whenever user mouse's moves.
let inactivityDelay = 500; // 0.5 second

//these variables saves and define the naming of each painting
let typedWord = ""
let savedWord = ""

//this variable saves in wich stage are we on, naming our piece or painting it?
let paintState = "naming"

// this variable stores if the user moved to play a brush sound when it starts moving again
let usermoved = ""



/**
 * preload the specific font used for texts
 */
function preload() {
    pixelfont = loadFont('assets/fonts/VCR_OSD_MONO_1.001.ttf'); //loads my pixel font
    sfxBrush = loadSound('assets/sounds/paintsplash.mp3'); //loads the brush sfx
    sfxCanvas = loadSound('assets/sounds/pageturn.mp3'); //loads the new canvas page turn sfx
    mainSplashScreen = loadImage('assets/images/mainmenu.png');
    playbutton = loadImage('assets/images/playbutton.png');
    menuNoText = loadImage('assets/images/menu_no_text.png');

};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "vangogh-variation":
            vangoghDraw();
            break
        case "picasso-variation":
            picassoDraw();
            break;
        case "pollock-variation":
            pollockDraw();
            break;
        case "malevitch-variation":
            malevitchDraw();
            break;
        case "calder-variation":
            calderDraw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "vangogh-variation":
            vangoghMousePressed();
            break
        case "picasso-variation":
            picassoMousePressed();
            break;
        case "pollock-variation":
            pollockMousePressed();
            break;
        case "malevitch-variation":
            malevitchMousePressed();
            break;
        case "calder-variation":
            calderMousePressed();
            break;
    }
}

/**
 * Listen for mouse movement and call the function for it in the
 * current state
 */
function mouseMoved() {
    switch (state) {
        case "menu":
            menuMouseMoved();
            break;
        case "vangogh-variation":
            vangoghMouseMoved();
            break
        case "picasso-variation":
            picassoMouseMoved();
            break;
        case "pollock-variation":
            pollockMouseMoved();
            break;
        case "malevitch-variation":
            malevitchMouseMoved();
            break;
        case "calder-variation":
            calderMouseMoved();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "vangogh-variation":
            vangoghKeyPressed(event);
            break
        case "picasso-variation":
            picassoKeyPressed(event);
            break;
        case "pollock-variation":
            pollockKeyPressed(event);
            break;
        case "malevitch-variation":
            malevitchKeyPressed(event);
            break;
        case "calder-variation":
            calderKeyPressed(event);
            break;
    }
}

/**
 * This will be called when user presses S and saves the canvas, it write the painting name
 */
function drawPaintingTitle() {

    //draws the white rectangle to place the title
    push();
    fill('white');
    noStroke();
    rect(0, 420, 640, 60);
    pop();

    //draws the painting title
    push();
    fill(instructions.hue, instructions.saturation, instructions.luminance, instructions.alpha);
    textAlign(CENTER, CENTER);
    textSize(20);
    textFont(pixelfont);
    text(savedWord, width / 2, 450);
    pop();

}

/**
 * This will be called every frame to display the main controls
 */
function drawInstructions() {
    push();
    fill(instructions.hue, instructions.saturation, instructions.luminance, instructions.alpha);
    textAlign(CENTER, CENTER);
    textSize(24);
    textFont(pixelfont);
    text("Main Menu:M | New Canvas:N | Save Painting:S", 320, 460);
    pop();
}
