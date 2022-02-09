const input = document.querySelector('#emailInput');
const form = document.querySelector('#myForm')
const button = document.querySelector('#notify')
const formContainer = document.querySelector('.form-container')
const intro = document.querySelector('.intro')
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
        createWarning('Please provid a valid email address!');
    }
}

function createWarning(message){
    const existingWarning = document.getElementById('warning');
    if (existingWarning || existingWarning) {
      existingWarning.remove();
    }
    if(screen.width <= 425){
        const warning = document.createElement('p');
        warning.innerHTML = message;
        warning.classList.add('warning');
        warning.setAttribute('id','warning');
        input.insertAdjacentElement('afterend',warning);
    }
    else{
        const warning = document.createElement('p');
        warning.innerHTML = message;
        warning.classList.add('warning');
        warning.setAttribute('id','warning');
        intro.insertAdjacentElement('afterend',warning);
    }
}

    