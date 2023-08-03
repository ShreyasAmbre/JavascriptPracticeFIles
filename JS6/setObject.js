let number = [21, 43, 21, 2, 1, 6,  4, ]
console.log(number)

let uniquieNum = new Set(number) // Here using Set we remove duplicate numbers from array 
console.log("Set holds only unique number duplicate numbers where removed =>", uniquieNum)



let employeeObj = [{name: "Shreyas", age: 27}, {name: "Shrikant", age: 55} , {name: "Shreyas", age: 27}]
let uniqueEmployeeObj = []

for(let i of employeeObj){
    if(!uniqueEmployeeObj.includes(i, 0)){
        uniqueEmployeeObj.push(i)
    }
}

console.log("Unique Object from Array =>", uniqueEmployeeObj)