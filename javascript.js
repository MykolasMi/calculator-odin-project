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

let nextOperator = "";
let displayTemporaryValue = "";
const equasionArray = [];
let clear = false;
let dotAmount = 0;


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
    if (dotAmount<1) {
        populateDisplay(".");
        dotAmount++;
    }
})
btnC.addEventListener('click', function(e) {
    populateDisplay("error");
})
btnEqual.addEventListener('click', function(e) {
    equasionArray.push(displayTemporaryValue);
    operate(equasionArray);

    console.log(equasionArray);
})

function populateDisplay(value) {
    if (clear === true) {
        clearAll();
        clear = false;
    }
    if (value == "") { 
        clearAll();
    }
    else if (value == "/" || value == "*" || value == "-" || value == "+") { //pakeisti efektyviau
        if (equasionArray.length>=2) {
            equasionArray.push(displayTemporaryValue);
            nextOperator=value;
            operate(equasionArray);
            nextOperator = "";
            dotAmount = 0;
        }
        else {
            equasionArray.push(displayTemporaryValue);
            equasionArray.push(value);
            display.textContent += value;
            displayTemporaryValue = "";
            dotAmount = 0;
         }
    }
    else {
        display.textContent += value;
        displayTemporaryValue+=value;
    }

    console.log(displayTemporaryValue);
    console.log(equasionArray);
}

function clearAll() {
    display.textContent = "";
    displayTemporaryValue= "";
    equasionArray.splice(0, equasionArray.length)
}

function operate(array) {
    console.log(array);
    displayTemporaryValue = "";

    for (let i = 0; i < array.length; i++) {
        

        if (array[i] === '+') {
            result = roundUp(add(array[i-1],array[i+1]), 1);
            array.splice([i-1], 4);
            display.textContent = result;
            displayTemporaryValue = result;
        }
        else if (array[i] === '-') {
            result = roundUp(subtract(array[i-1],array[i+1]), 1);
            array.splice([i-1], 4);
            display.textContent = result;
            displayTemporaryValue = result;
        }
        else if (array[i] === '*') {
            result = roundUp(multiply(array[i-1],array[i+1]), 1);
            array.splice([i-1], 4);
            display.textContent = result;
            displayTemporaryValue = result;
        }
        else if (array[i] === '/') {
            if (array[i+1] === '0') {
                display.textContent = "You should\n't do that";
                displayTemporaryValue = "";
                array.splice([i-1], 4);
                clear = true;
                continue;
            }
            result = roundUp(divide(array[i-1],array[i+1]), 1);
            array.splice([i-1], 4);
            display.textContent = result;
            displayTemporaryValue = result;
        }
        else {
            continue;
        }
    }

    if (nextOperator == "") {
        return;
    }
    else {
        populateDisplay(nextOperator);
    }
}

function add(a, b) {
    return +a + +b;
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

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}