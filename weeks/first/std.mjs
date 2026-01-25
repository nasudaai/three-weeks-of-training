process.stdin.on("data", (chunk) => {
  console.log(chunk);

  if (chunk.toString().trim() === ".exit") {
    process.exit(0);
  }
})
