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
function checkLogin() {
    var x = localStorage.getItem("usrnm", "null");
    if (x == null) {
        document.getElementById("loginbtn").innerHTML = "Login";
    } else {
        document.getElementById("loginpfp").style.display = "block";
    }
}

function findOutMore(product, savingsIndex) {
    // Unhide the find out more section
    document.getElementById("findOutMore" + savingsIndex).style.display = 'block';

    analytics.track("Savings", {
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null"),
        channel: "Web",
        product: product,
    });
}

function login(email) {
    localStorage.setItem("id", Math.floor(Math.random() * 101));
    localStorage.setItem("usrnm", email);
    document.getElementById("loginbtn").innerHTML = "Logged In: " + localStorage.getItem("usrnm");

    window.location = window.location;
}

function productsDropdown() {
    document.getElementById("productsDropdown").classList.toggle("show");
}

function loginDropdown() {
    if (localStorage.getItem("usrnm")) {
        // Logout
        localStorage.removeItem("usrnm");
        window.location = window.location;
    } else {
        // Show Login
        console.log("Show Login");
        document.getElementById("loginDropdown").classList.toggle("show");
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function loadDemo() {
    const navigationBar = `
    <div class="navbar">
        <a style="width: 20%; font-weight: bolder; font-size: 50px;" onclick="window.location.href = 'index.html';">FinCX</a>
        <div class="dropdown">
            <button style="font-weight: bolder;" class="dropbtn" onclick="productsDropdown()">Products</button>
            <div class="dropdown-content" id="productsDropdown">
                <a style="padding: 20px 32px 20px 32px">Mortgages</a>
                <a style="padding: 20px 32px 20px 32px" onclick="window.location.href = 'savings.html';">Savings</a>
                <a style="padding: 20px 32px 20px 32px">Credit Cards</a>
            </div>
        </div> 
        
        <a style="width: 20%; padding: 40px 0px 40px 0px;">Latest News</a>
        <a style="width: 20%; padding: 40px 0px 40px 0px;">Resources</a>
        <div onload="checkLogin()" class="dropdown">
            <button style="font-weight: bolder;" id="loginbtn" class="dropbtn" onclick="loginDropdown()">Login</button>
            <div class="dropdown-content" id="loginDropdown"></div>
        </div>
    </div>`;
    document.getElementsByTagName("body")[0].innerHTML = navigationBar + document.getElementsByTagName("body")[0].innerHTML;

    let users = [
        ["Tony", "tony@joulica.io"],
        ["Alex", "alex@joulica.io"],
        ["John", "john@joulica.io"],
        ["Joe", "joe@joulica.io"],
        ["Declan", "declan@joulica.io"],
        ["Kimaya", "kimaya@joulica.io"]
    ];

    // Check if user is logged in
    if (!localStorage.getItem("usrnm")) {
        // Add users to login dropdown
        for (let i = 0; i < users.length; i++) {
            document.getElementById("loginDropdown").innerHTML += `<a style="padding: 20px 32px 20px 32px" onclick="login('${users[i][1]}')">${users[i][0]}</a>`;
        }
    } else {
        document.getElementById("loginbtn").innerHTML = "Logout of " + localStorage.getItem("usrnm");
    }
}

function addSavingsToProductPage() {
    let savings = [
        ["Specialized Education Savings", "students.jpg"],
        ["SimplySavings", "family.jpg"],
        ["Junior Saver", "backpack.jpg"],
    ];
    let desc = [
        ["Our specialized Education Savings accounts are designed for families as they get ready for college expenses. Suitable for both regular and lump deposits"],
        ["Our SimplySavings is designed to meet your regular savings needs. Save as much as you want monthly and adjust according to your needs."],
        ["Our Junior Saver account is designed for those wishing to start their banking journey. Save according to your needs."]
    ];
    let features = [
        ["<li>Save as much as you wish</li><li>Direct Debit Option</li><li>Flexible Access</li>"],
        ["<li>Save Monthly</li><li>Adjust amount regularly</li><li>Direct Debit Options</li>"],
        ["<li>Save as frequently as you wish</li><li>Mobile access</li><li>Instant access to funds</li>"],
    ];
    let benefits = [
        ["<li>Attractive interest rates</li><li>Online access</li>"],
        ["<li>Instant access to funds</li><li>Attractive Interest Rates</li>"],
        ["<li>Attractive Interest rates</li><li>Discounts from a range of stores</li>"],
    ];
    for (let i = 0; i < savings.length; i++) {
        let savingsHTML = `
        <div class="info">
            <div class="inner">
                <center>
                    <h1 style="margin: 0px;">${savings[i][0]}</h1>
                    <img src="${savings[i][1]}" class="image" width="100%" />
                </center>
            </div>

            <div class="inner">
                <p>${desc[i]}</p>
                <br />
                <h2>Features:</h2>
                <ul>${features[i]}</ul>
                <h2>Benefits</h2>
                <ul>${benefits[i]}</ul>
                <div id="findOutMore${i}" hidden>
                <br><br>
                    <p><a href="tel:+19016605018">Call us on +19016605018, </a> and one of our friendly agents will help you with your application.</p>
                </div>

                <div id="buttons">
                    <center>
                        <button style="background-color: blue; border-color: rgba(0,0,0,0)"class="applyOnline">Apply Online</button>
                        <br /><br />
                        <button onclick="findOutMore('${savings[i][0]}', ${i})" class="findOutMore"style="background-color: grey; border-color: black">Find Out More</button>
                        <br /><br /><br /><br />
                    </center>
                </div>
            </div>
        </div>`;

        document.getElementsByTagName("body")[0].innerHTML += savingsHTML;
    }
}
