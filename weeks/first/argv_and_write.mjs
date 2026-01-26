const args = process.argv.slice(2);
//console.log(args);

function write() {
  process.stdout.write("test\n");
}
process.stdout.write(JSON.stringify(args) + "\n");
write();
