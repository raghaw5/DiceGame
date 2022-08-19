var p1=prompt("Enter your name");
document.querySelectorAll("p")[0].innerHTML=p1;
var p2=prompt("Enter your name");
document.querySelectorAll("p")[1].innerHTML=p2;

document.querySelector("button").addEventListener("click",myfunction);
function myfunction(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "img" + randomNumber1 + ".jpg";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "img" + randomNumber2 + ".jpg";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML=p1+" Win!!!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML=p2+" Win!!!";

}
else{
    document.querySelector("h1").innerHTML="Match tie";
}
}
