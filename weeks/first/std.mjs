const args = process.argv.slice(2);
console.log(args);

//function write()



process.stdin.on("data", (chunk) => {
  console.log(chunk);
  process.stdout.write(chunk);

  if (chunk.toString().trim() === ".exit") {
    process.exit(0);
  }
})
