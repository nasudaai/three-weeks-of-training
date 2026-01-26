const args = process.argv.slice(2);
console.log(args);

if (args.length !== 1 ) {
  console.error("usage: memo <title>");
  process.exit(1);
}

const structure = {
  title: "",
  body: ""
};

structure.title = args[0];

console.log(structure);
