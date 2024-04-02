/* Q37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message */

function make_shirt(size, label) {
    if (size === void 0) { size = "Large"; }
    if (label === void 0) { label = "I love Typescript"; }
    //Function Declaration
    console.log("Creating a shirt of ".concat(size, " size with the message: ").concat(label, " "));
}

make_shirt(); //Function Calling
make_shirt("Medium");
make_shirt("Small", "I love C++");
