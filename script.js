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
