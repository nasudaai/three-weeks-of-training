import { readFileSync } from 'node:fs';

const data = readFileSync("sample.txt", "utf-8");
console.log(data);
process.stdout.write(data);


console.log(data.split("\n").filter(line => line !== ""));


const lines = data.trimEnd().split("\n");
console.log(lines);
process.stdout.write(JSON.stringify(lines) + "\n");
