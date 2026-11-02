// ex4.js
function run() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
    setTimeout(() => console.log("3"), 1000);
  }, 0);

  setTimeout(() => console.log("4"), 2000);

  setTimeout(() => console.log("5"), 3000);
}

if (typeof module !== "undefined") module.exports = { run };
