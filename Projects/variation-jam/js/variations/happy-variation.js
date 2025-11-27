/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the blue variation starts
 */

let move = undefined;


function happySetup() {
    background("#F8E5D0");
}

/**
 * This will be called every frame when the blue variation is active
 */
function happyDraw() {
    // Figure out all the fun settings!

    // Let's use map() to convert between mouse-related numbers
    // and colour and other numbers!
    // https://p5js.org/reference/p5/map/

    push();
    // Calculate the stroke weight based on how far the mouse moved
    // We're using abs() (absolute value) to ignore negatives
    // The stroke weight will be thinner the faster (further) the
    // mouse moved
    const weight = map(abs(movedX), 0, 30, 10, 6);
    strokeWeight(weight);

    // Calculate the stroke color based on the mouse's distance
    // from the centre of the canvas
    const d = dist(mouseX, mouseY, width / 2, height / 2);
    // Set the stroke color based on the distance
    // Make the stroke lighter when it's closer to the edges
    const strokeColor = map(d, -width / 2, width / 2, 0, 100);
    stroke(strokeColor);

    // Draw a line from the previous mouse position to the current one
    line(pmouseX, pmouseY, mouseX + random(1, 40), mouseY + random(1, 40));
    pop();
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
function happyMouseMoved() {
    move = random();
    push();
    fill('#ffB');
    ellipse(random(0, width), random(0, height), 100);
    pop();

}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function happyMousePressed() {
    move = random();
    push();
    fill('#ffB');
    ellipse(random(0, width), random(0, height), 100);
    pop();

}