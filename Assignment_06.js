/* Q6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */

var person_name = "\t\t Faisal \n";
console.log("Name with Whitespaces :\n" + person_name);

var stripped_name = person_name.trim();
console.log("Stripped name :\n" + stripped_name);
