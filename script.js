// Flash Sale Countdown Timer

let hours = 12;
let minutes = 59;
let seconds = 59;

const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

setInterval(() => {

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

    h.textContent = String(hours).padStart(2, "0");
    m.textContent = String(minutes).padStart(2, "0");
    s.textContent = String(seconds).padStart(2, "0");

}, 1000);


// Search Box

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        let text = product.innerText.toLowerCase();

        if (text.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});


// Button Click Animation

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "✔ Added";

        setTimeout(() => {
            button.innerHTML = "Add to Cart";
        }, 1500);

    });

});


// Smooth Scroll

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
