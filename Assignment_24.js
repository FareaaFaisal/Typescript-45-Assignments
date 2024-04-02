/* Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
*/

// • Tests for equality with strings
console.log("\nEquality tests for strings: ");
var subject = "English";
console.log("\nIs subject === 'English'? I predict true"); //For true
console.log(subject === 'English');
var fav_fruit = "Kiwi";
console.log("\nIs favourite fruit === 'Cherry'? I predict false"); //For false
console.log(fav_fruit === 'Cherry');
console.log("--------------------------");

// • Tests for inequality with strings
console.log("\nInequality tests for strings: ");
var fav_actor = "Song Joongki";
console.log("\nIs my favourite actor !== 'Cha Eunwoo'? I predict true"); //For true
console.log(fav_actor != 'Cha Eunwoo');
var mycar = "Mercedes";
console.log("\nIs my car !== 'Mercedes'? I predict false"); //For false
console.log(mycar != 'Mercedes');
console.log("--------------------------");

// • Tests using the lower case function
console.log("\nTests using lower case function: ");
var Greetings = "HELLO";
console.log("\nIs greetings === 'hello'? I predict true"); //For true
console.log(Greetings.toLowerCase() === 'hello');
var National_dish = "NIHARI";
console.log("\nIs the National Dish of Pakistan === 'NIHARI'? I predict false"); //For false
console.log(National_dish.toLowerCase() === 'NIHARI');
console.log("--------------------------");

// • Numerical tests involving equality 
console.log("\nNumerical tests involving equality: ");
var maths_marks = 50;
console.log("\nIs the marks of maths === 50 ? I predict true"); //For true
console.log(maths_marks === 50);
var total_marks = 530;
console.log("\nAre total marks of === 550 ? I predict false"); //For false
console.log(total_marks === 550);
console.log("--------------------------");

// • Numerical tests involving inequality
console.log("\nNumerical tests involving inequality: ");
var percentage = 85;
console.log("\nIs my percentage != 90 ? I predict true"); //For true
console.log(percentage != 90);
var my_age1 = 32;
console.log("\nIs my age != 32 ? I predict false"); //For false
console.log(my_age1 != 32);
console.log("--------------------------");

// • Numerical tests involving greater than
console.log("\nNumerical tests involving greater than: ");
var num1 = 45;
console.log("\nIs num1 > 30 ? I predict true"); //For true
console.log(num1 > 30);
var fav_num1 = 52;
console.log("\nIs fav_num1 > 70 ? I predict false"); //For false
console.log(fav_num1 > 70);
console.log("--------------------------");

// • Numerical tests involving less than
console.log("\nNumerical tests involving less than: ");
var num5 = 18;
console.log("\nIs num5 < 20 ? I predict true"); //For true
console.log(num5 < 20);
var num_3 = 58;
console.log("\nIs num_3 < 32 ? I predict false"); //For false
console.log(num_3 < 32);
console.log("--------------------------");

// • Numerical tests involving greater than equal to
console.log("\nNumerical tests involving greater than equal to: ");
var n2 = 19;
console.log("\nIs n2 >= 19 ? I predict true"); //For true
console.log(num1 >= 19);
var n6 = 9;
console.log("\nIs n6 >= 50 ? I predict false"); //For false
console.log(n6 >= 50);
console.log("--------------------------");

// • Numerical tests involving less than equal to
console.log("\nNumerical tests involving less than equal to: ");
var number2 = 7;
console.log("\nIs number2 <= 17 ? I predict true"); //For true
console.log(number2 <= 17);
var number3 = 68;
console.log("\nIs number3 < 30 ? I predict false"); //For false
console.log(number3 <= 30);
console.log("--------------------------");

// • Tests using "and"  '&&' operator
console.log("\nNumerical tests involving \"AND\" '&&' operator: ");
var n1 = 7;
console.log("\nIs 'n1 === 7 && n7 <= 45'  ? I predict true"); //For true
console.log(n1 === 7 && n1 <= 45);
var n7 = 68;
console.log("\nIs 'n7 === 30 && n7 === 32' ? I predict false"); //For false
console.log(n7 === 30 && n1 === 32);
console.log("--------------------------");

// • Tests using "OR"  '||' operator
console.log("\nNumerical tests involving \"OR\" '||' operator: ");
var num_1 = 8;
console.log("\nIs 'num_1 <= 8 || num_1 > 45'  ? I predict true"); //For true
console.log(num_1 <= 8 || num_1 > 45);
var num_7 = 27;
console.log("\nIs num_7 >= 58 || num_7 === 10 ? I predict false"); //For false
console.log(num_7 >= 58 || num_7 === 10);
console.log("--------------------------");

// • Test whether an item is in a array
console.log("\nTests for checking whether an item is in  an Array : ");
var seasons = ["Summer", "Spring", "Autumn", "Winter"]; //For true
console.log("\nIs 'Spring' an element of the Array ? I predict true");
//.includes is used for checking whether an  element is part of the Array or not
console.log(seasons.includes("Spring"));
var Fav_kdramas = ["True Beauty", "Vincenzo", "Shooting Stars", "Doctor Slump", "Hwarang"]; //For false
console.log("\nIs 'Twinkling Watermelon' an element of the Array ? I predict false");
//.includes is used for checkng whether an  element is part of the Array or not
console.log(Fav_kdramas.includes("Twinkling Watermelon"));
console.log("--------------------------");

// • Test whether an item is not in a array
console.log("\nTests for checking whether an item is not in an Array : ");
var even_numbers = [4, 6, 8, 10]; //For true
console.log("\nIs 8 an element of the Array ? I predict true");
//.includes is used for checking whether an  element is part of the Array or not
console.log(!even_numbers.includes(16));
var variety_show = ["Running man", "X-man", "Run BTS", "Going Seventeen"]; //For false
console.log("\nIs 'Sixth Sense' an element of the Array ? I predict false");
//.includes is used for checkng whether an  element is part of the Array or not
console.log(Fav_kdramas.includes("Sixth Sense"));
console.log("--------------------------");
