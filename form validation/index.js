/** @format */

let form = document.querySelector('#fok');
let sms = document.querySelector('#sms');
let sl = document.querySelector('#ul');
let btn = document.querySelector('#btn');


form.addEventListener('input', (e) => {
	e.preventDefault();

	if (sms.value === '') {
		alert('Must enter a value!')
	}

	let option = new Option(sms.value)

	sl.add(option)
})


btn.addEventListener('click', () => {
	let optag = document.querySelector('#ul')

	let selectedOptions = Array.from(optag.selectedOptions)

	selectedOptions.forEach(function (op) {
		optag.removeChild(op)

	})
})