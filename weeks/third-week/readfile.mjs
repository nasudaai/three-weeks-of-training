import { readFile, readFileSync } from 'node:fs';

const args = process.argv.slice(2);
console.log(args);

const fileData = readFileSync("sample.md");

//callback
function readfile(file) {
  readFile(file, (err, data) => {
    write(data + "asyc\n");
  });
};

//return promise
function rePromise(file) {
  return new Promise((resolve, reject) => {
    readFile("sample.md", (err, data) => {
      resolve(data);
    });
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
  rePromise("sample.md")
    .then((data) => {
      write(data);
      return data.length;
    })
    .then(len => {
      write(len);
    });
};

main();
