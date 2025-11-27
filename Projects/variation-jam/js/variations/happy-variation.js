/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the blue variation starts
 */

let color = {
    hue: 0,
    saturation: 200,
    luminance: 50,
};


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


    // Set the stroke *saturation* based on the distance
    color.saturation = map(d, -width / 2, width / 2, 0, 100);
    stroke(color.hue, color.saturation, color.luminance);

    // Draw a line from the previous mouse position to the current one AND add randomized position to have the "pollock" effect
    line(pmouseX, pmouseY, mouseX + random(1, 40), mouseY + random(1, 40));
    pop();
}

/**
 * This will be called whenever a key is pressed while the pollock variation is active
 */
function happyKeyPressed(event) {
    if (event.keyCode === 77) { // returns to main menu when "M" is pressed
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function happyMouseMoved() {


}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function happyMousePressed() {


}