let fruits = ["Apple", "Mango", "Pineapple", "ORANGE"]

function printAll(a, ...n){ // REST operator is used in function defination to combine all elments in single array
    console.log("All Fruits using Spread and Rest Operator ===>", a, n)
}
printAll(...fruits) // SPREAD operator is used in function invoke to spread array element in single element

console.log("-----------------------------------------------------------------------------------------")
// Merging Array 
let otherfruits = ['Apple', 'Kiwi', 'Mango']
let specialFruits = ['Guvava', "Orange", "Pineapple"]
let finalFruits = [...otherfruits, ...specialFruits]
console.log("FINAL FRUITS ===>", finalFruits)

console.log("-----------------------------------------------------------------------------------------")
// When Copying array to other variables What is Break Reference
let cars = ["Maruti", "Honda", "Suzuki"]
let finalCars = cars // COPY ARRAY  
finalCars.push("BMW")

// Below you can notice  "BMW" car is pushed in both array finalCars and also cars array 
// When we copy array like above it hold the reference of old array and item gets push in both array 
console.log("cars ===>", cars)
console.log("finalCars ===>", finalCars)

console.log("-----------------------------------------------------------------------------------------")
let cars2 = ["Maruti", "Honda", "Suzuki"]
let finalCar2 = [...cars2] //SPREAD operator using for COPYING array
finalCar2.push("AUDI")

// Here "AUDI" is pushed only in finalCar2 array 
console.log("CAR2 =>", cars2)
console.log("FINALCAR2 =>", finalCar2)
