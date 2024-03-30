/** @format */

// todo Ajax Post request is here first way
let form = document.getElementById('form');
let showPosts = document.getElementById('showPosts');
let url = 'https://jsonplaceholder.typicode.com/posts';
let called = false;

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let textobj = {};
	console.log(this.elements);
	[...this.elements].forEach((el) => {
		if (el.type !== 'submit') {
			if (el.value !== '') {
				textobj[el.name] = el.value;
				called = true;
			} else {
				// alert(`${el.name} you must provide`)
				el.classList.add('is-invalid');
			}
		}
	});
	if (called) {
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'Aplication/JSON',
			},
			body: JSON.stringify(textobj),
		})
			.then((res) => res.json())
			.then((data) => {
				let lists = createList(data)
				showPosts.appendChild(lists)
			})
			.catch((er) => console.log(er));

		console.log(textobj);
	}
});

// todo Ajax Post request is here second way
// form.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	let userId = this.userId.value;
// 	let title = this.title.value;
// 	let body = this.body.value;
// 	let textobj = {
// 		userId,
// 		title,
// 		body,
// 	};

// 	fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-type': 'Aplication/JSON'
// 		},
// 		body: JSON.stringify(textobj)
// 	})
// 		.then((res) => res.json())
// 		.then((data) => console.log(data))
// 		.catch((er) => console.log(er));

// 	console.log(textobj);
// });

// todo Ajax get request here

function createList(value) {
	let li = document.createElement('li');
	li.classList.add('list-group-item');
	li.innerHTML = 'Your requested id is :' + value.id;

	return li;
}

let btn = document.getElementById('btn');
let lists = document.getElementById('lists');

btn.addEventListener('click', function () {
	fetch(url)
		.then((res) => res.json())
		.then((posts) => {
			posts.forEach((post, index) => {
				let li = makeLi(post, index);
				lists.appendChild(li);
			});
		})
		.catch((e) => e.message);
});

function makeLi(value, index) {
	let li = document.createElement('li');
	li.classList.add('list-group-item');
	li.innerHTML = ` Serial No : ${index + 1} <br> Id : ${
		value.id
	} <br> UserId : ${value.userId} <br> Title : ${value.title} <br> Body : ${
		value.body
	}`;

	return li;
}
