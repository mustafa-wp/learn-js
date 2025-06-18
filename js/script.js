
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


// let markup = `
//     <div>
//         <h1>total price</h1>
//         <button>buy</button>
//         <button>cancel</button>
//     </div>
// `;
// document.write(markup);

// function loadData() {
//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function () {
//     console.log(JSON.parse(this.responseText));

//         if (this.readyState == 4 && this.status == 200) {
//             var data = JSON.parse(this.responseText);
//         }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
//     xhttp.send();
// }
// loadData();



//use Object
// var car = {
//     name: "bmw",
//     price: 100000,
//     color: "red"
// }

// console.log(car);

// var book = new Object();
// book.name = "javascript";
// book.price = 100;
// book.author = "ali";

// console.log(book);

document.title = "car.name";


var heading = document.getElementById("demo");
heading.textContent = "tjgjgiuyri";
heading.style.fontSize = "80px";
heading.style.color = "red";

var span1 = document.getElementsByClassName("span1");
span1.style.opacity = 1;
