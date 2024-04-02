/* Q3. Name Cases:Store a person's name in a variable , and then print that person's name in lowercase, uppercase, and titlecase. */

var persons_name = "joshua";

console.log(persons_name.toLowerCase()); //LowerCase 
console.log(persons_name.toUpperCase()); //UpperCase 

var firstletter = persons_name.charAt(0).toUpperCase();
var restletters = persons_name.slice(1).toLowerCase();

var titleCase = firstletter + restletters;
console.log(titleCase);
