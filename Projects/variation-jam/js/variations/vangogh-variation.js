/**
 * This file contains the code to run *only* the vangogh variation part of the program.
 * 
 */

// this variable initializes the dashed lines of van gogh
let dashed = false


/**
 * This will be called just before the vangogh variation starts
 */
function vangoghSetup() {
    background("#F8E5D0");
    colorMode(HSL, 360, 100, 100, 1); // (colormode, MAX HUE RANGE, MAX SATURATION RANGE, MAX LUMINANCE RANGE, MAX ALPHA RANGE)
    sfxBrush.play();
    cursor('grab');
    color.luminance = 50;
}

/**
 * This will be called every frame when the vangogh variation is active
 */
function vangoghDraw() {

    if (paintState === "painting") {

        push();
        // calculate stroke saturation here with the distance from the center. HSL color mode in this variation
        // with this line, we set the distance in a variable called "d"
        const d = dist(mouseX, mouseY, width / 2, height / 2);

        dashedLine() // this sets the width of the stroke to make dashed lines

        vangoghchangeHue(); // calls it here to check if the user is inactive and change strokeweight and hue before drawing the line

        // Set the stroke *saturation* based on the distance
        color.saturation = map(d, -width / 2, width / 2, 0, 100);
        stroke(color.hue, color.saturation, color.luminance, color.alpha);

        // Draw a line from the previous mouse position to the current one.
        line(pmouseX, pmouseY, mouseX, mouseY);
        pop();

        drawInstructions(); // this calls the instructions to be drawn on top, m, n & s for different use


    }

    //displays the naming of painting instructions if we are not yet painting
    else {
        background("#F8E5D0");

        push();
        fill(instructions.hue, instructions.saturation, instructions.luminance, instructions.alpha);
        textAlign(CENTER, CENTER);
        textSize(24);
        textFont(pixelfont);
        text("Name your masterpiece:", width / 2, height / 2);
        text(typedWord, width / 2, 270);
        text("press -enter- to save", width / 2, 350);
        pop();

    }

}

/**
 * This will be called when user is inactive to change hue and say it is inactive, in vangogh var. this changes hue for different shades of blue
 */
function vangoghchangeHue() {

    if (millis() - lastMoveTime > inactivityDelay) {
        color.hue = random(190, 260);
        strokeWeight(0);
        usermoved = false;
        console.log(color.hue);
    }
}

/**
 * This functions alternate the weight of the line every frame to make a dashed lines like in the starry night painting by vangogh
 */
function dashedLine() {
    if (dashed === true) {
        const weight = 0;
        strokeWeight(weight);
        dashed = false
    }

    else if (dashed === false) {
        const weight = 20;
        strokeWeight(weight);
        dashed = true
    }
}


/**
 * This will be called whenever a key is pressed while the vangogh variation is active
 */
function vangoghKeyPressed(event) {
    if (paintState === "painting") {

        if (event.keyCode === 77) { // returns to main menu when "M" is pressed
            state = "menu";
            savedWord = "";
            paintState = "naming"

        }

        if (event.keyCode === 78) { // brings a new blank canvas when "N" is pressed
            sfxCanvas.play();
            background("#F8E5D0");
        }

        if (event.keyCode === 83) { // saves the current canvas and downloads it when "s" is pressed! adds the name of the painting too. supersupersuper fun!
            drawPaintingTitle();
            saveCanvas('VanGogh_style_painting.png');
            sfxCanvas.play();
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
 * This will be called whenever the mouse moved and the vangogh variation is active
 */
function vangoghMouseMoved() {
    if (usermoved === false) {
        sfxBrush.play();
        usermoved = true;
    }
    lastMoveTime = millis()


}

/**
 * This will be called whenever the mouse is pressed while the vangogh variation is active
 */
function vangoghMousePressed() {

    //empty, don't need, but i need it empty to function, existentialism...

}