/*
    this keyword determines the surrounding scope
    => in below normal function (method) of object that is adultOrNot() this keyword is surrounding 
    from line no. 9 till line no. 15 where the method is getting complted
    => So because of this name and age key values pairs are accessible 
*/

let obj = {
    name: "Shreyas",
    age: "26",
    adultOrNot: function (){
        isAdult = this.age > 18
        console.log("NORMAL FUNCTION THIS ===>", this) // here this represent the lexical scope and the method
        return isAdult
    },
}


/*
    In Arrow function there is not binding of this 
*/
let obj2 = {
    name: "Shrikant",
    age: 55,
    seniorCitizen: () => {
        let res = this.age > 50
        console.log(res, this.age) 
        console.log("ARROW FUNCTION THIS ===>", this) // this represent to the window it does not have its own this so it cant acces this.age
        return res
    } 
}


console.log("obj Data=>", obj)
console.log("obj fun =>", obj.adultOrNot())

console.log("obj2 Data =>", obj2)
console.log("obj2 fun =>", obj2.seniorCitizen())


let add = (n1, n2) => {return `${n1 + n2} ADD ARROW FUNCTION 1`}

console.log("ARROW FUNCTION =>", add(10, 2))