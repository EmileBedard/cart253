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
    saturation: 200,
    luminance: 50,
};

//these variables control if the user is inactive and store the lastest active time in a data way with millis()
let lastMoveTime = 0; // will be called whenever user mouse's moves.
let inactivityDelay = 500; // 0.5 second



function happySetup() {
    background("#F8E5D0");
    colorMode(HSL);
}

/**
 * This will be called every frame when the pollock variation is active
 */
function happyDraw() {
    push();
    // using movedX here to calculate the distance the mouse moved to fix the stroke weight
    const weight = map(abs(movedX), 0, 30, 10, 6);
    strokeWeight(weight);

    // calculate stroke saturation here with the distance from the center. HSL color mode in this variation
    // with this line, we set the distance in a variable called "d"
    const d = dist(mouseX, mouseY, width / 2, height / 2);

    changeHue() // calls it here to check if the user is inactive and change strokeweight and hue before drawing the line

    // Set the stroke *saturation* based on the distance
    color.saturation = map(d, -width / 2, width / 2, 0, 100);
    stroke(color.hue, color.saturation, color.luminance);

    // Draw a line from the previous mouse position to the current one AND add randomized position to have the "pollock" effect
    line(pmouseX, pmouseY, mouseX + random(-40, 40), mouseY + random(-40, 40));
    pop();


}

function changeHue() {

    if (millis() - lastMoveTime > inactivityDelay) {
        color.hue = random(0, 360);
        strokeWeight(0);
    }
}

/**
 * This will be called whenever a key is pressed while the pollock variation is active
 */
function happyKeyPressed(event) {
    if (event.keyCode === 77) { // returns to main menu when "M" is pressed
        state = "menu";
    }


    if (event.keyCode === 78) { // brings a new blank canvas when "N" is pressed
        background("#F8E5D0");
    }

    if (event.keyCode === 83) { // saves the current canvas and downloads it when "s" is pressed!
        saveCanvas('pollock_style_painting.png');
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