let fruits = ["Apple", "Mango", "Pineapple"]
let [f1, f2, f3] = fruits // Destrcutring array element in different vairables
console.log("Fruit 1 ==>", f1)
console.log("Fruit 2 ==>", f2)
console.log("Fruit 3 ==>", f2)

console.log("----------------------------------------------------------------------------------------")
// let takes another example where we dont want 2nd element
let fruits2 = ["Apple", "Mango", "Pineapple"]
let [ff1,, ff3] = fruits // Destrcutring array element when we dont want 2nd element from array
console.log("Fruit 1 ==>", ff1)
// console.log("Fruit 2 ==>", ff2)
console.log("Fruit 3 ==>", ff3)

console.log("----------------------------------------------------------------------------------------")
// let takes another example where we dont know 4th element will be their or not 
let fruits3 = ["Apple", "Mango", "Pineapple"]
let [fff1, fff2, fff3, fff4="Default Value"] = fruits // Destrcutring array element in this case we given dafault value if 4th element does not come
console.log("Fruit 1 ==>", fff1)
console.log("Fruit 2 ==>", fff2)
console.log("Fruit 3 ==>", fff3)
console.log("Fruit 4 ==>", fff4)

console.log("----------------------------------------------------------------------------------------")
// In some case if we got 4th element Default Value will get change to its orginal value shown in below example
let fruits4 = ["Apple", "Mango", "Pineapple", "ORANGE"]
let [ffff1, ffff2, ffff3, ffff4="Default Value"] = fruits // Destrcutring array element in this case  dafault value get change to ORANGE
console.log("Fruit 1 ==>", ffff1)
console.log("Fruit 2 ==>", ffff2)
console.log("Fruit 3 ==>", ffff3)
console.log("Fruit 4 ==>", ffff4) 

console.log("----------------------------------------------------------------------------------------")
// In some cases we dont know how many array element will be present we using REST Operator
let cars = ["BMW", "Audi", "Maruti", "Suzuki", "Merecedes", "Mahendra"]
let [car, ...allCars] = cars //REST Operator used 
console.log("All Cars ==>", car, allCars)
// We can also iterate through the allCars because it get Array Object with no Square Bracket as a output in return  
for (let i of allCars){
    console.log(i)
}
