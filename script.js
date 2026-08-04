// =======================
// JU MART APP JAVASCRIPT
// =======================


// CART SYSTEM

let cart = [];

const cartButtons = document.querySelectorAll(".product-card button");


cartButtons.forEach(function(button){

button.addEventListener("click",function(){

let product = this.parentElement;

let name = product.querySelector("h3").innerText;

let price = product.querySelector("p").innerText;


cart.push({
name:name,
price:price
});


alert(name + " Added To Cart 🛒");


console.log(cart);


});


});




// SEARCH SYSTEM


const searchInput = document.querySelector(".search input");


if(searchInput){


searchInput.addEventListener("keyup",function(){


let value = this.value.toLowerCase();


document.querySelectorAll(".product-card").forEach(function(card){


let productName = card.querySelector("h3").innerText.toLowerCase();


if(productName.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}


});


});


}





// SELLER BUTTON


const sellerBtn = document.querySelector(".seller-btn");


if(sellerBtn){


sellerBtn.addEventListener("click",function(e){

e.preventDefault();


alert("Seller Registration Coming Soon 🏪");


});


}
