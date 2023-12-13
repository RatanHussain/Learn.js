/** @format */
let btn = document.querySelector('#btn');


btn.addEventListener('click', () => {
	let input = document.querySelectorAll("input[name='color']:checked");
	let ar = [];
	input.forEach((input) => {
		ar.push(input.value);
	});
	alert(ar);
});
