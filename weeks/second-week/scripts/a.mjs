if ( process.argv.length >= 3 ) {
  console.log("test");
} else {
  process.stderr.write("please argv")
  process.exit(1);
}

const args = process.argv.slice(2);
console.log(args);
