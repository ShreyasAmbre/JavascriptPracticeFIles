/*
    What is Scope
    => It is a scope where we can access the variables and function in our code 

    What is Block
    => Block define curly brackets and statements inside that. It is also know as compound statement 
    {
        // statement
    }
    => Block is used to combine a multiple statement so that we can use where javascript require single statement refer example 2 for this
*/

//EXAMPLE 1
{
    // var decalaration is hoisted and undefine is store in variable in 1st phase of execution context.
    var a = 10;

    // let and const decalartion is hoisted but it is store in different memory know as Block Scope 
    // Note:- let and const generally store in Script Scope if it is outside the Block Scope 
    let b = 20;
    const c = 30

    console.log(a)
    console.log(b)
    console.log(c)
}

// We can access var decalaration as this is not based on block scope
console.log(a)

// b and c is a let and const decalration where this is block scope variables get deleted after scope is completed
console.log(b)
console.log(c)

// EXAMPLE 2
// Syntaxt of if condition  :- if(condition) single statement 
/* As we know if we want to write a single statement we dont write a curly brackets*/
if(true) console.log("I m single statement")

// So we were require multiple line of code we use {} curly bracket that is block scope which combine multiple lines of code
// SO block scope is require where javascript require a single statement.
if(true){
    console.log("MUTIPLE LINE OF CODE OF EXECUTION INSIDE BLOCK SCOPE")
    console.log("MUTIPLE LINE OF CODE OF EXECUTION INSIDE BLOCK SCOPE")
    console.log("MUTIPLE LINE OF CODE OF EXECUTION INSIDE BLOCK SCOPE")
    console.log("MUTIPLE LINE OF CODE OF EXECUTION INSIDE BLOCK SCOPE")
}



