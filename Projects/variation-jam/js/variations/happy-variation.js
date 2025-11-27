/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the blue variation starts
 */

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

let typedWord = ""
let savedWord = ""

let paintState = "naming"



function happySetup() {
    background("#F8E5D0");
    colorMode(HSL, 360, 100, 100, 1); // (colormode, MAX HUE RANGE, MAX SATURATION RANGE, MAX LUMINANCE RANGE, MAX ALPHA RANGE)
}

/**
 * This will be called every frame when the pollock variation is active
 */
function happyDraw() {

    if (paintState === "painting") {

        push();
        // using movedX here to calculate the distance the mouse moved to fix the stroke weight
        const weight = map(abs(movedX), 0, 30, 10, 6);
        strokeWeight(weight);

        // calculate stroke saturation here with the distance from the center. HSL color mode in this variation
        // with this line, we set the distance in a variable called "d"
        const d = dist(mouseX, mouseY, width / 2, height / 2);

        changeHue(); // calls it here to check if the user is inactive and change strokeweight and hue before drawing the line

        // Set the stroke *saturation* based on the distance
        color.saturation = map(d, -width / 2, width / 2, 0, 100);
        stroke(color.hue, color.saturation, color.luminance, color.alpha);

        // Draw a line from the previous mouse position to the current one AND add randomized position to have the "pollock" effect
        line(pmouseX, pmouseY, mouseX + random(-40, 40), mouseY + random(-40, 40));
        pop();

        drawInstructions(); // this calls the instructions to be drawn on top, m, n & s for different use
    }

    else {
        background("#F8E5D0");

        push();
        fill(instructions.hue, instructions.saturation, instructions.luminance, instructions.alpha);
        textAlign(CENTER, CENTER);
        textSize(24);
        textFont(pixelfont);
        text("Name your masterpiece:", width / 2, height / 2);
        text(typedWord, width / 2, 270);
        pop();

    }
    console.log(paintState);
}


function changeHue() {

    if (millis() - lastMoveTime > inactivityDelay) {
        color.hue = random(0, 360);
        strokeWeight(0);
    }
}

function drawInstructions() {
    push();
    fill(instructions.hue, instructions.saturation, instructions.luminance, instructions.alpha);
    textAlign(CENTER, CENTER);
    textSize(24);
    textFont(pixelfont);
    text("Main Menu:M | New Canvas:N | Save Painting:S", 320, 460);
    pop();
}

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
 * This will be called whenever a key is pressed while the pollock variation is active
 */
function happyKeyPressed(event) {
    if (paintState === "painting") {

        if (event.keyCode === 77) { // returns to main menu when "M" is pressed
            state = "menu";
        }

        if (event.keyCode === 78) { // brings a new blank canvas when "N" is pressed
            background("#F8E5D0");
        }

        if (event.keyCode === 83) { // saves the current canvas and downloads it when "s" is pressed! adds the name of the painting too. supersupersuper fun!
            drawPaintingTitle();
            saveCanvas('pollock_style_painting.png');
            background("#F8E5D0");

        }
    }
    else {

        // this section is for the naming of the pieces

        if (event.keyCode === 13) {
            savedWord = typedWord;
            typedWord = ""; // resets
            paintState = "painting";
            background("#F8E5D0");
        }

        if (key.length === 1) {
            typedWord += key;
        }
    }
}

/**
 * This will be called whenever the mouse moved and the pollock variation is active
 */
function happyMouseMoved() {
    lastMoveTime = millis()
    console.log(lastMoveTime);

}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function happyMousePressed() {


}