import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
//console.log(createServer);

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
  res.end(`<h1>hi</h1> <script type="module" src="/main.js"></script>`);
});

server.listen(3000, () => {
  console.log("listen http://localhost:3000");
});
