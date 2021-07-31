const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values form the inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === '') {
        // show error
        // add error class
        setErrorFor(firstName, 'First name cannot be empty');
    } else {
        // add success class
        setSuccessFor(firstName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Last name cannot be empty');
    } else {
        setSuccessFor(LastName);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Looks like this is not an Email');
    } else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formBox = input.parentElement;  // .form__box
    const small = formBox.querySelector('small');

    //  add error message inside small
    small.innerText = message;

    // add error class
    formBox.className = 'form__box error';
}

function setSuccessFor(input) {
    const formBox = input.parentElement
    formBox.className = 'form__box success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}