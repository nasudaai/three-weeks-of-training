function out(str) {
  process.stdout.write(str + "\n");
}
function main() {

  const args = process.argv.slice(2);
  console.log(args);


  const str = "strng";

  process.stdout.write("test\n");
  process.stdout.write(str + "\n");
  out(str);
};

main();
