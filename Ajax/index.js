/** @format */

let btn = document.getElementById('btn');
let lists = document.getElementById('lists');
let url = 'https://jsonplaceholder.typicode.com/posts';

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
