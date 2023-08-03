/*
    Spread Operator is mostly used for 
    => Copying array, Merging array, Break Reference
*/
let cars = ["BMW", "Audi", "Mercedes", "Volvo"]

let superCars = ["Lamborgini", "Ferari", "Tesla"]

/*
    BELOW CODE EXPLAIN HOW TO MERGE 2 ARRAYS
*/

let res = [...cars, ...superCars]
console.log("MERGING OF ARRAT using SPREAD OPERATOR ===>", res)

/*
    BELOW CODE EXPLAIN COPYING ARRAY using SPREAD and WHAT IS BREAK REFERENCE
*/

// NORMAL COPYING OF ARRAY
let copy2OfCars = cars
console.log("ORIGINAL ARRAY ===>", cars)
console.log("COPYIED ARRAY ===>", copy2OfCars)
// If I modified COPIED ARRAY automatically Orignal Array also gets Modified to overcome this we use SPREAD Operator
// to BREAK THE REFERENCE of ORIGINAL ARRAY
copy2OfCars.push("Mahendra")

console.log("AFTER MODIFICATION ORIGINAL ARRAY ===>", cars)
console.log("AFTER MODIFICATION COPYIED ARRAY ===>", copy2OfCars)


// BREAKING REFERENCE OF ORIGINAL ARRAY USING SPREAD OPERATOR for COPYING ARRAY
let copy3OfCars = [...cars]
copy3OfCars.push("TATA")

console.log("AFTER MODIFICATION USING SPREAD ORIGINAL ARRAY ===>", cars)
console.log("AFTER MODIFICATION USING SPREAD COPYIED ARRAY ===>", copy3OfCars)
