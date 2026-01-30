const args = process.argv.slice(2);
console.log(args);

process.stdout.write("test\n");

function write() {
  process.stdout.write("func");
};

write();
