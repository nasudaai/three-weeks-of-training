const args = process.argv.slice(2);
console.log(args);
console.log("test");


const data = {
  key: "value"
};

function reJson(data) {
  return JSON.stringify(data);
};

function write(str) {
  process.stdout.write(str + "\n"); 
};

function main() {
  process.stdout.write("main");
  write("str");
  const json = reJson(data);
  write(json);
};

main();
