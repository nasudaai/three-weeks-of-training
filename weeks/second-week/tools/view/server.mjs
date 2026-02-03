import { readFileSync } from 'node:fs';

const path = process.argv[2];

const file = readFileSync(path);
console.log(file);
