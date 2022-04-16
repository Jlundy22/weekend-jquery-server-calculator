let operator;

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
}

function minusButtonClick() {
    operator = '-';
}

function multiplicationButtonClick() {
    operator = '*';

}

function divideButtonClick() {
    operator = '/';
}

function equalsButtonClick() {
    console.log('equals button clicked');
    let mathObject = {
        numOne: $('#firstNumberInput').val(),
        numTwo: $('#secondNumberInput').val(),
        operator: operator
    };
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathObject
    })
}

function clearButtonClick() {
    console.log('clear button clicked');
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');
}
