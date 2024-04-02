/* Q22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. */

//Creating an intentional error of index number
var student_names:string[] = ["Rabia", "Sara", "Ummama", "Ayesha", "Unaisa"];
// index no.                     0        1        2        3          4

console.log("\nError: ");
console.log(student_names[0]);
console.log(student_names[3]);
console.log(student_names[6]);

//Debugging the error
var student_names:string[] = ["Rabia", "Sara", "Ummama", "Ayesha", "Unaisa", "Amal", "Mariam"];
// index no.                     0        1        2        3          4        5        6

console.log("\nAfter Debugging: ");
console.log(student_names[0]);
console.log(student_names[3]);
console.log(student_names[6]);