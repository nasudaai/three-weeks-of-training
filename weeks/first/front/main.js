console.log("test");

const p = document.getElementById("p");
console.log(p);

fetch("/txt")
  .then(res => res.text())
  .then(text => {
    console.log(text)
  })
