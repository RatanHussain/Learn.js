/** @format */

let form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let fromData = {};

	[...this.elements].forEach((data) => {
		if (data.type !== 'submit') {
			fromData[data.name] = data.value;
		}
	});

	console.log(fromData);
});
