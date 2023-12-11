let form = document.querySelector('#form')
let fullname = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let secondPassword = document.querySelector('#secondPassword')



function showError(input, sms) {
    const parent = input.parentElement;
    const small = parent.querySelector('small')
    small.innerText = sms;
}





form.addEventListener('submit', (e) => {
    if (name.length < 5) {
        showError(fullname,'You must enter at least 5 charactor')
    }

    if (password.value !== secondPassword.value) {
        showError(password,`Your password didn't match`)
        showError(secondPassword,`Your password didn't match`)
    }
   

})