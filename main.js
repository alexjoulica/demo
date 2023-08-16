var id;
var usrnm;
function homeLoad() {
  analytics.track("Homepage", {
  userId: id,
  username: usrnm,
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
    userId: id,
    username: usrnm,
    });
}
function Model3() {
  analytics.track("Model 3", {
    userId: id,
    username: usrnm,
    });
}
function ModelX() {
  analytics.track("Model X", {
    userId: id,
    username: usrnm,
    });
}
function ModelY() {
  analytics.track("Model Y", {
    userId: id,
    username: usrnm,
    });
}
function ModelC() {
  analytics.track("Model C  ", {
    userId: id,
    username: usrnm,
    });
}
function ModelPlaid() {
  analytics.track("Model Plaid", {
    userId: id,
    username: usrnm,
    });
}
function loginTony(){
  id = "001";
  usrnm = "tony@joulica.io"
}
function loginAlex(){
  id = "002";
  usrnm = "alex@joulica.io"
}
function loginJohn(){
  id = "003";
  usrnm = "john@joulica.io"
}
function loginJoe(){
  id = "004";
  usrnm = "joe@joulica.io"
}
/*
function login() {
  var label = document.getElementById("labellogIn")
  var loginlabel = document.getElementById('logIn');
  if(loginlabel.style.display === "none"){
    label.style.width = "10%";
    label.innerHTML = "Log In";  
    loginlabel.style.display = "block";
  }
  else{
    label.style.width = "20%";
    label.innerHTML = "Logged In";  
    loginlabel.style.display = "none";
  }
  var submitbtn = document.getElementById('loginsubmit');
  if(submitbtn.style.display === "none"){
    submitbtn.style.display = "block";
  }
  else{
    submitbtn.style.display = "none";
  }
}
*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function productsDropdown() {
  document.getElementById("productsDropdown").classList.toggle("show");
}
function loginDropdown() {
  document.getElementById("loginDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
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