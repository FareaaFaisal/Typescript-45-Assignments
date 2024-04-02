/* Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

let Guest_list : string[] = ["Yoon Jeonghan", "Hong Joshua", "Kim Mingyu", "Min Yoongi", "Song Joongki", "Park Hyungsik", "Jeon Jungkook", "Kim Seokjin"];
// printed original array from the output of Q16
console.log(Guest_list);

// Sorry message to the guests for not inviting

console.log("\n Unfortunately, due to unforseen circumstances, I wont be able to host the dinner as planned so , now i can only invite 2 people for the dinner");

//removing all guests from the list except 2
while(Guest_list.length > 2)
{
    let remove_guest = Guest_list.pop();
    console.log(`\n\n Sorry Mr. ${remove_guest}, but I cannot invite you for the dinner`);
}

// Printing a message to the remaining 2 guests
for(let i=0; i<Guest_list.length; i++)
{
    console.log(`\n\nMr. ${Guest_list[i]}, you are still invited for the dinner\n\n Thank You`);

}

// Removed all guests from the array
Guest_list.splice(0,2);      //to delete values from 0 index till 2
console.log(`\n`,Guest_list);