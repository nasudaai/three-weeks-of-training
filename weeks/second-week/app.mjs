const args = process.argv.slice(2);
if (args[0] === "std") {
  process.stdin.on("data", (chunk) => {

    process.stdout.write(chunk.toString());
  });
}
process.stdout.write(JSON.stringify(args) + "\n");
