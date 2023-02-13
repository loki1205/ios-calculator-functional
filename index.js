const numbers = document.querySelectorAll(".numbers");
let num0=0;
let num1=0;
let result=0;
let operation=0;
function calculate(){
    let num2=Number(document.getElementById('digits').textContent);
        if (operation=='+')
        {
            result=num1+num2;
        }
        else if (operation=='-')
        {
            result=num1-num2;
        }
        else if (operation=='*')
        {
            result=num1*num2;
        }
        else if (operation=='/')
        {
            result=num1/num2;
        }
        num1=result;
}

for (let number of numbers)
{
    number.onclick = function() {
        document.getElementById("digits").append(number.textContent);
    }
}

document.getElementById("reset").onclick = function() {
    document.getElementById("digits").textContent = "";
    num1=0;
    num2=0;
    operation=0;
    result=0;
}

document.getElementById("delete").onclick = function () {
    let select = document.getElementById('digits');
    select.removeChild(select.lastChild);
}

document.getElementById("addition").onclick = function() {
    if (num1>0)
    {
        calculate();
    }
    else
    {
        num1 = Number(document.getElementById('digits').textContent);
    }
    operation = '+';
    document.getElementById('digits').textContent="";
}

document.getElementById("substraction").onclick = function() {
    if (num1>0)
    {
        calculate();
    }
    else
    {
        num1 = Number(document.getElementById('digits').textContent);
    }
    operation = '-';
    document.getElementById('digits').textContent="";
}

document.getElementById("division").onclick = function() {
    if (num1>0)
    {
        calculate();
    }
    else
    {
        num1 = Number(document.getElementById('digits').textContent);
    }
    operation = '/';
    document.getElementById('digits').textContent="";
}

document.getElementById("multiplication").onclick = function() {
    if (num1>0)
    {
        calculate();
    }
    else
    {
        num1 = Number(document.getElementById('digits').textContent);
    }
    operation = '*';
    document.getElementById('digits').textContent="";
}


document.getElementById("mode").onclick = function() {
    if (document.getElementById("mode").classList.contains("light"))
    {
        let changeNum = document.querySelectorAll(".numbers");
        for (changeElem of changeNum)
        {
            changeElem.classList.remove("light");
            document.getElementById("mode").classList.remove("light");
            document.getElementById("mode").classList.remove("light_2");
            document.getElementById("delete").classList.remove("light_2");
            document.getElementById("reset").classList.remove("light_2");
            document.getElementById("input-area").classList.remove("light");
            document.getElementById("digits").classList.remove("light-font");

        }
    }
    else
    {
        let changeNum = document.querySelectorAll(".numbers");
        for (changeElem of changeNum)
        {
            changeElem.classList.add("light");
            document.getElementById("mode").classList.add("light");
            document.getElementById("mode").classList.add("light_2");
            document.getElementById("delete").classList.add("light_2");
            document.getElementById("reset").classList.add("light_2");
            document.getElementById("input-area").classList.add("light");
            document.getElementById("digits").classList.add("light-font");
        }
    }
}

document.getElementById("equals").onclick = function  getResult(){
    calculate();
    if (Number.isInteger(result)) {
        document.getElementById('digits').textContent=result;}
    else {
        document.getElementById('digits').textContent=parseFloat(result).toFixed(1);
    }
    num1=0;
    num2=0;
    operation=0;
}