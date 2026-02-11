const args = process.argv.slice(2);

// mode create or key&value >> file

//takes the value as well `node app.js key=value key2=value2`

const obj = {};

for (let i = 0; i < args.length; i++) {
  
  let key = args[i];

  obj[key] = "";

  console.log(obj);
}

console.log(obj);
