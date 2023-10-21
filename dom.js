for(let i = 0;i <  3; i++){
    let btns = document.querySelectorAll('.btn')[i];
    btns.addEventListener('click', function(){
        let text = btns.innerHTML;
        let clas = document.querySelectorAll('.btn')[i];
        clas.classList.add('btn1');
        console.log(text)
        play(text)
        setTimeout(() => {
            // location.reload()
            clas.classList.remove('btn1');
        }, 2000);
    })
}

document.addEventListener('keypress',function(event){
    let text = event.key;
    play(text)
    
})


function play(text){
    switch(text){
        case('Play first song'):
            new Audio('sound/0.mp3').play()
            break;
        case('Play the middle song'):
            new Audio('sound/1.mp3').play()
            break;
        case('Play the last song'):
            new Audio('sound/2.mp3').play()
            break;

    }
}