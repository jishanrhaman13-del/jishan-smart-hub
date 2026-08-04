// =======================
// JU MART LOGIN SYSTEM
// =======================


const sendOtp = document.getElementById("sendOtp");

const verifyOtp = document.getElementById("verifyOtp");

const otpBox = document.getElementById("otpBox");

const message = document.getElementById("message");



let generatedOtp;



// SEND OTP

if(sendOtp){

sendOtp.addEventListener("click",function(){


let mobile = document.getElementById("mobile").value;



if(mobile.length !== 10){

message.innerHTML="Please enter valid mobile number";

return;

}



generatedOtp = Math.floor(1000 + Math.random()*9000);



otpBox.style.display="block";


message.innerHTML="Your OTP is: " + generatedOtp;



});

}




// VERIFY OTP


if(verifyOtp){


verifyOtp.addEventListener("click",function(){


let userOtp = document.getElementById("otp").value;



if(userOtp == generatedOtp){


localStorage.setItem("userLogin","true");


message.innerHTML="Login Successful ✅";



setTimeout(()=>{

window.location.href="index.html";

},1000);



}

else{


message.innerHTML="Wrong OTP ❌";


}


});


}
