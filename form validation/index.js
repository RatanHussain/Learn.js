let form = document.querySelector('#form')
let fullname = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let secondPassord = document.querySelector('#secondPassword')



function showError(input, sms) {
    const parent = input.parentElement;
    const small = parent.querySelector('small')

    small.innerText = sms;

}


form.addEventListener('submit', (e) => {
    let len = fullname.slice(/)

    showError(fullname,fullname.lenth)
})