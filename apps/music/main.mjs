const cKey = {
  scale: ["c", "d", "e", "f", "g", "a", "b"],
  code: ["C", "Dm", "Em", "F", "G7", "Am", "Bmflat5"]
};

console.log(cKey);

for (let i = 0; i < 7; i++) {
  console.log(i + 1, ": ", cKey.scale[i]);
}
