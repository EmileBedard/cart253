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


### 1. Title and instructions screen

I want to do a simple and design title screen. My idea is to use orange and a code like monospace typo with the title displayed on 3 rows. My idea is that the second "O" is a big fly with buzzing wings (sine wave movement) that you need to eat to start the game. the instructions would be written on top and the call to action to start the game would be on the bottom. 

> To do:
- add title object with all details
- add buzzing fly with sine wave animation for the wings
- add game states to stay on the title screen until it starts, holding off the main game
- add trigger if big initial fly is eaten, then, start the game and thus change the game state after hiding the title screen
- make the trigger add one to the initial score (built later on)

I think that's all ? might modifiy or add up later on

### 2. Ending

### initial idea
~~My idea for the ending is that the frog reaches heaven after a fixed amount of fly is eaten, then the game ends and displays text to show that the frog will be happy ever after. This is speaking of the scoring system (frog moving up every fly eaten) built BEFORE ending screen. This also changes the game state to stop generating random flies and stop the grog control according to mouseX~~

### latest idea based on the new wood frog theme

same enfing basically but we are ditching the light rays. will add a snow veil to the whole screen and write out that it's winter, the frog froze and maxed out the glycogen needed to survive winter in icecube mode haha. still need scoring system to be frog moving up. still need the game state to change and the displaying of the text, though, it'll be different.

> To do:
- build the scoring system before, this will let me use the fact that the frog is out of bounds to tell if the game is finished or not
- add the "game finished" game state
- add text to display victory
- ~~maybe some kind of effect ? I'm thinking of light rays rotating to signify that the summit/heaven was reached~~

### 3. Scoring system

### 4. new fly movement

### 5. new visual effect

my idea here is to do a complete remix of the game theme, basing it on the wood frog found in quebec that is know to be one of the only species to completely freeze in winter on the ground. i would change the frog appearance, color and maybe color pattern if i have time. i would change the ending for hibernation instead of frog heaven. add maybe fun facts on screen about the wood frog at the ending? if i have time only. i would also change the flies for a multitude of food like insects, ants and flies. i will add a random picker for which insect to generate avery flyreset is called (this is also a great opportunity ti implement parameters in my code)

> to do (only for new visual effects):
- add random generator for insects (ants, flies and small spiders)
- create and make the draw functions for all the small insects
- change appearance: background, frog color and pattern **ONLY IF I HAVE TIME**
- add fun fact on ending screen to explain the hibernation freezinf frog part

### ++ perfect score extras after