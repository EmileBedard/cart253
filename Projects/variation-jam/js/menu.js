/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */


let menuState = "mainMenu"

const menuText = `
(R) Red variation
(G) Green variation
(P) Pollock variation`

/**
 * Display the main menu
 */
function menuDraw() {
    if (menuState === "variationSelection") {
        image(menuNoText, 0, 0);
        push();
        fill(255);
        textSize(32);
        textAlign(CENTER, CENTER);
        textFont(pixelfont);
        text(menuText, width / 2, height / 2);
        pop();
    }
    else {
        image(mainSplashScreen, 0, 0);
    }
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 82:
            state = "red-variation";
            redSetup();
            menuState = "mainMenu"
            break;

        case 71:
            state = "green-variation";
            greenSetup();
            menuState = "mainMenu"
            break;

        case 80:
            state = "pollock-variation";
            pollockSetup();
            menuState = "mainMenu"
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {
    if (mouseX > 230 && mouseX < 410 && mouseY > 260 && mouseY < 310) {
        menuState = "variationSelection"
        sfxBrush.play();
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMouseMoved() {
    //empty
}
