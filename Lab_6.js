//By: Ariel Rodriguez
//Javascript for Lab_6

//var action =input.getElementById("action");
//aside.appendChild('things');
//alert (action);

//var blue = aside.querySelectorAll("#inventory");
//console.log(blue);
var blue = document.querySelectorAll(".inventory");
console.log(blue);
console.log(blue.__proto__);
function addpara(pfft) {
var newPara = document.createElement("newPara");
var newText = document.createTextNode(pfft);
newPara.appendChild(newText);
document.body.appendChild(newPara);
}
addpara('Where is this?');