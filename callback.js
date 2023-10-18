let payment = true;
let marks = 80;

function enroll(next){
    console.log('Your course is in enrollment....!')
    setTimeout(function() {
        if(payment){
            console.log('Your payment is successfull...!!')
            next()
        }else{
            console.log('Payment failed...!!')
        }

    }, 2000);
}

function progress(next){
    console.log('Your course is in progress...!!')
    setTimeout(function() {
        if(marks >= 80){
            console.log('Congratulation to get enough marks...!!')
            next()
        }else{
            console.log('You do not get enough marks to get certificate...!')
            console.log('You should learn more to get the cartificate...!!')
        }

    }, 2000);
}

function cartificate(){
    setTimeout(function() {
        console.log('Congratulation you got the cartificate......!!')

    }, 2000);
}

enroll(function(){
    progress(cartificate)
})