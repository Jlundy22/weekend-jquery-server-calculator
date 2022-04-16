
////////////////////////////////////////////////////////////
// Server initialization
////////////////////////////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const { send } = require('express/lib/response');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

let answer ;
const pastCalculations = []


app.post('/calculate', (req, res) => {
    let data = req.body;
    const numOne = Number(req.body.numOne);
    const numTwo = Number(req.body.numTwo);
    const operator = req.body.operator;
    
    switch (operator) {
    case '+':
        answer = numOne + numTwo;
        break;
    case '-':
        answer = numOne - numTwo;;
        break;
    case '*':
        answer = numOne * numTwo;
        break;
    case '/':
        answer = numOne / numTwo;
     break;
     default:
        console.log(`Error recieving calculation data`);
    }
    pastCalculations.push(`${numOne} ${operator} ${numTwo} = ${answer}`);
    res.sendStatus(200);
})

app.get('/calculation', (req, res) => {
    res.send({
        answer: answer
    })
})

app.get('/history', (req, res) => {
    res.send({
        pastCalculations: pastCalculations
    })
})