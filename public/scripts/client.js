$(document).ready(onReady);

function onReady() {
  $('.js-submit-btn').on('click', makeEquation);
  console.log('Ready');
}

function makeEquation() {
  const equation = {
    firstNumber: Number($('.js-first-input').val()),
    lastNumber: Number($('.js-second-input').val()),
    operator: '-',
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
      <li>${value.firstNum} * ${value.lastNum} = ${value.total}</li>
    `);
  }
}
