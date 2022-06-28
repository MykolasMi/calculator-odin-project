const display = document.getElementById('display');
const btnAC = document.getElementById('clearAll');
const btnDivide = document.getElementById('division');
const btn7 = document.getElementById('seven');
const btn8 = document.getElementById('eight');
const btn9 = document.getElementById('nine');
const btnMultiply = document.getElementById('multiplication');
const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');
const btnSubstract = document.getElementById('substraction');
const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btnAdd = document.getElementById('addition');
const btn0 = document.getElementById('zero');
const btnDot = document.getElementById('dot');
const btnC = document.getElementById('clear');
const btnEqual = document.getElementById('equality');

let equasion = "";
let displayValue = "";
const equasionArray = [];


btnAC.addEventListener('click', function(e) {
    populateDisplay("");
})
btnDivide.addEventListener('click', function(e) {
    populateDisplay("/");
})
btn7.addEventListener('click', function(e) {
    populateDisplay("7");
})
btn8.addEventListener('click', function(e) {
    populateDisplay("8");
})
btn9.addEventListener('click', function(e) {
    populateDisplay("9");
})
btnMultiply.addEventListener('click', function(e) {
    populateDisplay("*");
})
btn4.addEventListener('click', function(e) {
    populateDisplay("4");
})
btn5.addEventListener('click', function(e) {
    populateDisplay("5");
})
btn6.addEventListener('click', function(e) {
    populateDisplay("6");
})
btnSubstract.addEventListener('click', function(e) {
    populateDisplay("-");
})
btn1.addEventListener('click', function(e) {
    populateDisplay("1");
})
btn2.addEventListener('click', function(e) {
    populateDisplay("2");
})
btn3.addEventListener('click', function(e) {
    populateDisplay("3");
})
btnAdd.addEventListener('click', function(e) {
    populateDisplay("+");
})
btn0.addEventListener('click', function(e) {
    populateDisplay("0");
})
btnDot.addEventListener('click', function(e) {
    populateDisplay(".");
})
btnC.addEventListener('click', function(e) {
    populateDisplay("error");
})
btnEqual.addEventListener('click', function(e) {
    equasionArray.push(displayValue);
    operate(equasionArray);
    console.log(equasionArray);
})


function populateDisplay(value) {
    if (value == "") {
        display.textContent = "";
        displayValue="";
    }
    else if (value == "/" || value == "*" || value == "-" || value == "+") { //pakeisti efektyviau
        equasionArray.push(displayValue);
        equasionArray.push(value);
        display.textContent += value;
        displayValue = "";
    }
    else {
        display.textContent += value;
        displayValue+=value;
    }

    console.log(displayValue);
    console.log(equasionArray);
}

function operate(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '+') {
            display.textContent = add(array[i-1],array[i+1]);
        }
        else if (array[i] === '-') {
            display.textContent = subtract(array[i-1],array[i+1]);
        }
        else if (array[i] === '*') {
            display.textContent = multiply(array[i-1],array[i+1]);
        }
        else if (array[i] === '/') {
            display.textContent = divide(array[i-1],array[i+1]);
        }
        else {
            continue;
        }
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}