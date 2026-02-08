const args = process.argv.slice(2);
console.log(args);

//if ()

const value = args[0];
//const key = 


console.log("test");

function insertValue(value) {

  const obj = {
    key: value 
  };

  return obj;
};

function reJson(obj) {

  return JSON.stringify(obj);
};

function write(str) {
  process.stdout.write(str + "\n"); 
};

function main() {
  process.stdout.write("main");
  write("str");

  // think think
  const json = reJson(insertValue(value));
  write(json);
};

main();
