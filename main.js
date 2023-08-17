var id;
var usrnm;
function homeLoad() {
  analytics.track("Homepage", {
  userId: id,
  username: usrnm,
  channel: "Web",
  });
}
/*function submitIdentify() {
  const nameVal = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const planVal = document.getElementById('plan').value;
  const actions = document.getElementById("actions").value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  analytics.identify({
    firstName: firstName,
    lastName: lastName,
    email: email
  });
  }
*/
function Home() {
  window.location.href = "index.html";
}
function Products() {
  window.location.href = "products.html";
  analytics.track("Products", {
    sessionId: id,
    username: usrnm,
    channel: "Web",
    });
}
function Model3() {
  analytics.track("Model", {
    sessionId: id,
    username: usrnm,
    channel: "Web",
    product: "Model 3",
    });
}
  function ModelX() {
  analytics.track("Model", {
    sessionId: id,
    username: usrnm,
    channel: "Web",
    product: "Model X",
    });
}
function ModelY() {
  analytics.track("Model", {
    sessionId: id,
    username: usrnm,
    channel: "Web",
    product: "Model Y",
    });
}
function ModelC() {
  analytics.track("Model", {
    sessionId: id,
    username: usrnm,
    channel: "Web",
    product: "Model C",
    });
}
function ModelPlaid() {
  analytics.track("Model", {
    sessionId: id,
    username: usrnm,
    channel: "Web",
    product: "Model P",
    });
}
function loginTony(){
  id = Math.floor(Math.random() * 101);
  usrnm = "tony@joulica.io"
}
function loginAlex(){
  id = Math.floor(Math.random() * 101);
  usrnm = "alex@joulica.io"
}
function loginJohn(){
  id = Math.floor(Math.random() * 101);
  usrnm = "john@joulica.io"
}
function loginJoe(){
  id = Math.floor(Math.random() * 101);
  usrnm = "joe@joulica.io"
}
function productsDropdown() {
  document.getElementById("productsDropdown").classList.toggle("show");
}
function loginDropdown() {
  document.getElementById("loginDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
