/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the blue variation starts
 */
function happySetup() {

}

/**
 * This will be called every frame when the blue variation is active
 */
function happyDraw() {
    background("blue");
    fill('#fff');
    textSize(20);
    textAlign(CENTER, CENTER);
    text("I am really happy", width / 2, height / 2);
}

/**
 * This will be called whenever a key is pressed while the blue variation is active
 */
function happyKeyPressed(event) {
    if (event.keyCode === 77) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function happyMousePressed() {

}