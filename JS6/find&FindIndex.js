let cars = ["Audi", "BMW", "Mercedes"]
console.log("findIndex() return the index of find element, if it doent find it will return -1 ===>", cars.findIndex(ele => ele === "BMW")) 
// it return index of element 1

console.log("findIndex() return the index of find element, if it doent find it will return -1 ===>", cars.findIndex(ele => ele === "asxasx")) 
// it return -1 in case every elements fails to pass the condition


let age = [43, 12, 46, 24, 55, 10]
console.log("find() return the 1st value on which condition gets pass ===>", age.find(ele => ele < 18 )) 
// it return 12

console.log("find() return undefined if condition does not pass any element from array ===>", age.find(ele => ele > 100 )) 
// it return undefined


let employee = [{name: "Shreyas", age: 27}, 
                {name: "Shrikant", age: 55}]
console.log("Find senior citizen ===>", employee.find(ele => ele.age > 50)) 
// it return complete objectt