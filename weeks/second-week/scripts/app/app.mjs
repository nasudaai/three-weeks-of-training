const args = process.argv.slice(2);
//console.log(args);

const obj = {};
const note = [];

for (let i = 0; i < args.length; i++) {
  const memo = args[i];
  note.push(memo);
}
console.log(note);

const key = args[0];
const value = args[1];
obj[key] = value;

const json = JSON.stringify(note);
process.stdout.write(json + "\n")

console.log(obj);
