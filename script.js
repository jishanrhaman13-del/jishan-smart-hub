// ===========================
// JU MART V1 - Part 1
// ===========================

// Search Button
const searchBtn = document.querySelector(".search button");
const searchInput = document.querySelector(".search input");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        const value = searchInput.value.trim();

        if (value === "") {
            alert("Please enter a product name.");
        } else {
            alert("Searching for: " + value);
        }
    });
}

// Wishlist
const wish = document.querySelector(".fa-heart");

if (wish) {
    wish.addEventListener("click", () => {
        alert("Wishlist feature coming soon ❤️");
    });
}

// Cart
const cart = document.querySelector(".fa-cart-shopping");

if (cart) {
    cart.addEventListener("click", () => {
        alert("Your cart is empty 🛒");
    });
}

// Login
const user = document.querySelector(".fa-user");

if (user) {
    user.addEventListener("click", () => {
        alert("Login system coming soon 👤");
    });
}

// Smooth Scroll
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

        let href = this.getAttribute("href");

        if (href && href.startsWith("#")) {

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
// ===========================
// JU MART V1 - Part 2
// Flash Sale Countdown
// ===========================

let hours = 12;
let minutes = 59;
let seconds = 59;

const timer = document.getElementById("countdown");

function updateTimer() {

    if (!timer) return;

    timer.innerHTML =
        `${String(hours).padStart(2,"0")}:` +
        `${String(minutes).padStart(2,"0")}:` +
        `${String(seconds).padStart(2,"0")}`;

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if (minutes < 0) {
        minutes = 59;
        hours--;
    }

    if (hours < 0) {
        hours = 12;
        minutes = 59;
        seconds = 59;
    }

}

setInterval(updateTimer,1000);


// ===========================
// Fade Animation
// ===========================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// ===========================
// Header Shadow on Scroll
// ===========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 8px 20px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});
// ================================
// JU MART - Live Search
// ================================

const searchInput = document.querySelector(".search input");

searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product){

        let name = product.innerText.toLowerCase();

        if(name.indexOf(value) > -1){

            product.style.display="block";

        }else{

            product.style.display="none";

        }

    });

});
// ===========================
// JU MART CART SYSTEM
// ===========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cartCount");

function updateCart(){

if(cartCount){

cartCount.innerHTML = cart.length;

}

}

updateCart();


document.querySelectorAll(".product-card button")
.forEach(button=>{

button.addEventListener("click",function(){

let product = this.parentElement;

let name = product.querySelector("h3").innerText;

let price = product.querySelector(".price").innerText;


cart.push({
name:name,
price:price
});


localStorage.setItem("cart",JSON.stringify(cart));


updateCart();


alert(name+" Added To Cart 🛒");


});

});
// ===========================
// JU MART WISHLIST SYSTEM
// ===========================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let wishCount = document.getElementById("wishCount");

function updateWishlist(){

if(wishCount){

wishCount.innerHTML = wishlist.length;

}

}

updateWishlist();


let wishIcon = document.getElementById("wishlistIcon");

if(wishIcon){

wishIcon.addEventListener("click",function(e){

e.preventDefault();

wishlist.push("Product");

localStorage.setItem("wishlist",JSON.stringify(wishlist));

updateWishlist();

alert("Added to Wishlist ❤️");

});

}
/* LOGIN POPUP */

.login-popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.6);
display:none;
align-items:center;
justify-content:center;
z-index:9999;
}

.login-box{
background:#162033;
padding:30px;
border-radius:20px;
width:350px;
text-align:center;
}

.login-box h2{
margin-bottom:20px;
color:#FFD700;
}

.login-box input{
width:100%;
padding:12px;
margin:10px 0;
border:none;
border-radius:10px;
}

.login-box button{
width:100%;
padding:12px;
background:#FFD700;
border:none;
border-radius:10px;
font-weight:bold;
cursor:pointer;
}

.close-login{
float:right;
font-size:28px;
cursor:pointer;
}
// LOGIN POPUP

const userIcon=document.querySelector(".fa-user");
const popup=document.getElementById("loginPopup");
const close=document.querySelector(".close-login");

if(userIcon){

userIcon.addEventListener("click",(e)=>{

e.preventDefault();

popup.style.display="flex";

});

}

if(close){

close.onclick=()=>{

popup.style.display="none";

};

}

window.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

};

document.getElementById("loginBtn").onclick=()=>{

alert("Login feature will be connected to database later.");

popup.style.display="none";

// SELLER POPUP FIX

const sellerButtons = document.querySelectorAll(".btn2, .seller .btn");
const sellerPopup = document.getElementById("sellerPopup");
const closeSeller = document.getElementById("closeSeller");

sellerButtons.forEach(btn => {
    btn.addEventListener("click", function(e){
        e.preventDefault();
        sellerPopup.style.display = "flex";
    });
});

closeSeller.addEventListener("click", function(){
    sellerPopup.style.display = "none";
});

window.addEventListener("click", function(e){
    if(e.target === sellerPopup){
        sellerPopup.style.display = "none";
    }
});
// Seller Popup Close Fix

let sellerPopup = document.getElementById("sellerPopup");
let closeSeller = document.getElementById("closeSeller");

if(closeSeller){
    closeSeller.onclick = function(){
        sellerPopup.style.display = "none";
    };
}
