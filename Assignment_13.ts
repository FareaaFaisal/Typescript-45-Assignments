/* Q13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”  */

const modes_of_transportation: string[] = ["Motorbike", "Airplane", "Car", "Bicycle"];
                       // index number        0             1         2         3      

for(let i = 0; i < modes_of_transportation.length; i++ )  //Using For loop
{
console.log(`I would like to own a ${modes_of_transportation[i]}`);
}