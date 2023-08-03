// Below function in invoke and variable is logged before its declare and initialize to see Hoisting Functionality


// output :- Shreyas
getname() 

// output :- undefined 
console.log(x) 

// error :- Reference Error : Cannot access 'y' (This variable is hoisted but it is in Temporal Dead Zone we cant access it but memory is allocated)
console.log(y) 


var x = 7;
let y = 18;
const z = 23;
function getname(){
    console.log("Shreyas")
}

