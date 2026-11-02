// ex7.js
function loadUser(callback) {
  setTimeout(() => callback("Dana"), 30);
}

function loadOrders(callback) {
  setTimeout(() => callback(3), 10);
}

function run() {
  let user;
  let orders;

  loadUser((name) => {
    user = name;
  });

  loadOrders((count) => {
    orders = count;
  });
  setTimeout(()=>{
  console.log("User: " + user);
  console.log("Orders: " + orders);},80)
  
}

if (typeof module !== "undefined") module.exports = { run };
