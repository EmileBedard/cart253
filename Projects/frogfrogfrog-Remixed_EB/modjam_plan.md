# Instructions

Starting with the frogfrogfrog Project. Add the following five new features to the experience making sure to do so with creativity in mind. (In a perfect world nobody else will have the same approach as you, but it’s okay if they do.)

A title and instructions screen. Could the frog be used to start the game? Could the frog eat the title?
An ending. How should the game end? Because the frog explodes with flies? Because it starves? How can you tell the game is over?
A scoring system. But not just a standard number counting up on the screen.
New kinds of fly movement. Sine wave? Random movement? Perlin noise? Teleportation? Controlled by a second player?
New visual and/or audio effects. Frog’s eyes follow the fly? Sound effects for all major actions? Fly flaps its wings? Frog hops around instead of sliding?
For a perfect score, make sure to add at least two other features to the experience. You could consider:

Visually bringing the fly back to the frog’s mouth on capture. Relative positioning needed for this
A new control system. The keyboard is an obvious choice here? Or clicking where you want the frog to go? Or telling it where to go? Or having it move on its own? Or being able to control the tongue while it’s moving?
etc.


### Title and instructions screen

I want to do a simple and design title screen. My idea is to use orange and a code like monospace typo with the title displayed on 3 rows. My idea is that the second "O" is a big fly with buzzing wings (sine wave movement) that you need to eat to start the game. the instructions would be written on top and the call to action to start the game would be on the bottom. 

> To do:
- add title object with all details
- add buzzing fly with sine wave animation for the wings
- add game states to stay on the title screen until it starts, holding off the main game
- add trigger if big initial fly is eaten, then, start the game and thus change the game state after hiding the title screen
- make the trigger add one to the initial score (built later on)

I think that's all ? might modifiy or add up later on
