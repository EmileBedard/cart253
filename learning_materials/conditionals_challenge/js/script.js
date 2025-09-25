/**
 * Circle Master! Conditionals challenge
 * By Joyce Lam and Émile Bédard
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

let target = {
    x: 100,
    y: 100,
    size: 120,
    fill: {
        r: 0,
        g: 0,
        b: 255,
    }
}

const targetThreshold = 50
let startTime = undefined



/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();

    //move puck only if user overlaps
    movePuck();

    // Draw the user and puck
    drawTarget();
    drawUser();
    drawPuck();
    checkTarget();



}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * 
 */
function movePuck() {

    const distance = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (distance < user.size / 2 + puck.size / 2);
    // console.log(overlap);
    if (overlap) {

        //if statement for x coordinate
        if (puck.x > user.x) {
            puck.x += 1
        }
        else {
            puck.x -= 1
        }

        //if statement for y coordinate
        if (puck.y > user.y) {
            puck.y += 1
        }
        else {
            puck.y -= 1
        }
    }

}
/**
 * Checks if target is reached, if so, after 1 seconds move the target at a random place on the canvas
 */
function checkTarget() {
    const targetDistance = dist(puck.x, puck.y, target.x, target.y);
    const targetOverlap = (targetDistance < targetThreshold);

    if (targetOverlap) {
        target.fill.b = 0
        target.fill.g = 255

        if (startTime === undefined) {
            startTimer()
        }
        else {
            const finishedTime = startTime + 1000
            if (millis() >= finishedTime) {
                target.x = random(100, 300)
                target.y = random(100, 300)
                startTime = undefined
            }
        }

    }
    else {
        target.fill.b = 255
        target.fill.g = 0
    }
    console.log(startTime);
}
// target.x = random(100, 300)
//         target.y = random(100, 300)

/**
 * starts the rolling time when the function is called
 */
function startTimer() {
    startTime = millis()


    console.log(startTime,)
}


/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

/**
 * Displays a target
 */
function drawTarget() {
    push();
    noStroke();
    fill(target.fill.r, target.fill.g, target.fill.b);
    ellipse(target.x, target.y, target.size);
    pop();
}