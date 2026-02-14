function fn(){
  console.log("call")
};

function call(callback) {
  callback();
};


call(fn);
