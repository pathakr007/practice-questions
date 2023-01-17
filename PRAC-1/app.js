var numOne = document.querySelector("#numOne");
var numTwo = document.querySelector("#numTwo");
var btnAdd = document.querySelector("#btnadd");
var btnSub = document.querySelector("#btnsub");
var btnMul = document.querySelector("#btnmul");
var btnDiv = document.querySelector("#btndiv");
var divOutput = document.querySelector("#output");


function add() {
    num1 = parseInt(numOne.value);
    num2 = parseInt(numTwo.value);
    result = num1+num2;
    console.log(result);
    divOutput.innerText = result;
}

function sub() {
    num1 = parseInt(numOne.value);
    num2 = parseInt(numTwo.value);
    result = num1-num2;
    console.log(result);
    divOutput.innerText = result;
}

function mul() {
    num1 = parseInt(numOne.value);
    num2 = parseInt(numTwo.value);
    result = num1*num2;
    console.log(result);
    divOutput.innerText = result;
}

function div() {
    num1 = parseInt(numOne.value);
    num2 = parseInt(numTwo.value);
    result = num1/num2;
    console.log(result);
    divOutput.innerText = result;
}

btnAdd.addEventListener("click",add);
btnSub.addEventListener("click",sub);
btnMul.addEventListener("click",mul);
btnDiv.addEventListener("click",div);

