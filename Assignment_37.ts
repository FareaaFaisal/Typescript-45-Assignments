/* Q37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message */

function make_shirt(size: string = "Large", label:string="I love Typescript"){ 
    //Function Declaration
    console.log(`Creating a shirt of ${size} size with the message: ${label} `);
}

make_shirt(); //Function Calling
make_shirt(`Medium`);
make_shirt(`Small`, `I love C++`);