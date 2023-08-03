
// Here we can see 10 is printed 1st then 20 is printed it does not wait for computation present in settimeout
// This is Asyn excecution of programming
// to make this in Syn excecution of programming we use Promise
var a = 10
setTimeout(() => {
    console.log(a * 2)
}, 2000)
console.log(a)
// 10 
// 20 


var b = 10
let promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log(b * 2)
        return resolve(b * 2)
    }, 2000)
})

// .then() code is exceuted only when Promise is completed (resolve or rejected) 
// so whatever code is going to take some time we can add that in Promises 
promise.then(res => {
    console.log("COMPUTED VALUE ===>", res)
})
// 20
// 20
