/*
    What is Closure
    => A closure is a combination on funtion bundled with its lexical enviroment is know as closure
    
*/


// EXAMPLE 1
function a(){
    var x = 10
    function b(){
        console.log(x)
    }
    b()
}
a()

// EXAMPLE 2
function x(){
    var p = 10;
    function y(){
        console.log(p)
    }
    return y;
}
var z = x()
z()


// EXAMPLE 3
function clo(){
    var i = 60;

    setTimeout( () => {
        console.log(i)
    }, 3000)
    console.log("Doesnt wait for 3 seconds it get execute")
}
clo()