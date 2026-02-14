function fn(a) {
  const str = a;
  return str;
};

function passive(fn, arg) {
  const str = fn(arg);
  const json = JSON.stringify(str);

  return json;
};

console.log(passive(fn, "aaa"));
