/* Q16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */


let Guest_list : string[] = ["Hong Joshua", "Kim Mingyu", "Song Joongki", "Park Hyungsik", "Jeon Jungkook"];
console.log(Guest_list);
console.log("I have found a bigger table so, 3 more people can join us.");

//add three more friends
Guest_list.unshift("Yoon Jeonghan");           //to add element in the beginning
// ["Yoon Jeonghan", "Hong Joshua", "Kim Mingyu", "Song Joongki", "Park Hyungsik", "Jeon Jungkook"]
console.log(Guest_list);

Guest_list.splice(3,0, "Min Yoongi");           //to add element in the middle
// ["Yoon Jeonghan", "Hong Joshua", "Kim Mingyu", "Min Yoongi", "Song Joongki", "Park Hyungsik", "Jeon Jungkook"]
console.log(Guest_list);

Guest_list.push("Kim Seokjin");                 //to add element at the last
// ["Yoon Jeonghan", "Hong Joshua", "Kim Mingyu", "Min Yoongi", "Song Joongki", "Park Hyungsik", "Jeon Jungkook", "Kim Seokjin"]
console.log(Guest_list);

//print all friends along with messages
for(let i=0;i<Guest_list.length;i++)
{
    console.log(`Mr. ${Guest_list[i]} , you are invited to my dinner`);
}
