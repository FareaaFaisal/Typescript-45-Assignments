/* Q42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */

let magiciansNames:string[] = ["David Blaine", "Criss Angel", "David Copperfield", "Lance Burton", "Ricky Jay"];

function make_great(magicianArray:string[]){
    for(let i=0; i<magicianArray.length; i++){  
        magiciansNames[i] = "the Great " + magicianArray[i]
    }
};


function show_magicians(magiciansNames:string[]){
    for(let magicianName of magiciansNames){  
        console.log(magicianName);
    }
};

make_great(magiciansNames);
show_magicians(magiciansNames);