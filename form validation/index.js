/** @format */

let form = document.querySelector('form');
let sms = document.querySelector('#sms');
let sl = document.querySelector('#ul');
let btn = document.querySelector('#btn');

form.addEventListener('submit', () => {
	if (sms.value == '') {
		alert('Enter a value first!');
	} else {
		let op = document.createElement('option');
		op.innerHTML = sms.value;
		op.id = 'del';
		op.value = sms.value;

		sl.appendChild(op);
		sms.value = '';
	}
});

btn.onclick = () => {
	let delarry = [];

	for (let i = 0; i < sl.options.length; i++) {
		delarry[i] = sl.options[i].selected;
	}

	let index = sl.options.length;
	while (index--) {
		if (delarry[index]) {
			sl.remove(index)
		}
	}
};
