# ... But why?
I had just finished the Hooks section of this [ReactJS course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) then I thought - hey, lets build something with it. At the same time, I was playing Skyrim like a freak, and when lockpicking a random chest I realize I could reproduce this mechanism. This will be a long readme.


# Lockpicking Layers
Containers are responsable for gathering user data and saving it to redux. 

## Configuration
LockpadMenu gathers game's difficulty and sets other configurations, like hotzones and so on. I'll add an input to determine the lockpick quantity, its hardcoded to 3. 

## Input
Lockpad gathers user input, then filters it. I may refactor this input gathering layer to a HOC or a Custom Hook later. Maybe turn into a lib.


# Engine
Imagine Skyrim's lockpicking system. Or better, just watch it
![Skyrim Lockpicking gif](https://media1.tenor.com/images/7ca9acadf4303c76b68dceea923544ac/tenor.gif?itemid=15095752 "Skyrim Lockpicking gif")

The player inserts input (wasd, clicks, hold buttons, events), to determine pick position, attempts to unlock, etc. The game does the rest - unlocks the chest on a success attempt, break player's pick on a failure attempt, give UI feedback, etc.

To reproduce this system, I implemented input and configuration layers (as seen above), and some reducers to deal with those layers. 

## zones
To give the player a nice feedback, like if he is close to unlock, custom lockpad rotation, and so on, I've implemented an array system (or something like that), where two arrays are randomly generated, based on difficulty. 
  1. Hotzone
   This zone shows the user that he is getting closer to unlock, changes the lockpad rotation.
  2. Unlockzone
   As the name suggests, this zone determines the opening of the lock.

## reducers
0. **Input**

    This reducer just records user inupt, like keyDown/Up, mouseDown/Up, mousemove event, and also for how long a key is being pressed. 

1. **Movement**:

    This reducer is responsable for _transcribing_ the user input into actual usable data. It determines unlockability, distance from unlockzone, how much will the lockpad rotate, if it is turning, etc.
    * **isUnlockable**
    
       Based on the distanceFromUnlock, determines if the lock is able to be unlocked (player wins). Note: this check could be done using distanceFromUnlock alone, but it would trigger lots of unnecessary renders on two effects.
    * **distanceFromUnlock**
    
       Sets the distance from unlockzone, to determine how much the lock will rotate, based on how close/far the player is from the unlockzone.
    * **turning**
    
       Determine if the player is trying to unlock, turning the lockpad
    * **rotation**
    
       Lock's rotation, in degs

2. **Pick**

   Determines pick life, to be able to _break_ it on failure attempts. Also sets how many picks are available to the user.
    * **pickLife**
    
       From 0 to 100, it is decreased if the player is pressing a key (trying to unlock) and also its not on the unlockzone
    * **pickLives**
    
       Total picks quantity. Hardcoded to 3.

3. **Game**

   General configuration, like notifications, or wheter the game is over or the player wins.


It is also important to understand the *useAngle* custom hook. This hook receives an input event, which is the mousemove event, and then sets the pick's position accordingly. It will also determine angle limits, which currently are *-115deg* and *115deg* - this is important both to the UI and to the engine.

# Future updates
   
   * Fix the current bug of unlocking instantly in some difficulties
   * Export the menu (home menu and auth menu) to a separated package on NPM