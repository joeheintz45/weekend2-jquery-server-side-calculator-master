let express = require('express');
let bodyParser = require('body-parser');
//const mathValue = require('./modules/calculator');
const history = [];
let newVal = 0;
let app = express();

const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/calculator', (req, res) => {
  equation = req.body;

  // calculates the values the client side sends up on the POST
  calculator(equation.firstNumber, equation.lastNumber, equation.operator);
  function calculator(firstVal, secondVal, mathOp) {
    let mathVal = 0;
    if (mathOp === '+') {
      mathVal = Number(firstVal) + Number(secondVal);
    } else if (mathOp == '-') {
      mathVal = firstVal - secondVal;
    } else if (mathOp == '*') {
      mathVal = firstVal * secondVal;
    } else if (mathOp == '/') {
      mathVal = firstVal / secondVal;
      // checks for dividing by zero bug
      if (firstVal == 0 || secondVal == 0) {
        mathVal = 'Not a Number';
      }
    }

    console.log(mathVal);
    newVal = mathVal;
  }

  // pushes those old values and new math values into an array
  history.push({
    firstNum: equation.firstNumber,
    lastNum: equation.lastNumber,
    operator: equation.operator,
    total: newVal,
  });
  res.sendStatus(200);
});

app.get('/calculator', (req, res) => {
  console.log(history);
  res.send(history);
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
