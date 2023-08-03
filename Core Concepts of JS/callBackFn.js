// What is Callback Function in js

/*
    1. As we know function is a First Class function in Javscript, Because it can be use as value and pass it as a argument to another
    function and also we can return the function when required so we call function is a First Class Function. 

    2. As we see in below example in function y() is pass as argument when function x() is invoke here function y() can be call inside 
    function x() when ever its require  
*/
function x(y){
    console.log("x")
    // console.log(y) // it return :- y function defination
    y();
}
function y(){
    console.log("y")
}

x(y)
/*
    3. SetTimeout() also takes a function as a argument where that function get execute after specific time get over 

    4. Here we can see function z() does not wait for 5 seconds it execute and then settimeout get execute  after 5 second
    so this callback function give us a power of Asyn World.
    => As we know JS execute code line by line in Synchronous manner and it is single threaded language.
    => When we want to call a after some time CALLBACK comes into picture. 
*/

setTimeout( function (){
    console.log("This a callback function it get execute after 5 seconds")
}, 5000)

function z(){
    console.log("z")
}

z()
