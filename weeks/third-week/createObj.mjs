//one key one value

//if (argv or args)
process.stdout.write("default <key> <value>\n"); // mode key | add value | one prop


const args = process.argv.slice(2);

const obj = {};

//
let key = "";

key = args[0];
obj[key] = args[1];


console.log(obj);
