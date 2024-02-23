const form = document.querySelector('form');
const cardholderCont = document.querySelector('.form__cardholder');
const cardholderInput = document.querySelector('#cardholder');
const cardnumberCont = document.querySelector('.form__cardnumber');
const cardnumberInput = document.querySelector('#cardnumber');
const expCont = document.querySelector('.form__exp');
const expMonthInput = document.querySelector('#exp-month');
const expYearInput = document.querySelector('#exp-year');
const cvcCont = document.querySelector('.form__cvc');
const cvcInput = document.querySelector('#cvc');

const cardnumberText = document.querySelector('.text--cardnumber');
const cardholderText = document.querySelector('.text--cardholder');
const expMonthText = document.querySelector('.text--exp-month');
const expYearText = document.querySelector('.text--exp-year');
const cvcText = document.querySelector('.text--cvc');

cardholderInput.addEventListener('input', (e) => {
  cardholderText.textContent = e.target.value;
});

cardnumberInput.addEventListener('input', (e) => {
  cardnumberText.textContent = e.target.value;
});

expMonthInput.addEventListener('input', (e) => {
  expMonthText.textContent = e.target.value;
});

expYearInput.addEventListener('input', (e) => {
  expYearText.textContent = e.target.value;
});

cvcInput.addEventListener('input', (e) => {
  cvcText.textContent = e.target.value;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkEmptyInput(cardholderCont, cardholderInput);
  checkEmptyInput(cardnumberCont, cardnumberInput);
  checkEmptyInput(expCont, expMonthInput);
  checkEmptyInput(expCont, expYearInput);
  checkEmptyInput(cvcCont, cvcInput);

  checkNumbers(cardnumberCont, cardnumberInput);
  checkNumbers(expCont, expMonthInput);
  checkNumbers(expCont, expYearInput);
  checkNumbers(cvcCont, cvcInput);
});

// re-factor from checking each input one by one
// function checkCardholder() {
//   const alertMsg = cardholderCont.querySelector('.alert-message');
//   alertMsg.textContent = '';
//   cardholderInput.classList.remove('alert');

//   if (cardholderInput.value.trim() === '') {
//     cardholderInput.classList.add('alert');
//     alertMsg.textContent = 'Cannot be empty!';
//   }
// }

function checkEmptyInput(container, inputElement) {
  const alertMsg = container.querySelector('.alert-message');
  alertMsg.textContent = '';
  inputElement.classList.remove('alert');

  if (inputElement.value.trim() === '') {
    inputElement.classList.add('alert');
    alertMsg.textContent = 'Cannot be empty!';
  }
}

function checkNumbers(container, inputElement) {
  const alertMsg = container.querySelector('.alert-message');
  alertMsg.textContent = '';
  inputElement.classList.remove('alert');
  if (!checkNumberFormat(inputElement.value.trim())) {
    alertMsg.textContent = 'Wrong format, numbers only!';
  }
}

//regex checking only contains numbers
const checkNumberFormat = (str) => /^\d+$/.test(str);
