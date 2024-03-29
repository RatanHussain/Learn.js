/** @format */

let form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let formData = {};
	[...this.elements].forEach((data) => {
		if (data.type !== 'submit') {
			formData[data.name] = data.value
		}
	});

	console.log(formData);
});
