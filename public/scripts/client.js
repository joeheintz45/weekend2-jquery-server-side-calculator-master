$(document).ready(onReady);

let operator;

// ready for the jQuery
function onReady() {
  $('.js-submit-btn').on('click', makeEquation);
  $('.js-plus-btn').on('click', addPlus);
  $('.js-minus-btn').on('click', addMinus);
  $('.js-multiply-btn').on('click', addMultiply);
  $('.js-divide-btn').on('click', addDivide);
  $('.js-clear-btn').on('click', clearInputs);
  console.log('Ready');
} // end onReady function

// grabs values from DOM and checks the fields for all values being valid
function makeEquation() {
  if (
    $('.js-first-input').val().length == 0 ||
    $('.js-second-input').val().length == 0
  ) {
    alert('Please fill all fields!');
  } else if (operator == undefined) {
    alert('Please select an operator!');
  } else {
    const equation = {
      firstNumber: Number($('.js-first-input').val()),
      lastNumber: Number($('.js-second-input').val()),
      operator: operator,
    };

    postEquation(equation);
  }
} // end makeEquation function

// POSTS equation data to the server
function postEquation(equation) {
  $.ajax({
    type: 'POST',
    url: '/calculator',
    data: equation,
  })
    .then(function (response) {
      console.log(response);
      getEquation();
    })
    .catch(function (err) {
      console.log(err);
      alert('IT BROKE');
    });
} // end postEquation function

// GETS the new value from the equation
function getEquation() {
  $.ajax({
    type: 'GET',
    url: '/calculator',
  })
    .then(function (response) {
      console.log(response);
      render(response);
    })
    .catch(function (err) {
      console.log(err);
      alert('IT BROKE');
    });
} // end getEquation function

// renders the new value and history onto the page
function render(equation) {
  $('.js-history').empty();
  for (let i = 0; i < equation.length; i++) {
    let value = equation[i];
    $('.js-total').text(value.total);
    $('.js-history').append(`
      <li>${value.firstNum} ${value.operator} ${value.lastNum} = ${value.total}</li>
    `);
  }
} //  end render function

// adds + operator on click
function addPlus() {
  console.log('+');
  operator = '+';
  $('.js-plus-btn').addClass('button');
  $('.js-minus-btn').removeClass('button');
  $('.js-multiply-btn').removeClass('button');
  $('.js-divide-btn').removeClass('button');
} // end addPlus operator

// adds - operator on click
function addMinus() {
  console.log('-');
  operator = '-';
  $('.js-minus-btn').addClass('button');
  $('.js-plus-btn').removeClass('button');
  $('.js-multiply-btn').removeClass('button');
  $('.js-divide-btn').removeClass('button');
} // end addMinus function

// adds * operator on click
function addMultiply() {
  console.log('*');
  operator = '*';
  $('.js-multiply-btn').addClass('button');
  $('.js-plus-btn').removeClass('button');
  $('.js-minus-btn').removeClass('button');
  $('.js-divide-btn').removeClass('button');
} // end addMultiply function

// adds / operator on click
function addDivide() {
  console.log('/');
  operator = '/';
  $('.js-divide-btn').addClass('button');
  $('.js-plus-btn').removeClass('button');
  $('.js-multiply-btn').removeClass('button');
  $('.js-minus-btn').removeClass('button');
} // end addDivide on click

// clears inputs on C button click
function clearInputs() {
  $('.js-first-input').val('');
  $('.js-second-input').val('');
} // end clearInputs function
