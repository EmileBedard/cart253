/**
 * This file contains the code to run *only* the calder variation part of the program.
 * 
 */
let shape = []
let shapes = []


let point = {
    X: 0,
    Y: 0,
}
let shapeFinished = true

let mobile = {
    x: 320,
    y: 0,
}

/**
 * This will be called just before the calder variation starts
 */
function calderSetup() {
    background("#F8E5D0");
    colorMode(HSL, 360, 100, 100, 1); // (colormode, MAX HUE RANGE, MAX SATURATION RANGE, MAX LUMINANCE RANGE, MAX ALPHA RANGE)
    sfxBrush.play();
    cursor('grab');
    calderInstructions(); // this calls the instructions to be drawn on top of canvas to make the mobile
    color.luminance = 50;
}

/**
 * This will be called every frame when the calder variation is active
 */
function calderDraw() {

    if (paintState === "painting") {

        calderInstructions(); // this calls the instructions to be drawn on top of canvas to make the mobile


        push();
        calderchangeHue(); // calls it here to check if the user is inactive and change strokeweight and hue before drawing the line
        stroke(color.hue, color.saturation, color.luminance, color.alpha);
        fill(color.hue, color.saturation, color.luminance, color.alpha);

        if (shapeFinished === false) {
            beginShape();
            for (let i = 0; i < shape.length; i++) {
                vertex(shape[i][0], shape[i][1])
            }
            endShape(CLOSE);
        }

        // Draw a line from the previous mouse position to the current one AND add randomized position to have the "pollock" effect
        (pmouseX, pmouseY, mouseX, mouseY);
        calderStartShape();
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

function calderStartShape() {
    if (shapeFinished === false) {
        point.X = mouseX;
        point.Y = mouseY;
        shape.push([point.X, point.Y]);

    }
    else {

    }
}

function calderInstructions() {
    if (shapes.length === 0) {
        push();
        fill(instructions.hue, instructions.saturation, instructions.luminance, instructions.alpha);
        textAlign(CENTER, CENTER);
        textSize(15);
        textFont(pixelfont);
        text("click to start shape and click to end shape. make a mobile!", width / 2, 40);
        pop();
    }
    else if (shapes.length === 1) {
        push();
        fill('#F8E5D0');
        textAlign(CENTER, CENTER);
        textSize(15);
        textFont(pixelfont);
        text("click to start shape and click to end shape. make a mobile!", width / 2, 40);
        pop();
    }
    else {

    }
}

/**
 * This will be called when user is inactive to change hue and say it is inactive
 */
function calderchangeHue() {

    if (millis() - lastMoveTime > inactivityDelay) {
        let calderHueIndex = 0;
        calderHueIndex = round(random(1, 3));
        if (calderHueIndex === 1) {
            color.hue = 0 //red
        }
        if (calderHueIndex === 2) {
            color.hue = 60 //yellow

        }
        if (calderHueIndex === 3) {
            color.hue = 240 //blue
        }
        strokeWeight(0);
        usermoved = false;

    }
}


/**
 * This will be called whenever a key is pressed while the calder variation is active
 */
function calderKeyPressed(event) {
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
            saveCanvas('calder_style_painting.png');
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
 * This will be called whenever the mouse moved and the calder variation is active
 */
function calderMouseMoved() {
    if (usermoved === false) {
        sfxBrush.play();
        usermoved = true;
    }
    lastMoveTime = millis()


}

/**
 * This will be called whenever the mouse is pressed while the calder variation is active
 */
function calderMousePressed() {
    if (shapeFinished === false) {
        shapes.push(shape);
        line
        shape = [];
        mobile.x = mouseX
        mobile.y = mouseY
        shapeFinished = true
    }
    else if (shapeFinished === true) {
        push();
        stroke(instructions.hue, instructions.saturation, instructions.luminance, instructions.alpha);
        line(mobile.x, mobile.y, mouseX, mouseY);
        pop();

        shapeFinished = false
    }

}