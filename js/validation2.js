const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const radios = document.getElementsByName('rr');
let radioSelected = false;

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
  
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == 'text') {
        inputs[i].value = '';
      }
    }
  
    for (var i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
  }

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === '') {
    console.log(username);
    setError(username, 'Обязательно для заполнения');
    f1 = false;
  } else {
    setSuccess(username);
    f1 = true;
  }

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        radioSelected = true;
        break;
      }
  }
  if (radioSelected === false) {
    setError(radios[0].parentElement, 'Обязательно для выбора');
    f2 = false;
  } else {
    setSuccess(radios[0].parentElement);
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
  if (f1 == true && f2 == true && f3 == true) {
    let struct = {};
    struct.name =  localStorage.getItem('name');
    struct.time = localStorage.getItem('time');
    let checking = false;
    let globalArray = JSON.parse(localStorage.getItem('globalArray'));
    for (let j = 0; j < globalArray.length; j++) {
        if (localStorage.getItem('name') === globalArray[j].name && localStorage.getItem('time') === globalArray[j].time) {
            for (let i = 0; i < $('#basketpart').children('div').length; i++) {
                let [firstPart, secondPart] = $('#basketpart').children('div')[i].className.split('_');
                let firstNumber = parseInt(firstPart);
                let secondNumber = parseInt(secondPart);
                console.log($('#basketpart').children('div').length);
                let array = [];
                array[0] = firstNumber;
                array[1] = secondNumber;
                globalArray[j].full.push(array);
                console.log(array);
                console.log(globalArray[j].full);
            }
            checking = true;
            break;
        }
    }
    
    if (checking == false) {
        let array = [];
        for (let i = 0; i < $('#basketpart').children('div').length; i++) {
            let [firstPart, secondPart] = $('#basketpart').children('div')[i].className.split('_');
            let firstNumber = parseInt(firstPart);
            let secondNumber = parseInt(secondPart);
            console.log(firstNumber);
            console.log(secondNumber);
            array[i] = [];
            array[i][0] = firstNumber;
            array[i][1] = secondNumber;
        }
    struct.full = array;
    globalArray.push(struct);
    }
    localStorage.setItem('globalArray', JSON.stringify(globalArray));
    

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