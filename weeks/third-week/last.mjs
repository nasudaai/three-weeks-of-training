function fn(str){
  console.log(str);
};

function call(callback, str) {
  callback(str);
};


call(fn, "string");
