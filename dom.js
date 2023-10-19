let list = document.querySelectorAll('li')[1]
list.previousElementSibling.innerHTML = 'working'

list.parentElement.classList.add('order1')
