/* Q3. Name Cases:Store a person's name in a variable , and then print that person's name in lowercase, uppercase, and titlecase. */ 

const persons_name:string="joshua"; 

console.log(persons_name.toLowerCase()); //LowerCase 
console.log(persons_name.toUpperCase()); //UpperCase 

let firstletter: string = persons_name.charAt(0).toUpperCase(); 
let restletters: string = persons_name.slice(1).toLowerCase(); 

let titleCase = firstletter + restletters; 
console.log(titleCase)