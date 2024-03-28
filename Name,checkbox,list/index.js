/** @format */

let nam = document.querySelector('#nameId');
let show = document.querySelector('#showName');

nam.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		if (e.target.value !== '') {
			let keywork = e.target.value;
			show.innerHTML = keywork;
			localStorage.setItem('name', keywork);
			e.target.value = '';
        } else {
            alert('You must enter you name here...')
        }
	}
});

document.addEventListener('DOMContentLoaded', function () {
	if (localStorage) {
		show.innerHTML = localStorage.getItem('name');
	}
});

let lists = document.getElementsByName('lists');
let showSelected = document.getElementById('showSelected')

let checkArr = [];

[...lists].forEach((list) => {
    list.addEventListener('change', function (e) {
        if (e.target.checked) {
            let checValue = e.target.value
            checkArr.push(checValue)
            let result = showSelect()
            showSelected.innerHTML = result;
        } else {
            let ind = checkArr.indexOf(e.target.value)
            checkArr.splice(ind , 1)
            let result = showSelect()
            showSelected.innerHTML = result;
        }
    })
})


function showSelect() {
    let result = ''
    checkArr.forEach((skil, index) => {
        result += ` (${index +1}) ${skil} `
    })

    return result
}


let list = document.querySelector('#list');

list.addEventListener('dblclick', function (e) {
    if (this.contains(e.target)) {
        let text = e.target.innerHTML
        e.target.innerHTML = ''
        let createIn = createInputBox(text)
        e.target.appendChild(createIn)

        createIn.addEventListener('keypress', function (ev) {
            if (ev.key === 'Enter') {
                e.target.innerHTML = ev.target.value;
            }
        })
    }
})


function createInputBox(value) {
    let input = document.createElement('input')
    input.type = 'text';
    input.value = value

    return input
}