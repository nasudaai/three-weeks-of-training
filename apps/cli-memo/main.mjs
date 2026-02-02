const args = process.argv.slice(2);
// "s" eq "stream" "f" eq "file" "c" eq "argv"

const inputModes = {
  c: "argv",
  f: "file",
  s: "stream"
};

const outPut = {
//
};

const mode = args[0];

console.log(args, mode);
