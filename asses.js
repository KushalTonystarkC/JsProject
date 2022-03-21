var div = document.getElementById("Div1");
var f1=function(){
    console.log("Booking Confirmed!!");
    button2.disabled=true;
    button3.disabled=true;
    button4.disabled=true;
    div.style.backgroundColor="green";
}

var f2=function(){
    console.log("Booking Cancelled!!");
    button1.disabled=true;
    button3.disabled=true;
    button4.disabled=true;
    div.style.backgroundColor="green";
}

var f3=function(){
    console.log("Booking Updated!!");
    button2.disabled=true;
    button1.disabled=true;
    button4.disabled=true;
    div.style.backgroundColor="green";
}

var f4=function(){
    console.log("Booking Pending!!");
    button2.disabled=true;
    button3.disabled=true;
    button1.disabled=true;
    div.style.backgroundColor="green";
}
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var button4=document.getElementById("button4");
button1.onclick=f1;
button2.onclick=f2;
button3.onclick=f3;
button4.onclick=f4;

button1.addEventListener("clicked for Exp.",f1);
button2.addEventListener("clicked for Exp.",f2);
button3.addEventListener("clicked for Exp.",f3);
button4.addEventListener("clicked for Exp.",f4);

