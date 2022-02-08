const input = document.querySelector('#emailInput');
const form = document.querySelector('#myForm')
const button = document.querySelector('#notify')
const formContainer = document.querySelector('.form-container')
const validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

form.addEventListener('submit', function (e){
    e.preventDefault()
});

button.addEventListener('click', validateEmail)

function validateEmail(){
    let inputValue = input.value;
    if(inputValue.match(validRegex)){
        createWarning('Email sent!');
    }
    else if(inputValue == ''){
        createWarning('Please provide an email!');
    }
    else{
        createWarning('Please provid a valid email address');
    }
}

function createWarning(message){
    const existingWarning = document.getElementById('warning');
    if (existingWarning) {
      existingWarning.remove();
    }

    if((screen.width > 425) && (screen.width <= 2000)){
        const warning = document.createElement('p');
        warning.innerHTML = message;
        warning.classList.add('warning');
        warning.setAttribute('id','warning');
        const error = document.createElement('span');
        error.setAttribute('id','error');
        error.append(warning)
        formContainer.insertAdjacentElement('afterend',error);
    }
    else{
        const warning = document.createElement('p');
        warning.innerHTML = message;
        warning.classList.add('warning');
        warning.setAttribute('id','warning');
        input.insertAdjacentElement('afterend',warning);
    }
}