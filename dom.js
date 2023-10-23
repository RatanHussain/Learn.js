let form = document.querySelector('form');
let name = form.querySelector('div #name')
let email = form.querySelector('div #email')
let pass = form.querySelector('div #password')

form.addEventListener('submit',function(event){
  event.preventDefault();
   console.log(name.value)
   console.log(email.value)
   console.log(pass.value)

   const userinfo = {
    name : name.value,
    email : email.value,
    password : pass.value,
   }
   console.log(userinfo)
})