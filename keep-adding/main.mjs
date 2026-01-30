function writOut() {
  process.stdout.write("write" + "\n");
};


function main() {
  process.stdout.write("main\n");
  writOut();
};

main();
