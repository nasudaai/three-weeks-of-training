import { readFileSync } from 'node:fs';
const args = process.argv.slice(2);
if (args[0] === "c") {
  process.stdout.write("create lines start! stdin >>> \n");
  process.exit(0);
}

const data = readFileSync("sample.txt", "utf-8");
console.log(data);
process.stdout.write(data);


console.log(data.split("\n").filter(line => line !== ""));


const lines = data.trimEnd().split("\n");
console.log(lines);
process.stdout.write(JSON.stringify(lines) + "\n");
