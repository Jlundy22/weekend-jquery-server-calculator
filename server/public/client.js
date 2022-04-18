let operator;

$(document).ready(onReady);

function onReady() {
    $('#plusButton').on('click', plusButtonClick);
    $('#minusButton').on('click', minusButtonClick);
    $('#multiplicationButton').on('click', multiplicationButtonClick);
    $('#divideButton').on('click', divideButtonClick);
    $('#equalButton').on('click', equalsButtonClick);
    $('#clearButton').on('click', clearButtonClick);
    getHistory();
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

// When equal button is clicked:
//info from the inputs will be stored in the object mathObject
// .ajax will POST the object to the server side
// then the function getResponse will run
function equalsButtonClick() {
    let mathObject = {
        numOne: $('#firstNumberInput').val(),
        numTwo: $('#secondNumberInput').val(),
        operator: operator
    };

    if ($('#firstNumberInput').val() === '' || $('#secondNumberInput').val() === '') {
        $('#mostRecentAnswer').empty();
        $('#mostRecentAnswer').append('Fill in all inputs!');
        return;
    };

    $('#firstNumberInput').val(''),
        $('#secondNumberInput').val(''),

        $.ajax({
            method: 'POST',
            url: '/calculate',
            data: mathObject
        }).then(function () {
            getResponse();
        }).catch(function (error) {
            console.log(error)
        })
}

// clears the input fields 
function clearButtonClick() {
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');
}

// Gets the most recent answer from server.js
//clears old answer and appends the most recent answer to the DOM
// runs the function getHistory
function getResponse() {
    $.ajax({
        method: 'GET',
        url: '/calculation'
    }).then(function (response) {
        $('#mostRecentAnswer').empty();
        $('#mostRecentAnswer').append(response.answer);
        getHistory();
    })
}

// the .ajax GET requested will recieve the updated pastCaclulations
// array from the server and then loop through the object in the array
// each loop will append one of the past calculations on the DOM
function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(function (response) {
        $('#answersList').empty();
        for (let answer of response.pastCalculations) {
            $('#answersList').append(`<li>${answer}</li>`);
        }
    }).catch(function (error) {
        console.log(error);
    })
}
