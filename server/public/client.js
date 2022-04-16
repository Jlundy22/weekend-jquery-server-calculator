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
    let mathObject = {
        numOne: $('#firstNumberInput').val(),
        numTwo: $('#secondNumberInput').val(),
        operator: operator
    };
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathObject
    }).then(function (response) {
        getResponse();
      })
}

function clearButtonClick() {
    console.log('clear button clicked');
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');
}

function getResponse() {
    $.ajax({
        method: 'GET',
        url: '/calculation'
      }).then(function (response) {
        console.log('the server sent me a guess evaluation');
        console.log(response);
      })
}
