/* Q35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */

var animals = ["Camel", "Cow", "Goat"];

// to print only names of animals
for (var i = 0; i < animals.length; i++) {
    console.log("\n ".concat(animals[i]));
}

// Printing a statement about each animal
for (var i = 0; i < animals.length; i++) {
    console.log("\n".concat(animals[i], " is a Domestic animal"));
}

//adding an additional line about the types of animals I like 
console.log("\n".concat(animals[0], ", ").concat(animals[1], ", and ").concat(animals[2], " are all Herbivorous animals, meaning they primarily eat plant, grass, leaves and other vegetation.These animals are also known for their ability to produce milk< which is a valuable source of nutrition for humans."));
