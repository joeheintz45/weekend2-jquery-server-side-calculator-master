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
  // newVal = mathValue(
  //   Number(equation.firstNumber),
  //   Number(equation.lastNumber),
  //   equation.operator
  // );
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
    }

    console.log(mathVal);
    newVal = mathVal;
  }

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
