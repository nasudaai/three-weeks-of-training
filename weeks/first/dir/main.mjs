const args = process.argv.slice(2);
console.log(args);

//process.stdout.write("test\n");

function write() {
  //write line "\n"
  process.stdout.write("func" + "\n");
};

function main() {
  write();
}
//write();

main();
