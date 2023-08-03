function fruits(a){
    console.log("Fruits ===>", a)
    // here we get value of passed paramter that is "Apple"
}
fruits("Apple")

// Here we know 1st paramter will come and dont know how many other element will come so we use Rest Operator
// REST operator combine all other parameter was passed while calling function into a single array
function fruits2(a, ...n){
    console.log("Fruits2 ===>", a, n)
}
fruits2("Apple", "Banana", "Watermelon", "Pineapple")
// It returns :- Applie, ["Banana", "Watermelon", "Pineapple"]