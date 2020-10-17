module.exports = function (firstVal, secondVal, mathOp) {
  let mathVal = 0;
  if (mathOp === '+') {
    mathVal = firstVal + secondVal;
  } else if (mathOp == '-') {
    mathVal = firstVal - secondVal;
  } else if (mathOp == '*') {
    mathVal = firstVal * secondVal;
  } else if (mathOp == '/') {
    mathVal = firstVal / secondVal;
  }

  console.log(mathVal);
  return toString(mathVal);
};
