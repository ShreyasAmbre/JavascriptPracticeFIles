/*
    What is Scope
    => Scope means where you can access the variable or a function in our code know as scope

    What us Scope Chain 
    => Here in below example we can see c() function has access to a() function memory component A's Execution COntext and 
    a() function has access to memory component of Global Execution Context this is know as Scope Chain.

    => 

    What is Lexical Scope
    => Local Memory Component + Lexical Memory Component of Parent
    => It determines the function's parent scope by looking at where the function was created 
*/

function a(){
    /*
        A's has the access to its own Memort component of Execution Context and 
        Also it has access to Memory component of Global Execution context this access is their because of Lexical Scope
    */
    var b = 10;
    c()

    function c(){
        /*  1st it search for b variable in its C's Execution Context of Memory Component 
            If it doesnt find their then it has access to its parent Execution Context of Memory Component which is A's Execution Context
            This is know as Lexical Scope where C's has the access of Memory Component of A's
        */
        console.log(b) 
    }
}

a()
/*  Here we get Reference error: b is not define 
    Because as we can see above A's execution is completed to A's Execution Context is deleted from Call Stack 
    So Global Execution Context does not know b variable and it also does not have in its own Memory Component of Execution Context
*/ 
console.log(b) 