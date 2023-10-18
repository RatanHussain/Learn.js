let list = document.querySelectorAll('.items')[4]

let list2 = list.parentElement;

list2.classList.add('nicetomeatyou');

let last = list2.querySelectorAll('.items')[3];

let sibling = last.previousElementSibling;

sibling.innerHTML = 'me also here'
