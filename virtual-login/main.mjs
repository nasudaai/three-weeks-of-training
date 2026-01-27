console.log("log in?");

process.stdin.on("data", (chunk) => {
  if (chunk.toString().trim() === "yes") {
    console.log("log in!");
    process.exit(0);
  } else {
    console.error("usage: yes");
  }
});
