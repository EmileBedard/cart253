/**
 * This file contains the code to run *only* the malevitch variation part of the program.
 * 
 */


/**
 * This will be called just before the malevitch variation starts
 */
function malevitchSetup() {
    background("#F8E5D0");
    colorMode(HSL, 360, 100, 100, 1); // (colormode, MAX HUE RANGE, MAX SATURATION RANGE, MAX LUMINANCE RANGE, MAX ALPHA RANGE)
    sfxBrush.play();
    cursor('grab');
}

/**
 * This will be called every frame when the malevitch variation is active
 */
function malevitchDraw() {

    if (paintState === "painting") {

        push();


        color.saturation = 0;
        color.luminance = 0;

        fill(color.hue, color.saturation, color.luminance, color.alpha);
        rect(0, 0, 640, 480);

        instructions.luminance = 100;
        drawInstructions(); // this calls the instructions to be drawn on top, m, n & s for different use
        instructions.luminance = 0;



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
    console.log(paintState);
}




/**
 * This will be called whenever a key is pressed while the malevitch variation is active
 */
function malevitchKeyPressed(event) {
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
            saveCanvas('malevitch_style_painting.png');
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
 * This will be called whenever the mouse moved and the malevitch variation is active
 */
function malevitchMouseMoved() {
    if (usermoved === false) {
        sfxBrush.play();
        usermoved = true;
    }
    lastMoveTime = millis()


}

/**
 * This will be called whenever the mouse is pressed while the malevitch variation is active
 */
function malevitchMousePressed() {

    //empty, don't need, but i need it empty to function, existentialism...

}