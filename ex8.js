// ex8.js
function run() {
  let time=0
  const steps = ["Step 1", "Step 2", "Step 3"];

  for (let i = 0; i < steps.length; i++) {
    setTimeout(() => {
      setMessage(steps[i]);
      addLine(steps[i]);
    }, time+=10);
  }
  setTimeout(()=>{
     setMessage("Done!");
     addLine("Done!");
  },40)

}

if (typeof module !== "undefined") module.exports = { run };
