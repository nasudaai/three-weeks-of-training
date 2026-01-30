const args = process.argv.slice(2);
console.log(args);
console.log("test");

function write(str) {
  process.stdout.write(str + "\n"); 
};

function main() {
  process.stdout.write("main");
  write("str");
};

main();
