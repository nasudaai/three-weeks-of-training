const args = process.argv.slice(2);


const key = args[0];
const obj = {
  [key]: ""
};

obj[key] = "value";
console.log(obj);
