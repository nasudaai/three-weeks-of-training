//input
const args = process.argv.slice(2);
//console.log("test");

//validation
if (args.length === 0) {
  process.stdout.write("please argument" + "\n");
}

const arr = ["a", "b", "c"];
console.log(arr);
console.log(args);

process.stdout.write(JSON.stringify(arr) + "\n");
