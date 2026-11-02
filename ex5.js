
function run() {
  setTimeout(() => {
    setMessage("Ready!");
    addLine("Ready!");
  }, 30);

  setTimeout(() => {
    setMessage("Almost there...");
    addLine("Almost there...");
  }, 10);
  
    setMessage("Loading...");
    addLine("Loading...");
 
    
}

if (typeof module !== "undefined") module.exports = { run };
