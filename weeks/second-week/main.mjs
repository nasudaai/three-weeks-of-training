
function reObj() {

  const obj = {
    key: "value"
  };

  return obj;
};

// main(args)
function main() {
  
  console.log("test");
  const obj = reObj();
  process.stdout.write(JSON.stringify(obj) + "\n");
};

main();
