var inputtxt = document.querySelector("#input");
var btnRed = document.querySelector("#red");
var btnBlue = document.querySelector("#blue");
var btnGreen = document.querySelector("#green");
var outputtxt = document.querySelector("#output");

function redHandler() {
    var input = inputtxt.value;
    console.log(input);
    outputtxt.innerText = input;
    outputtxt.style.color = "RED"
}

function blueHandler() {
    var input = inputtxt.value;
    console.log(input);
    outputtxt.innerText = input;
    outputtxt.style.color = "BLUE"
}

function greenHandler() {
    var input = inputtxt.value;
    console.log(input);
    outputtxt.innerText = input;
    outputtxt.style.color = "GREEN"
}

btnRed.addEventListener("click",redHandler);
btnBlue.addEventListener("click",blueHandler);
btnGreen.addEventListener("click",greenHandler);
