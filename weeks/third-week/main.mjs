import { readFile, readFileSync } from 'node:fs';

const args = process.argv.slice(2);
console.log(args);

const fileData = readFileSync("sample.md");

function readfile(file) {
  readFile(file, (err, data) => {
    write(data + "asyc\n");
  });
};

function write(str) {
  process.stdout.write(str + "\n");
};

function main() {
  process.stdout.write("test\n");
  write("test");
  write(fileData);
  readfile("sample.md");
};

main();
