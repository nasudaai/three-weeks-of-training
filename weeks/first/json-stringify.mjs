const args = process.argv.slice(2);
console.log(args);


const obj = { key: "value" };

const json = JSON.stringify(obj);
process.stdout.write(json + "\n");
