    
function performOperation() {
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    const resultElement = document.getElementById('result');

    debugger;

    if(!isNaN(input1) && !isNaN(input2)) {
        let mul = multiply(input1, input2);
        let addition = add(input1, input2);
        let divi = division(input1, input2);

        let result = ("" + addition + ", " + mul + ", " + divi);

        resultElement.textContent = 'The addtion, multiplication, and division results are ' + result + ' respectively.';

        //displayResult(result);

    }else {
        //displayResult('Please enter valid numbers.');
        resultElement.textContent = 'Please enter valid numbers.';
    }
}    

function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function division(a, b) {
    return a / b;
}