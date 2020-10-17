$(document).ready(onReady);

let operator;

function onReady() {
  $('.js-submit-btn').on('click', makeEquation);
  $('.js-plus-btn').on('click', addPlus);
  $('.js-minus-btn').on('click', addMinus);
  $('.js-multiply-btn').on('click', addMultiply);
  $('.js-divide-btn').on('click', addDivide);
  console.log('Ready');
}

function makeEquation() {
  const equation = {
    firstNumber: Number($('.js-first-input').val()),
    lastNumber: Number($('.js-second-input').val()),
    operator: operator,
  };
  console.log('in click');
  postEquation(equation);
}

function postEquation(equation) {
  console.log('in POST');
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
}

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
}

function render(equation) {
  $('.js-history').empty();
  for (let i = 0; i < equation.length; i++) {
    let value = equation[i];
    $('.js-total').text(value.total);
    $('.js-history').append(`
      <li>${value.firstNum} ${operator} ${value.lastNum} = ${value.total}</li>
    `);
  }
}

function addPlus() {
  console.log('+');
  operator = '+';
}

function addMinus() {
  console.log('-');
  operator = '-';
}

function addMultiply() {
  console.log('*');
  operator = '*';
}

function addDivide() {
  console.log('/');
  operator = '/';
}
