/*
    input:- aaabbcddd
    output: a3b2c1d3
*/

let str = "aaabbcddd"

let mapObj = new Map()

for (let i = 0; i < str.length; i++) {
    let itHasKey = mapObj.has(str[i])
    if(!itHasKey){
        mapObj.set(str[i], 1)
    }else{
        valOfKey = mapObj.get(str[i])
        valOfKey += 1
        mapObj.set(str[i], valOfKey)
    }
}

console.log("MAP OBJECT ===>", mapObj)

let output = ''

mapObj.forEach(function (val, key) {
    output += `${key}${val}`
})

console.log("FINAL OUTPUT ===>", output)


