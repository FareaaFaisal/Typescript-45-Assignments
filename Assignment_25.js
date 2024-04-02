/* Q25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */

//The version that passes the if test
var alien_color = "green";

//Created a variable called alien_color
if (alien_color === "green") {
    console.log("The player just earned 5 points");
}

//The version that fails the if test and will have no output because the loop will not execute
alien_color = "yellow";

//Created a variable called alien_color
if (alien_color === "green") {
    console.log("The player just earned 5 points");
}
