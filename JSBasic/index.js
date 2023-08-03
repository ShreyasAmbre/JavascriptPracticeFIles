console.log("BASIC OF JS")


var num = 11
var isPrime = true;
for (let i=2; i < num; i++){
    if(num % i === 0){
        isPrime=false;
        break;
    }
}
if (isPrime == true){
    console.log(`${num} is a prime number`);
}else {
    console.log(`${num} is a not prime number`);
}