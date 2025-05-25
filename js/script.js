
var allitems = document.querySelectorAll(".list li");
var content = document.getElementById("content");
var btn = document.getElementById("addtoCart");
var totalprice = 0;


allitems.forEach(function (item){
    
    item.onclick = function (){
        totalprice += parseInt(item.getAttribute("tata-price"));
        content.innerHTML += item.textContent + "<br>";
       
        if (content.innerHTML != "") {
            btn.style.display = "block";  
        }
    };
});


btn.onclick = function () {
    console.log(totalprice);
}