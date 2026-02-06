import { readFile, readFileSync } from 'node:fs';
//input
const args = process.argv.slice(2);

//input file
const data = readFileSync("text.txt", "utf-8");
console.log(data);
//console.log("test");

//validation
if (args.length === 0) {
  process.stdout.write("please argument" + "\n");
}

const arr = ["a", "b", "c"];
console.log(arr);
console.log(args);

process.stdout.write(JSON.stringify(arr) + "\n");
