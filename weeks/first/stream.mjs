import { createWriteStream, readFileSync } from 'node:fs';

console.log(createWriteStream);
const ws = createWriteStream("out/sample.txt");

process.stdin.on("data", (chunk) => {
  ws.write(chunk);

  if (chunk.toString().trim() === "exit") {
    const data = readFileSync("out/sample.txt", "utf-8", );
    console.log(data);
    
    process.exit(1);
  }
});
