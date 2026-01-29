import { createServer } from 'node:http';
console.log(createServer);

const obj = { key: "value" };
process.stdout.write(JSON.stringify(obj));
