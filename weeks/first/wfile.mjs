import { writeFile, readFile } from 'node:fs';
console.log(readFile);

//get argv
const content = "string";


writeFile("out/out.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    // will content read
    console.log(content);
  }
});
