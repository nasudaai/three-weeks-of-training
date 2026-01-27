import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
//console.log(createServer);

const html = readFileSync("./index.html");
console.log(html);
const js = readFileSync("./main.js");
//console.log(js);


const server = createServer((req, res) => {
  if (req.url === "/main.js") {
    res.writeHead(200, { "content-type": "application/javascript" });
    res.end(js);
    return;
  }

  if (req.url === "/app.js") {
     res.writeHead(200, { "content-type": "application/javascript" });
     res.end(readFileSync("./app.js"));
     return;
  }
  res.end(html);
});

server.listen(3000, () => {
  console.log("listen http://localhost:3000");
});
