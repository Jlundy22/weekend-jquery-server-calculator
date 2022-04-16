let operator;

$(document).ready(onReady);

function onReady() {
    $('#plusButton').on('click', plusButtonClick );
    $('#minusButton').on('click', minusButtonClick );
    $('#multiplicationButton').on('click', multiplicationButtonClick);
    $('#divideButton').on('click', divideButtonClick );
    $('#equalButton').on('click', equalsButtonClick );
    $('#clearButton').on('click', clearButtonClick );
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

function equalsButtonClick() {
    if($('#firstNumberInput').val() === '' || $('#secondNumberInput').val() === '') {
        $('#mostRecentAnswer').empty();
        $('#mostRecentAnswer').append('Fill in all inputs!');
        return;
    };
    let mathObject = {
        numOne: $('#firstNumberInput').val(),
        numTwo: $('#secondNumberInput').val(),
        operator: operator
    };
     $('#firstNumberInput').val(''),
     $('#secondNumberInput').val(''),

    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathObject
    }).then(function (response) {
        getResponse();
      }).catch(function(error) {
          console.log(error)
      })
}

function clearButtonClick() {
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');
}

function getResponse() {
    $.ajax({
        method: 'GET',
        url: '/calculation'
      }).then(function (response) {
        $('#mostRecentAnswer').empty();
        $('#mostRecentAnswer').append(response.answer);
        getHistory()
    })
}

function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/history'
      }).then(function (response) {
          $('#answersList').empty();
        for (let answer of response.pastCalculations) {
            $('#answersList').append(`<li>${answer}</li>`);
        }
    }).catch(function(error) {
        console.log(error)
    })
}
