let operator;
let firstNumber;
let secondNumber


$(document).ready(onReady);

function onReady() {
    $('#plusButton').on('click', plusButtonClick );
    $('#minusButton').on('click', minusButtonClick );
    $('#multiplicationButton').on('click', multiplicationButtonClick);
    $('#divideButton').on('click', divideButtonClick );
    $('#equalButton').on('click', equalsButtonClick );
    $('#clearButton').on('click', clearButtonClick );
}

function plusButtonClick() {
    operator = '+';
    console.log(operator);
}

function minusButtonClick() {
    operator = '-';
    console.log(operator)
}

function multiplicationButtonClick() {
    operator = '*';
    console.log(operator);
}

function divideButtonClick() {
    operator = '/';
    console.log(operator);
}

function equalsButtonClick() {
    console.log('equals button clicked');
    firstNumber = $('#firstNumberInput').val();
    secondNumber = $('#secondNumberInput').val();
    console.log(firstNumber);
    console.log(secondNumber);
}

function clearButtonClick() {
    console.log('clear button clicked');
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');
}
