/* Q31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

// from Exercise 30
let usernames2:string[]=["John", "Vernon", "Smith", "James", "admin", "Henry"];

// for(let i = 0; i < usernames2.length; i++){
//     if(usernames[i] === "admin"){
//         console.log(`Hello admin would you like to see a status report?`);
//     }
//     else{
//         console.log(`Hello ${usernames2[i]} thank you for logging in again.`);
//     }
// }

//Exercise 31
usernames2 = []
if (usernames2.length === 0){
    console.log(`We need to find some users !`);
}
