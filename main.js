function submitBtn1() {
    window.location.href = "index1.html";
    analytics.track("Visited Products", {
      userId: "011of0012",
      name: "Anonymous User",
      });
}
function submitBtn2() {
    window.location.href = "index2.html";
}
function submitBtn3() {
    window.location.href = "index3.html";    
}
function submitBtn4() {
    window.location.href = "index4.html";
}
function submitBtn5() {
    window.location.href = "index5.html";   
}
function homeLoad() {
  analytics.track("Loaded Homepage", {
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
function pageReload() {
    window.location.href = "index.html";
}
