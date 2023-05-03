const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const refer = document.getElementById('message');

let f1 = false, f2 = false, f3 = false;

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = '';
  inputControl.classList.remove('error');
  inputControl.classList.add('success');
}

const clearForm = () => {
  var inputs = document.getElementsByTagName('input');
  var textarea = document.getElementsByTagName('textarea')[0];
  
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'text' || inputs[i].type == 'tel') {
      inputs[i].value = '';
    }
  }

  textarea.value = '';
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const referValue = refer.value.trim();

  if (usernameValue === '') {
    setError(username, 'Обязательно для заполнения');
    f1 = false;
  } else {
    setSuccess(username);
    f1 = true;
  }

  if (referValue === '') {
    setError(refer, 'Обязательно для заполнения');
    f2 = false;
  } else {
    setSuccess(refer);
    f2 = true;
  }

  if(emailValue === '') {
    setError(email, 'Обязательно для заполнения');
    f3 = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Введён неправильный электронный адрес');
    f3 = false;
  } else {
    setSuccess(email);
    f3 = true;
  }
  console.log(usernameValue.parentElement);
  if (f1 == true && f2 == true && f3 == true) {
    clearForm();
    var elements = document.querySelectorAll('.success');
    for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('success');
    $('.popup-bg').fadeIn(800);
  }
  }
}

$('.close-popup').click(function() {
  $('.popup-bg').fadeOut(800);
});