let nametext = document.querySelector('#nametext')
let nameOutput = document.querySelector('#nameOutput')
let html = document.querySelector('#html')
let css = document.querySelector('#css')
let javaScript = document.querySelector('#javaScript')
let react = document.querySelector('#react')
let nodeJs = document.querySelector('#NodeJs')
let skils = document.getElementsByName('skils')
let selectedOutput = document.querySelector('#selectedOutput')



nametext.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (e.target.value !== '') {
            nameOutput.innerHTML = 'You entered : ' +  nametext.value
        } else {
            nameOutput.innerHTML = 'You Must Enter Your Name'

       }
       e.target.value = ''
    }
})



let skilsarr = [];

[...skils].forEach((skil) => {
    skil.addEventListener('change', function (e) {

        if (e.target.checked) {

            skilsarr.push(e.target.value)
            console.log(skilsarr)
            selectedOutput.innerHTML = skilsarr
        } else {
            let ind = e.target.value
            skilsarr.splice(ind, 1)
            selectedOutput.innerHTML = skilsarr
            console.log(skilsarr)
        }

    })
})
