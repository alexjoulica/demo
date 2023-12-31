var sessionID = sessionStorage.getItem("sessionID");
function generateSessionID() {
    sessionID = new String();

    for (let i = 0; i < 8; i++) {
        let hex = Math.floor(Math.random() * 256).toString(16);
        sessionID += (hex.length == 1 ? '0' : '1') + hex;
    }

    sessionStorage.setItem("sessionID", sessionID);
}
if (!sessionID) generateSessionID();

/* Load the Analytics */
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="SDfgj9GHaQwyoSSDOzvT8G1itoJSbd74";;analytics.SNIPPET_VERSION="4.16.1";
    analytics.load("SDfgj9GHaQwyoSSDOzvT8G1itoJSbd74");
    analytics.page({
        sessionId: sessionID,
        username: localStorage.getItem("username")
    });
}}();
/* Load the Analytics */

function checkLogin() {
    if (localStorage.getItem("username") == null) {
        document.getElementById("loginbtn").innerHTML = "Login";
    } else {
        document.getElementById("loginpfp").style.display = "block";
    }
}

function findOutMore(product, savingsIndex) {
    // Unhide the find out more section
    document.getElementById("findOutMore" + savingsIndex).style.display = "block";
    let findOutMore = document.getElementById("findOutMore" + savingsIndex);
    findOutMore.scrollIntoView({ behavior: "smooth", block: "end" });

    if (localStorage.getItem("username") != null) {
        analytics.track("Savings", {
            event: "Product",
            // channel: "Web",
            product: product,

            sessionId: sessionID,
            username: localStorage.getItem("username"),
        });
    }
}

function login(name, email) {
    // Reload session ID
    generateSessionID();

    localStorage.setItem("name", name);
    localStorage.setItem("username", email);

    analytics.track("Savings", {
        event: "Homepage",
        channel: "Web",

        sessionId: sessionID,
        username: localStorage.getItem("username"),
    });

    // Reload the page
    window.location = window.location;
}

function productsDropdown() {
    document.getElementById("productsDropdown").classList.toggle("show");
}

function loginDropdown() {
    if (localStorage.getItem("username")) {
        // Logout
        localStorage.removeItem("username");

        // Reload session ID
        sessionStorage.removeItem("sessionID");

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
        
        <a style="width: 20%; padding: 41px 0px 40px 0px;">Latest News</a>
        <a style="width: 20%; padding: 41px 0px 40px 0px;">Resources</a>
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
    if (!localStorage.getItem("username")) {
        // Add users to login dropdown
        for (let i = 0; i < users.length; i++) {
            document.getElementById("loginDropdown").innerHTML += `<a style="padding: 20px 32px 20px 32px" onclick="login('${users[i][0]}', '${users[i][1]}')">${users[i][0]}</a>`;
        }
    } else {
        document.getElementById("loginbtn").innerHTML = "Logout of " + localStorage.getItem("username");
    }

    /* Load the Chat only if the user is logged in */
    if (localStorage["username"]) {
        (function(w, d, x, id){
            s=d.createElement('script');
            s.src='https://dg9yx063wiiht.cloudfront.net/amazon-connect-chat-interface-client.js';
            s.async=1;
            s.id=id;
            d.getElementsByTagName('head')[0].appendChild(s);
            w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
        })(window, document, 'amazon_connect', 'e365379e-7723-4c5c-9b9b-2109e7c8c9ac');
        amazon_connect('styles', { openChat: { color: '#ffffff', backgroundColor: '#0080ff'}, closeChat: { color: '#ffffff', backgroundColor: '#0080ff'} });
        amazon_connect('snippetId', 'QVFJREFIamdsRVl4aTRZOWtaSkdZSFNPQ0JZNE53UGdNdWFZUGJMdGZFWEdLazhGTndHWlhrMVpWTDRaVVpBdWRzTHdUby9sQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNVmhXcFpmeWtiYWErUStrc0FnRVFnQ3ZsaTdhSU85THZ2UFNpWE8rbStBZzlOMGJnR1A3NEtoclNiTllPQzNUZ1BkNDJZSnNRYlI1S2xsaGI6OjlwNEQwNkM1eXMzRER3NmlrSkJPck1IQmxucFVvTWJUeGNiSStwUW45MThkUUZiSGRnaEFZVFZoSXNnenZHbmFPOW43Q3ZPSDNmZWtEa0Q0cTZwcVRPUWZTMWJGci9RSEUwRWw5WTEvWE54K05ndEw5OVRWUHBmNUhkWU9malk4ZGp3dkhieHdXME5hVEpMSk5Za3BOdnR4MG9MZFZ6ST0=');
        amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);
        amazon_connect("customerDisplayName", function(callback) {
            const displayName = localStorage.getItem("name", "null");
            callback(displayName);
        });
        let utcStr = Math.floor(Date.now() / 1000);
        let exp = utcStr + 600;
        let payload = {
            "sub": "e365379e-7723-4c5c-9b9b-2109e7c8c9ac",
            "iat": utcStr,
            "exp": exp,
            "attributes": {
                "name": name,
                "email": localStorage.getItem("username")
            },
            "properties": {
                "sessionID": sessionID,
            }
        };
        let header = {
            "typ": "JWT",
            "alg": "HS256"
        };
        let token = KJUR.jws.JWS.sign("HS256", JSON.stringify(header), JSON.stringify(payload), 'DR/pwpuOtHT+z0D5UQe0KsJ8JDStihUHHaDgeS4Yi9U=' );
        console.log(token);
        amazon_connect('authenticate', function(callback) {
            callback(token)
        });
    }
    /* Load the Chat */
}

function addSavingsToProductPage() {
    let savings = [
        ["Education", "students.jpg"],
        ["SimplySavings", "family.jpg"],
        ["Junior Saver", "backpack.jpg"],
    ];
    let desc = [
        ["Our Education Saver accounts are designed for families as they get ready for college expenses. Suitable for both regular and lump deposits"],
        ["Our SimplySavings is designed to meet your regular savings needs. Save as much as you want monthly and adjust according to your needs."],
        ["Our Junior Saver account is designed for those wishing to start their banking journey. Save according to your needs."]
    ];
    let features = [
        ["<li>Save as much as you wish</li><br><li>Direct Debit Option</li><br><li>Flexible Access</li>"],
        ["<li>Save Monthly</li><br><li>Adjust amount regularly</li><br><li>Direct Debit Options</li>"],
        ["<li>Save as frequently as you wish</li><br><li>Mobile access</li><br><li>Instant access to funds</li>"],
    ];
    let benefits = [
        ["<li>Attractive interest rates</li><br><li>Online access</li>"],
        ["<li>Instant access to funds</li><br><li>Attractive Interest Rates</li>"],
        ["<li>Attractive Interest rates</li><br><li>Discounts from a range of stores</li>"],
    ];
    let dividerdisplay = [
        ["block"],
        ["block"],
        ["none"],
    ];
    let dividertext = [
        ["<h1>Cybersecurity Awareness</h1><br><p1>Our cybersecurity ensures the safety of your everyday banking so you can be confident managing your accounts and payments.</p1>"],
        ["<h1>Register for Online Banking</h1><br><p1>Get active in minutes.</p1>"],
        [],
    ];
    let dividerlink = [
        ['<a style="bottom: 24px; position: relative; right: 0; font-size: 20px; float: right; font-weight: bolder;">Visit Cybersecurity Zone <span>&#8594;</span></a>'],
        ['<a style="bottom: 24px; position: relative; right: 0; font-size: 20px; float: right; font-weight: bolder;">Register Now <span>&#8594;</span></a>'],
        [],
    ];
    let findOutMoreText = [
        ["With the Education Saver Account from FinCX, you set your monthly savings amount and we do the rest. You choose the amount you want to save each month (from €1 to €1,000).  Earn 1.00% Gross / AER (variable) interest rate on balances up to €50,000.99. Earn 0.01% Gross / AER (variable) interest rate on the entire balance (including interest) if your balance exceeds €50,000.99.<br><br>You’ll receive your interest, minus Deposit Interest Retention Tax (DIRT), on the first working day after 20th November each year. A variable rate means that your interest may change from time to time. Annual Equivalent Rate (AER) illustrates what the interest would be if interest was paid and compounded each year. Our AER calculation assumes that the account is held for a year and that the interest rate remains constant."],
        ["Apply online in minutes and start your savings habit. Save monthly by Direct Debit from large to small amounts. Minimum €5 – Maximum €2,500. Get instant access to your money in any FinCX branch. Available to 16 years of age and over. Can only be funded from one personal current account. Get our best fixed savings rate 2.00% AER (Annual Equivalent Rate), for 12 months, (Interest is subject to Deposit Interest Retention Tax (DIRT) at the prevailing rate). Receive a €100 refund on your home or car insurance policy purchased or renewed with FinCX."],
        ["If you are a Student Saver between the ages of 12 – 17 inclusive, you can open a Junior Saver Account. If you are under 16 years old, we will need to make sure that your Parent/Guardian is happy for you to start saving with us. This account is only available as a sole account in your name. You can save as little or as much as you like, there is no minimum or maximum limit. You can save an amount that suits you monthly or just top up your balance as you choose. You have the flexibility to withdraw any amount, any time.<br><br> To reward your savings, we will give you a great interest rate on balances up to €1,000. All amounts above €1,000 will earn a lower rate of interest. Interest is variable, calculated daily and paid into your account in April and October. When you reach the age of 19, your account will automatically change to a suitable demand deposit account. We will give two months notice before this change is made We don't charge maintenance or transaction fees but there may be other service charges. For details see \"A Guide to Fees and Charges for Personal Accounts\"."],
    ];
    for (let i = 0; i < savings.length; i++) {
        let savingsHTML = `
        <div class="info">
            <div style="width: auto" class="inner">
                    <h1 style="padding: 10px 0px 30px 40px; margin: 0px; text-align: left; font-size: 22px;">${savings[i][0]}</h1>
                    <img src="${savings[i][1]}" class="image">             
            </div>
            <div style="position: relative; padding: 6px 6px 6px 18px; font-size 15px;"class="inner">
                <br><br><br>
                <p style="width: 100%;">${desc[i]}</p>
                <br />
                <div style="float: left;">
                <h2>Features:</h2>
                <ul>${features[i]}</ul>
                </div>
                <div style="float: left; position: relative; left: 10%">
                <h2>Benefits</h2>
                <ul>${benefits[i]}</ul>
                </div>
                <div id="buttons">
                <center>
                    <button class="applyOnline">Apply Online</button>
                    <br /><br />
                    <button onclick="findOutMore('${savings[i][0]}', ${i})" class="findOutMore">Find Out More</button>
                    <br /><br /><br /><br />
                </center>
            </div>
            </div>
            <div style="margin: 0px 45px 0px 45px; padding: 10px 0 20px 0;" id="findOutMore${i}" hidden>
            <p style="font-size: 22px; line-height: 1.5">${findOutMoreText[i]}</p>
            </div>
            <div style="display: ${dividerdisplay[i]}"class="divider">
            ${dividertext[i]}
            ${dividerlink[i]}
            </div>
        </div>`;

        document.getElementsByTagName("body")[0].innerHTML += savingsHTML;
    }
}
