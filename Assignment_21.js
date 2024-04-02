/* Q21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */

// in Final variable ,after writing the variable name inplace of of defining datatype write name of that variable in which we stored the datatype of all the elements example here , Car_info: Car_info_type
var Car_info = {
    name: "My Camry",
    make: "Toyota",
    model: "Camry",
    year: 2022,
    features: ["GPS ", " Bluetooth"]
};

// For Output
console.log("\nCar Name: ".concat(Car_info.name));
console.log("Car Make: ".concat(Car_info.make));
console.log("Car Model: ".concat(Car_info.model));
console.log("Car Year: ".concat(Car_info.year));
console.log("Car Features: ".concat(Car_info.features));
