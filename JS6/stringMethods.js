/*
    str.include() => return true if it finds the given string and it strictly TYPE CASING
*/


alert("asxasxasxasx")

let str = "My Name is Mr. Shreyas Ambre"
let arr = ["BMW", "Audi", "Mercedes", {name: 'Shreyas', age: 26}]

console.log("STR INCLUDES STRICTLY TYPECASE 'MR'===>", str.includes('MR')) // return false
console.log("STR INCLUDES STRICTLY TYPECASE 'Mr'===>", str.includes('Mr')) // return true

console.log("STR INCLUDES ALSO USEFULL FOR ARRAY ===> ", arr.includes("BMW")) // return true

let phoneNo = '+91 8087024368 001'

console.log("STR STARTSWITH ===>", phoneNo.startsWith('+9852')) // return false
console.log("STR STARTSWITH ===>", phoneNo.startsWith('+91 ')) // Note it also check for White Space // return true



console.log("STR ENDSWITH ===>", phoneNo.endsWith('001')) // return true
console.log("STR ENDSWITH ===>", phoneNo.endsWith('1001')) // return false