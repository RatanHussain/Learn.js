let paid = true;
let marks  = 50;


const enroll = ()=> {
    return new Promise((resolve,reject)=>{
        console.log('Course is in enrollment....')
        if(paid){
            resolve('Your payment is successfull...')
        }else{
            reject('Payment failed, Please try again......')
        }
    })
}

const progress= ()=> {
    return new Promise((resolve,reject)=>{
        console.log('Your course on progress')
        if(marks >= 80){
            resolve('Preparing your certificate......')
        }else{
            reject('You could not get enough marks to get certificate...')
        }
    })
}

const getcertificate = ()=>{
    return new Promise((resolve,reject)=> {
        resolve('Congratulation you got the certificate......')
    })
}


// enroll()
//     .then((res)=> console.log(res))
//     .then(progress)
//     .then((res)=> console.log(res))
//     .then(getcertificate)
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))


async function result(){
    try{
        let one = await enroll()
        console.log(one)
        let two = await progress()
        console.log(two)
        let last = await getcertificate()
        console.log(last)
    }catch(error){
        console.log(error)
    }
}

result()