import { fn } from './func.mjs';

const args = process.argv.slice(2);
const mode = args[0];

if (mode !== "argv" && mode !== "std") {
  console.log("usage <argv> or <std>");
  process.exit(1);
}

function main() {
  fn();
  process.stdout.write("Test");
};

main();
