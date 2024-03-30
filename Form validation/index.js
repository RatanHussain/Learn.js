/** @format */

let form = document.querySelector('#form');


let valid = false;

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let fromData = {};

	[...this.elements].forEach((data) => {
		if (data.type !== 'submit') {
			valid = validator(data)
			if (valid) {
				fromData[data.name] = data.value;
			} else {
				data.classList.add('is-invalid')
			}
		}
	});

	if (valid) {
		console.log(fromData);
		this.reset()
	}


});



function validator(el) {
	if (!el.value) {
		return false
	}

	return true
}
