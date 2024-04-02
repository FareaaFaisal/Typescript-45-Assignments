 /* Q21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */

 // interface is used to define datatype of all elements of the final variable which is Car_info here
 interface Car_info_type{
    name : string,
    make : string,
    model : string,
    year : number,
    features : string[],
 };

// in Final variable ,after writing the variable name inplace of of defining datatype write name of that variable in which we stored the datatype of all the elements example here , Car_info: Car_info_type
const Car_info: Car_info_type = {
    name: `My Camry`,
    make : `Toyota`,
    model : `Camry`,
    year : 2022,
    features : ["GPS ", " Bluetooth"]
};

// For Output
console.log(`\nCar Name: ${Car_info.name}`);
console.log(`Car Make: ${Car_info.make}`);
console.log(`Car Model: ${Car_info.model}`);
console.log(`Car Year: ${Car_info.year}`);
console.log(`Car Features: ${Car_info.features}`);