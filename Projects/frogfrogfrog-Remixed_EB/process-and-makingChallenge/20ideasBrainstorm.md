# Ideas for mod jam !

1. frog is changing name everytime it eats a fly (maybe text is displayed on top and is fetching from a bank of random names, why is it changing name. Maybe to fit it's new personnality?)

2. when time runs, the frog gets more and more hungry and the skin color fades to grey, ounce it eats, the frog gains saturation (this is to show hungriness, could be interesting to create tension and incentivise to feed it! otherwise game ends according to millis() timer showing ending screen, blacked out and displaying centered text expressing reason of death.)

3. every fly has a different flight pattern chose randomly ( adds personnality to make them different. they are different individuals so why not be unique and novel. this could be set with a random trigonometric function whose variables are picked randomly every time a fly spawns.)

4. every fly going off screen after passing is removing a point from score ( for this one we need to create or implement in an if function to deduct points, pretty simple and pushed the players to catch avery single fly. it builds tension.)

5. once you have 10 points, you move to a different stage with a miniboss inbetween( this could be interesting to show progress. how many stages? are all minibosses the same? how is difficulty increasing OR is it even increasing?? it could be fun to learn the play patterns of the bosses and wotk our way into beating them)

6. frog laughs if it fails to capture the fly (frog is fun, frog is humble and is able to make fun of itself to sometime not achieve or succeed at every try. this could be interesting to use a sine wave to show the frog laughing and maybe text on top to display the laughter, hahaha maybe ? surely.)

7. frog tongue length is based on charging value of mouseclicked ( this could add difficulty and make it more challenging to touch and get the flies. once the mouse is clicked, a counter could go up to set the tongue legth and is used to define the distance once released.)

8. on a random rate, some flies fall in love together(adding romance is something that is always relevant. love is relevant and important. this combined with the frog laughter could help to define the playful and fun game mood. it could be implemented with a random factor choosing isFlyInLove?() everytime a fly is generated and makes it attracted to nearest fly by dtsance and displaying floating hearts around them.)

9. tongue is stretchy (says it all, maybe tongue bounces back at frog after finished extension. or completely wobbly and viscous. could be achieved only by modifiyng the way is sent, so by setting an independent x coordinate for the tongue tip when it is launched)

10. once evry 15 flies, frog MUST brush it's teeths (this adds to the comic vibe of the game, the brushing helps the user feel clean and ready to eat more flies. very important. this could be triggered at every multiple of 15 that triggers a floating toothbrush that is used by the frog in an if function)

11. every x flies eaten, frog pulls one to start a chat, small talk and release it( this makes it fun and light, helps to get to know the flies apart from always eating them. animation could start when the x condition is met and starts the small talk based on randomly generated conversation fetching from sentences bank)

12. every fly eaten slows down the tongue speed (this could add difficulty over time, making it harder and harder to approximate the fly position. we could deduct value from tongueSpeed everytime the score or flyCount goes up)

13. the frog color is based on the weekday we are playing (this adds personnality and is a nice feature for replayability. users can feel truly connected to THEIR fridays frog that are truly different from the sundays frog. i dont know how i could make this work, maybe the browser hols this data somewhere that i could fetch? could be a fun learning experience.)

14. the scene background is showing the flies nest (this gives context to where the enemy is coming from. could be simply drawn in a lighter shade to evoke distance)

15. everytime the score gets to a 5 multiple, 1 extra fast fly zips in the canvas, this **special** fly is worth 5 points ( this could add a fun feature and be coded with a different js object like: **specialflywow** that is associated to a new scoring addition system in an if statement)

16. you can jump with the frog (why not!! we could add this capability with spacebar for example to let the frog jump according to set height and come back down after. )

17. frog is happy everytime it eats (the frog could display with text() for a short period a happy message randomly picked to show happiness. for exampleL yipeee, yay, wow, delicious etc..)

18. a second frog is added on the top of the screen for multiplayer capabilities. ( this adds tension and competiton. the controls could be rethinked so that each player can control their respective frog with WASD for player 1 and arrow keys for the other player. they could have seperate score and set a winning score at the start of the game to have a common objective)

19. flies have names and display a small tombstone on x location on the bottom of canvas when they die (this idea is really fun, it emphasizes the importance of knowing that every form of life has it's story and it is just as important as ther other ones.)

20. a random queen of flies appear sometime that has 3 lives and is worth 10 points (this queen could be set with a new js object and could have a life counter to make sure to offer a bit more difficulty)

21. if the frog skips 3 flies, it takes time to take a nap before getting to it again. (resting is important, for the frog too. it could display text saying it is going to sleep and start a function with millis() delays integrated to rotate on a bed that appeared and display very important zzzzzs to show that is is sleeping. it could then listen to user interaction like mouseMoved or mouseClicked to wake up and start hunting flies again.)