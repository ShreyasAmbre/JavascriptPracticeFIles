let fruits = new Map([
    ["apple", 500],
    ["orange", 150],
    ["mango", 650],
])

console.log("Original Map =>", fruits)


// add element to map
// set() method is used to add or modify the MAP element
fruits.set('pineapple', 600) //element added
fruits.set('apple', 60) //element modify
console.log("after Set new element in Map =>", fruits)


// get value from MAP using KEY
console.log("APPLE STOCK ==>", fruits.get("apple"))


// to check the the length of the MAP
console.log("SIZE of MAP =>", fruits.size)

// has() method is used to check KEY is present or not in MAP using KEY
console.log("Find Mango ===>", fruits.has("mango")) // this method is strictly Type Casing

// delete() is used to remove element from MAP using key
console.log("DELETE element", fruits.delete("apple"))
console.log("after delete element in Map =>", fruits)

for (const i of fruits.keys()) {
    console.log(i)
}

for (const i of fruits.values()) {
    console.log(i)
}

for (const i of fruits.entries()) {
    console.log(i)
}


// clear() method used to remove all element from MAP
console.log("CLEAR method in MAP =>", fruits.clear())
console.log("after delete element in Map =>", fruits)
