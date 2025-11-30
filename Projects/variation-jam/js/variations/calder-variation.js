/**
 * This file contains the code to run *only* the calder variation part of the program.
 * 
 */

// these arrays store the shapes data and collection of shapes to diplay them on canvas
let shape = []
let shapes = []

// this object stores the x and y coordinates of every vertex that are making the shapes
let point = {
    X: 0,
    Y: 0,
}

// this variable is stating if the shaped is finished or not to stop filling or not, stop adding vertices or not. 
let shapeFinished = true

// this object if for placing the first point of the mobile at the centered top, letting the rods branch out after from the top
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

        if (shapeFinished === false) { // only starts the vertex loop when shape is being drawn
            beginShape();
            for (let i = 0; i < shape.length; i++) {
                vertex(shape[i][0], shape[i][1]) // adds x and y of the vertex to the shape array
            }
            endShape(CLOSE); // is always closing the shape gradually to visualize result
        }
        calderStartShape(); // assigns x&y of mouse to vertex x&y if shape is being drawn, after includes the shape to the array

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
        shape.push([point.X, point.Y]); // adds to shape array

    }
    else { // if shape is done, does nothing

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
    else if (shapes.length === 1) { // after 1 shape, the user should understand how it works and hides the instructions to have clean layout when painting is saved with S
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
 * This will be called when user is inactive to change hue and say it is inactive, only picks prinary colors like calder tended to do for his mobiles.
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
        shapes.push(shape); // adds shape to shapes collection array
        shape = []; // empties the shape array for next one
        mobile.x = mouseX
        mobile.y = mouseY // set last coordinates
        shapeFinished = true // close shape and flip the state for next mouse click
    }
    else if (shapeFinished === true) {
        push();
        stroke(instructions.hue, instructions.saturation, instructions.luminance, instructions.alpha);
        line(mobile.x, mobile.y, mouseX, mouseY); // adds the black line to draw the mobile rod between last point and new point
        pop();

        shapeFinished = false // sets the shape to "open" to add vertices to "shape" array
    }

}