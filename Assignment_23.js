/* Q 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

//Creating 5 tests for condition to be evaluated as true
//1.
var std_name = "Faisal";
console.log("\nIs student name == 'Faisal'? I predict true");
console.log(std_name == 'Faisal');

//2.
var fav_num = 18;
console.log("\nIs my favorite number == 18 ? I predict true");
console.log(fav_num == 18);

//3.
var flowers = ["Jasmine", "Sunflower", "Rose", "Tulip", "Daisy"];
console.log("\nAre number of elements in the array == 5 ? I predict true");
console.log(flowers.length == 5);

//4.
var my_best_friend = "Aamna";
console.log("\nIs my best friend == 'Aamna'? I predict true");
console.log(my_best_friend == 'Aamna');

//5.
var pak_primeminister = "Shahbaz Sharif";
console.log("\nIs the Prime Minister of Pakistan == 'Shahbaz Sharif'? I predict true");
console.log(pak_primeminister == 'Shahbaz Sharif');


//Creating 5 tests for condition to be evaluated as false
//6.
var colors = ["Blue", "Pink", "Red", "Purple"];
console.log("\nAre number of elements in the array == 7 ? I predict false");
console.log(colors.length == 7);

//7.
var num = 15;
var even_num = 15 % 2 === 0;
console.log("\nIs 15  == 'even number' ? I predict false");
console.log(even_num);

//8.
var weather = "Sunny";
console.log("\nIs weather == 'Rainy' today ? I predict false");
console.log(weather == 'Rainy');

//9.
var capital = "Islamabad";
console.log("\nIs the capital of Pakistan == 'islamabad' ? I predict false");
console.log(capital == 'islamabad'); //bcoz Typescript is case-sensitive

//10.
var my_age = 17;
console.log("\nIs my age == 18 ? I predict false");
console.log(my_age == 18);
