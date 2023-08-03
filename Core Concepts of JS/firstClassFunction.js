/*
    What is Anonymus function 
    =>

    What is First Class function
    =>

    Difference between Function Statement Vs Function Expression Vs Function Declaration 
    => 
*/

// Function Statment also Know as Function Declaration :- The way of creating function is called Function Statement thats it. shown below 
function add(n){
    console.log(n + n)
}
add(30)

// Function Expression :- Fucntion assign to a variable is called function Expression with is function name if we dont give function name this 
// also comes in funciton expression.
var a = function xyz (x){
    console.log(x + x)
}
a(10)
xyz() // This gives reference error because we store a xyz() function to a variable we cant call xyz()

// Anonymus Function :- Function which does not have function name is called Anonymus function
var c = function (n) {
    console.log( n * 2)
}
c(4)