const menuIcon=document.getElementById("menu-icon");
const menuList=document.getElementById("menu-list");

menuIcon.addEventListener("click", () =>{
    menuList.classList.toggle("hidden");
}) 

var counter=1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if (counter>4){
        counter=1
    }
},5000);