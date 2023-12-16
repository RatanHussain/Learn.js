/** @format */

let form = document.querySelector('form');
let sms = document.querySelector('#sms');
let sl = document.querySelector('#ul');
let btn = document.querySelector('#btn');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (sms.value == '') {
		alert('Enter a value first!');
	} else {
		
	}
});

btn.onclick = () => {
	var selectElement = document.getElementById('ul');
	var selectedOptionse = Array.from(selectElement.selectedOptions);

	selectedOptionse.forEach(function (option) {
		selectElement.removeChild(option);
	});
};
