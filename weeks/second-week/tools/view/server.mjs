import { readFileSync } from 'node:fs';

const file = readFileSync("../memo.md");
console.log(file);
