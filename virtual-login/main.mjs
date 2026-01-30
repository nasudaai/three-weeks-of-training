let loggedIn = false;

console.log("log in? (yes/no)");

process.stdin.on("data", (chunk) => {
  const input = chunk.toString().trim();

  if (loggedIn === true) {
    console.log(">>>")
    process.exit(0);
  }
  
  if (input === "yes") {
    loggedIn = true;
    console.log("log in!");
//    process.exit(0);
    console.log("what will you do?")

  } else if (input === "no") {
    console.log("cancel");
    process.exit(0);
  } else { 
    console.error("usage: yes | no");
    process.exit(1);
  }
});
