var id;
var usrnm;

var sessionId = sessionStorage.getItem("sessionId");
if (sessionId == null) {
    sessionId = Math.floor(Math.random() * 100000);
    sessionStorage.setItem("sessionId", sessionId);
}

/* Load the Analytics */
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="SDfgj9GHaQwyoSSDOzvT8G1itoJSbd74";;analytics.SNIPPET_VERSION="4.16.1";
    analytics.load("SDfgj9GHaQwyoSSDOzvT8G1itoJSbd74");
    analytics.page({
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null")
    });
}}();
/* Load the Analytics */

function homeLoad() {
    analytics.track("Homepage", {
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null"),
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
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null"),
        channel: "Web",
    });
}
function Model3() {
    analytics.track("Model", {
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null"),
        channel: "Web",
        product: "Model 3",
    });
}
function ModelX() {
    analytics.track("Model", {
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null"),
        channel: "Web",
        product: "Model X",
    });
}
function ModelY() {
    analytics.track("Model", {
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null"),
        channel: "Web",
        product: "Model Y",
    });
}
function ModelC() {
    analytics.track("Model", {
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null"),
        channel: "Web",
        product: "Model C",
    });
}
function ModelPlaid() {
    analytics.track("Model", {
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null"),
        channel: "Web",
        product: "Model P",
    });
}
function loginTony(){
    localStorage.setItem("id", Math.floor(Math.random() * 101));
    localStorage.setItem("usrnm", "tony@joulica.io");
}
function loginAlex(){
    localStorage.setItem("id", Math.floor(Math.random() * 101));
    localStorage.setItem("usrnm", "alex@joulica.io");
}
function loginJohn(){
    localStorage.setItem("id", Math.floor(Math.random() * 101));
    localStorage.setItem("usrnm", "john@joulica.io");
}
function loginJoe(){
    localStorage.setItem("id", Math.floor(Math.random() * 101));
    localStorage.setItem("usrnm", "joe@joulica.io");
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
