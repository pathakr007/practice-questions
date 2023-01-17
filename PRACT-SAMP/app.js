var num1 = document.querySelector("#numOne");
var num2 = document.querySelector("#numTwo");
var result = document.querySelector("#result");
var btnResult = document.querySelector("#btnResult");

function sum (para1,para2)
{
     result = para1 + para2;
     return result;

}

function clickHandler() {
    var numberOne = parseInt(num1.value);
    var numberTwo = parseInt(num2.value);
    
        console.log ("the result is :" + btnResult.innerText = sum(numberOne,numberTwo));
}

btnResult.addEventListener("click",clickHandler);