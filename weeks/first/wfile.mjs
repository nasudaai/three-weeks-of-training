import { writeFile } from 'node:fs';

const content = "string";


writeFile("out/out.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
});
