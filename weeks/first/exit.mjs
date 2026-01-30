const args = process.argv.slice(2);
//console.log(args);
console.log("usage: exit -> .exit");

//function write()

const arr = [];


process.stdin.on("data", (chunk) => {
  arr.push(chunk);
  console.log(arr);

  console.log(chunk);
  process.stdout.write(chunk);

  if (chunk.toString().trim() === ".exit") {
    const lines = Buffer.concat(arr).toString();
//    console.log(lines);
    process.stdout.write(lines);
    console.log(arr.toString());
    process.exit(0);
  }
})
