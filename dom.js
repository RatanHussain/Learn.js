 let count = 0;
document.querySelector('textarea').addEventListener('keypress',function(event){
    count++
    let key = event.key;
    document.querySelector('p').innerHTML = 'Your message lentg is  ' + key;
})