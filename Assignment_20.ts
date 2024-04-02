/* Q20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items */

// storing elements in an array
let countries:string[]=["England", "Italy", "Turkey", "South Korea", "Brazil"];

console.log("List Of Countries:");
console.log("------------------");
countries.map((items)=> console.log(items));  //map method is used to read elements of an array one by one and it in a new variable here, it is named as items then all these elemetns are stored in this variable after this this sign => is used then print the new variable using console.log

//In this program we simply  cannot print the array because in that case all elements will be printed in array form but it is said in question that all elements should be in the form of list

