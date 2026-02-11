function write() {
  process.stdout.write("write" + "\n")
};
function main() {
  process.stdout.write("test\n");
  write();
};

main();
