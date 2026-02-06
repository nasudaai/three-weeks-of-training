const args = process.argv.slice(2);
//console.log("test");

const arr = ["a", "b", "c"];
console.log(arr);
console.log(args);

process.stdout.write(JSON.stringify(arr) + "\n");
