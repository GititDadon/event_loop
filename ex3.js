function run() {
  for (var i = 0; i < 3; i++) {
    printNumber(i)
  }
}

function printNumber(num) {
       setTimeout(()=>{console.log(num)}, 0);

}

if (typeof module !== "undefined") module.exports = { run };
