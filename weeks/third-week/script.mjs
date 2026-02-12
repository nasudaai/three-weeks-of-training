const txt = ["txt", "txt"];
process.stdout.write(JSON.stringify(txt));

for (let i = 0; i < txt.length; i++) {
  const line = txt[i];
  process.stdout.write(line);
}

function createLines() {
  const lines = [];
  for (let i = 0; i < txt.length; i++) {
    lines.push(txt[i]);
    lines.push("\n")
    process.stdout.write(lines[i])
  }
}

createLines();
