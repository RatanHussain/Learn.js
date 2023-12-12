/** @format */

let form = document.querySelector('#form');
let fullname = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let secondPassword = document.querySelector('#secondPassword');

function showError(input, sms) {
	const parent = input.parentElement;
	const small = parent.querySelector('small');
	small.innerHTML = sms;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (fullname.value === '') {
		showError(fullname, 'Must enter your fullname');
	} else if (fullname.value.length < 3) {
		showError(fullname, 'You must enter at least 3 charactor');
	} else {
		showError(
			fullname,
			`<i class="fa-solid fa-circle-check" style="color:green;"></i>`
		);
	}

	if (password.value.length < 6) {
		showError(password, `Passord must be 6 charactor`);
		showError(secondPassword, `Passord must be 6 charactor`);
	} else if (password.value !== secondPassword.value) {
		showError(password, `Your password didn't match`);
		showError(secondPassword, `Your password didn't match`);
	} else {
		showError(
			password,
			`<i class="fa-solid fa-circle-check" style="color:green;"></i>`
		);
		showError(
			secondPassword,
			`<i class="fa-solid fa-circle-check" style="color:green;"></i>`
		);
	}
});
