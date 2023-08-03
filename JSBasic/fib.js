console.log("0 1 1 2 3 5 8");
var a = 0
var b = 1


for(let i=0; i<=10; i++){
    c = a + b
    console.log(c);
    a = b
    b = c
    c = 0
}