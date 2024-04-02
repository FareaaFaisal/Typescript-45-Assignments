/* Q34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza! */
var pizza = ["BBQ Chicken Pizza", "Pepperoni Pizza", "Margherita Pizza", "Hawaiian Pizza"];

// to print only names of pizza
for (var i = 0; i < pizza.length; i++) {
    console.log("\n ".concat(pizza[i]));
}

// Printing a sentence
for (var i = 0; i < pizza.length; i++) {
    console.log("\nI like to eat ".concat(pizza[i]));
}

//adding an additional line about the types of pizza I like 
console.log("\nI really like pizza because it's so versatile and delicious especially when it comes to classic ".concat(pizza[2], ", ").concat(pizza[0], ", ").concat(pizza[1], ", and ").concat(pizza[3], ", there's always a flavor to suit every mood and cravings "));
