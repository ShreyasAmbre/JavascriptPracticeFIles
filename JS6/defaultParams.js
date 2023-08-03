
// Normal Function
function add(n1, n2){
    return n1 + n2
}

console.log("Add Fun Call ==>", add(10, 5))
// it return addition :- 15


// Default Parameter Value to function 
function sub(n1, n2=3){ //n2 is a default parameter pass to function
    return n1 - n2
}
console.log("Sub Fun Call ===>", sub(13))
// it return substraction :- 10 

// Deafult Parameter Function to function params
function cubeCal(n1, n2=square(n1)){
    return n1 * n2
}

function square(n){
    return n * n
}
console.log("MULTIPLE of TWO", cubeCal(3))
// it return cube of 3:- 18 

// VERY IMPORTANT :- Call same function as Default Parameter
function main(a, b=main()){
    return a + b
}
console.log("Calling same funciton ===>", main())
// it return error :- Maximum call stack size exceeded