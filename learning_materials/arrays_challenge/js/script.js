/**
 * Boingo
 * Original by Pippin Barr 
 * challenge by Joyce Lam and Emile Bedard
 *
 * A ball that bounces around on the canvas
 */


let balls = []; // empty arrays to store our balls later

/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);


}

/**
 * Creates a random ball
 */
function createBall() {
    // Create a ball object with appropriate properties
    const newBall = {
        // Position and dimensions
        x: mouseX,
        y: mouseY,
        size: 20,
        // Colour
        fill: "#000000",
        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };
    return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    for (const newBall of balls) {
        moveBall(newBall);
        bounceBall(newBall);
        drawBall(newBall);
    }


}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ballName) {
    ballName.x += ballName.velocity.x;
    ballName.y += ballName.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ballName) {
    // Check if the ball has reached the left or right
    const bounceX = (ballName.x > width || ballName.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (ballName.y > height || ballName.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        ballName.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        ballName.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ballName) {
    push();
    noStroke();
    fill(ballName.fill);
    ellipse(ballName.x, ballName.y, ballName.size);
    pop();
}

/**
 * adds a ball to the array everytime the suer click's mouse button
 */
function mousePressed() {
    balls.push(createBall());
}