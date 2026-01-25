import { createWriteStream } from 'node:fs';

console.log(createWriteStream);
const ws = createWriteStream("out/sample.txt");

process.stdin.on("data", (chunk) => {
  ws.write(chunk);
});
