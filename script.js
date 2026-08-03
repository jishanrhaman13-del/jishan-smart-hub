// Jishan Mart

document.addEventListener("DOMContentLoaded", () => {
    console.log("Jishan Mart Loaded Successfully 🚀");
});
console.log("Premium Header Loaded");
console.log("Categories Section Loaded");
console.log("Featured Products Loaded");
let h=12,m=59,s=59;

setInterval(()=>{

if(s>0){
s--;
}else{
s=59;

if(m>0){
m--;
}else{
m=59;

if(h>0){
h--;
}
}
}

document.getElementById("hours").textContent=String(h).padStart(2,"0");
document.getElementById("minutes").textContent=String(m).padStart(2,"0");
document.getElementById("seconds").textContent=String(s).padStart(2,"0");

},1000);
console.log("Brands & Newsletter Loaded");
