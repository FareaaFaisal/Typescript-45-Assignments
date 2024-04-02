/* Q42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */

var magiciansNames = ["David Blaine", "Criss Angel", "David Copperfield", "Lance Burton", "Ricky Jay"];
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magiciansNames[i] = "the Great " + magicianArray[i];
    }
}
;

function show_magicians(magiciansNames) {
    for (var _i = 0, magiciansNames_1 = magiciansNames; _i < magiciansNames_1.length; _i++) {
        var magicianName = magiciansNames_1[_i];
        console.log(magicianName);
    }
}
;

make_great(magiciansNames);
show_magicians(magiciansNames);
