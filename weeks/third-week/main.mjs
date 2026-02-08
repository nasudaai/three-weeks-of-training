const args = process.argv.slice(2);

const obj = {};

//
let key = "";

key = args[0];
obj[key] = 1;


console.log(obj);
