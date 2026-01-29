import { createServer } from 'node:http';
console.log(createServer);

const obj = { key: "value" };
process.stdout.write(JSON.stringify(obj));

const server = createServer((req, res) => {
//will write
  res.end(req.url);
});

server.listen(3000, () => {
  console.log("listen on http://localhost:3000");
});
