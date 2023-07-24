var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var cursor1 = document.getElementsByClassName("cursor");
var cursor2 = document.getElementsByClassName("cursor2");

btn2.onclick = function (){
    cursor2.style.display = "block";
    cursor1.style.display = "none";
}