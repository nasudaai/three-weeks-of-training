const file = process.argv[2];
console.log(file);

import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
console.log(createServer);

const html = readFileSync("./index.html");
const js = readFileSync("main.js");
const txt = readFileSync("./text.txt");
console.log(txt);

const server = createServer((req, res) => {
  if (req.url === "/main.js") {
    res.end(js);
    return;
  }

  if (req.url === "/txt") {
    res.end(txt);
    return;
  }

  res.end(html);
});

server.listen(3000, () => {
  console.log("listen on http://localhost:3000");
});
