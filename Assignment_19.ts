/* Q19.  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. */

// Exercise 14 program
let Guest_list : string[] = ["Hong Joshua", "Kim Mingyu", "Kwon Soonyoung", "Park Hyungsik", "Jeon Jungkook"];
         // index number          0               1               2                3                 4        
         
console.log(Guest_list[0] + "," + "You are invited to join us for the dinner tonight");
console.log(Guest_list[1] + "," + "You are invited to join us for the dinner tonight");
console.log(Guest_list[2] + "," + "You are invited to join us for the dinner tonight");
console.log(Guest_list[3] + "," + "You are invited to join us for the dinner tonight");
console.log(Guest_list[4] + "," + "You are invited to join us for the dinner tonight");

// Exercise 19
// printing a message indicating the number of people you are inviting to dinner.
console.log(`Total number of guests are: ${Guest_list.length}`);  
//.length is used to find the number of elements
