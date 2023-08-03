/*
    Symbol is like a primitive data type in Javascript
    It represent the unique hidden identification that no other code can accidentially access

    example:- If different coder want to add employee.id property to a employee object which belongs to 3rd party 
    they both coder could mox up their property values 
    => To avoid this we use Symbol
*/

let employee = {
    id: 202,
    name: "Shreyas",
    dept: "Web",
    desg: "Developer",
}

console.log("Employee Details", employee)

let id = Symbol('id')
employee[id] = 201

console.log("Employee Details AFTER Symbol", employee)
console.log("Employee Details AFTER Symbol", employee.id) // this refer to normal id property of object
console.log("Employee Details AFTER Symbol", employee[id]) // this refer to symbol ID property of object 

