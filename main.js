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

function findOutMore(product, carIndex) {
    // Unhide the find out more section
    document.getElementById("findOutMore" + carIndex).style.display = 'block';

    analytics.track("Model", {
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
                <a style="padding: 20px 32px 20px 32px" onclick="window.location.href = 'products.html';">Car Models</a>
                <a style="padding: 20px 32px 20px 32px">Finances Options</a>
                <a style="padding: 20px 32px 20px 32px">Insurance</a>
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
        ["Declan", "declan@joulica.io"]
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

function addCarsToProductPage() {
    let cars = [
        ["Model 3", "img3.jpg"],
        ["Model X", "img4.jpg"],
        ["Model Y", "img5.jpg"],
        ["Model C", "cybertruck.jpg"],
        ["Model P", "plaid.jpg"]
    ];

    for (let i = 0; i < cars.length; i++) {
        let carHTML = `
        <div id="outer">
            <div class="inner">
                <h1 style="margin: 0px;">${cars[i][0]}</h1>
                <img src="${cars[i][1]}" alt="img5" />
            </div>

            <div class="inner">
                <p>Our competitive interest rates ensure that you get an affordable financing solution for your new ${cars[i][0]}.</p>
                <br />
                <h2>Features:</h2>
                <ul>
                    <li>Quick Approval</li>
                    <li>Trade-In Options</li>
                    <li>Exclusive Tesla Benefits</li>
                </ul>
                <h2>Benefits</h2>
                <ul>
                    <li>Vehicle Protection Plans</li>
                    <li>Expert Guidance</li>
                </ul>

                <div id="findOutMore${i}" hidden>
                    <p><a href="tel:+19016605018">Call us on +19016605018, </a> and one of our friendly agents will help you with your application.</p>
                </div>

                <div id="buttons">
                    <button class="applyOnline">Apply Online</button>
                    <br />
                    <br />
                    <button onclick="findOutMore('${cars[i][0]}', ${i})" class="findOutMore">Find Out More</button>
                </div>
            </div>
        </div>`;

        document.getElementsByTagName("body")[0].innerHTML += carHTML;
    }
}
