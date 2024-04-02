/* Q32.  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

var current_users = ["FaiSal", "UMer", "AAliYan", "SalaAr", "AhMed"];
var new_users = ["FaHad", "AAliYan", "HaaShim", "FaiSal", "ZeeShan"];

new_users.forEach(function (newUsername) {
    /*In for Each  method inside () we have to declare new variable then all the elements from the array given before using this method will come one by one into the new variable & because we have to check for condition that we cannot accept the same name in either lowercase or upper case so create another variable here we name it lowercase then converted the newUsername aarray into lowercase */
    
    var lowercase = newUsername.toLowerCase();
    
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowercase)) {
        /*Here we used map method in current_users array and declared another variable called c_user thne used the arrow '=>' function then again use the newly created variable c_user and convert it into lowercase() ,then we have used .includes(lowercase) to check if the name we name stored in variable lowercase are also available in c_user variable then print this ussername is not available otherwise print this uisername is available */
        console.log("The username ".concat(newUsername, " is not available. Please write a different username"));
    }
    else {
        console.log("The username ".concat(newUsername, " is available."));
    }
});
