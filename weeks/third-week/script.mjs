const txt = ["txt", "txt"];
process.stdout.write(JSON.stringify(txt));

for (let i = 0; i < txt.length; i++) {
  const line = txt[i];
  process.stdout.write(line);
}
