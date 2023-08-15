function homeLoad() {
  analytics.track("Homepage", {
  userId: "011of0012",
  name: "Anonymous User",
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
    userId: "011of0012",
    username: "Alex Wright",
    });
}
function Model3() {
  analytics.track("Model 3", {
    userId: "011of0012",
    username: "Alex Wright",
    });
}
function ModelX() {
  analytics.track("Model X", {
    userId: "011of0012",
    username: "Alex Wright",
    });
}
function ModelY() {
  analytics.track("Model Y", {
    userId: "011of0012",
    username: "Alex Wright",
    });
}