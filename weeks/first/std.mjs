process.stdin.on("data", (chunk) => {
  console.log(chunk);
  process.stdout.write(chunk);

  if (chunk.toString().trim() === ".exit") {
    process.exit(0);
  }
})
