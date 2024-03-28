/** @format */

let nametext = document.querySelector('#nametext');
let nameOutput = document.querySelector('#nameOutput');
let html = document.querySelector('#html');
let css = document.querySelector('#css');
let javaScript = document.querySelector('#javaScript');
let react = document.querySelector('#react');
let nodeJs = document.querySelector('#NodeJs');
let skils = document.getElementsByName('skils');
let selectedOutput = document.querySelector('#selectedOutput');

nametext.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		if (e.target.value !== '') {
			nameOutput.innerHTML = 'You entered : ' + nametext.value;
		} else {
			nameOutput.innerHTML = 'You Must Enter Your Name';
		}
		e.target.value = '';
	}
});

let skilsarr = [];

[...skils].forEach((skil) => {
	skil.addEventListener('change', function (e) {
		if (e.target.checked) {
			skilsarr.push(e.target.value);
			console.log(skilsarr);
			showText();
		} else {
			let ind = skilsarr.indexOf(e.target.value);
			skilsarr.splice(ind, 1);
			console.log(skilsarr);
			showText();
			// selectedOutput.innerHTML = skilsarr;
		}
	});
});

function showText() {
	let result = '';
	[...skilsarr].forEach((skil, index) => {
		result += `  (${index + 1})${skil} `;

		selectedOutput.innerHTML = result;
	});
}

// let list = document.querySelector('#listId');

// list.addEventListener('dblclick', function (event) {
// 	if (this.contains(event.target)) {
// 		let innerText = event.target.innerText;
// 		event.target.innerHTML = '';
// 		let inputed = createInput(innerText);
//         event.target.appendChild(inputed);

//         inputed.addEventListener('keypress', function (e) {
//             if (e.key === 'Enter') {
//                 event.target.innerHTML = e.target.value
//             }
//         })
// 	}
// });

// function createInput(value ) {
// 	let inp = document.createElement('input');
// 	inp.type = 'text';
// 	inp.value = value;

// 	return inp;
// }
let list = document.querySelector('#listId');

list.addEventListener('dblclick', function (event) {
	if (this.contains(event.target)) {
		let innerText = event.target.innerText;
		event.target.innerHTML = '';
		let inputed = createInput(innerText);
		event.target.appendChild(inputed);

		inputed.addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				event.target.innerHTML = e.target.value;
			}
		});
	}
});

// Add click event listener to document
document.addEventListener('click', function (event) {
	// Check if the clicked element is not within the list
	if (!list.contains(event.target)) {
		// Convert input back to li
		let inputElement = document.querySelector('#listId input[type="text"]');
		if (inputElement) {
			let value = inputElement.value;
			let liElement = document.createElement('li');
			liElement.innerText = value;
			inputElement.parentNode.replaceChild(liElement, inputElement);
		}
	}
});

function createInput(value) {
	let inp = document.createElement('input');
	inp.type = 'text';
	inp.value = value;

	return inp;
}
