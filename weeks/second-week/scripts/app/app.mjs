const args = process.argv.slice(2);
//console.log(args);
//console.log(args[0]);

//early return
if (args[0] !== "memo" && args[0] !== "note") { //if (!["memo", "note"].includes(value)) {
  
  process.stdout.write("usage <memo> or <note> <content>...")
  process.exit(1);
}

if (args[0] === "memo") {
  process.stdout.write("append!\n");
} else if (args[0] === "note") {
  process.stdout.write("create note!\n");
}

const obj = {};
const note = [];

//create note
for (let i = 0; i < args.length; i++) {
  const memo = args[i];
  note.push(memo);
}
console.log(note);

//create object
const key = args[0];
const value = args[1];
obj[key] = value;

const json = JSON.stringify(note);
process.stdout.write(json + "\n")

console.log(obj);
