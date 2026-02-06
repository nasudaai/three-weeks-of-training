const args = process.argv.slice(2);
if (args[0] === "std") {
  let buf = "";
  process.stdin.on("data", (chunk) => {
    buf += chunk.toString();
    process.stdout.write(buf);

    const lines = buf.split(/\n/);
    buf = lines.pop();
    process.stdout.write(buf);

    for (const line of lines) {

      process.stdout.write(line);
    }
  });
}
process.stdout.write(JSON.stringify(args) + "\n");
