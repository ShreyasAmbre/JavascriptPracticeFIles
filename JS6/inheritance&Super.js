// PARENT CLASS
class Animals{
    name = ''           // Porperties similar like variables but doesnt require let or var keyword
    lifeSpan = 0
    habitate = ''
    
    constructor(a, b, c){ // constructors that always gets call automatically when Class instace in created
        this.name = a
        this.lifeSpan = b
        this.habitate = c
    }
    
    // methods similar like funciton but doesnt require funciton keyword
    getAnimalDetails(){
        // console.log("Animal Name is ==> ", this.name)
        return `FROM PARENT CLASS ===> ${this.name} ${this.lifeSpan}`
    }

    getAnimalNameArrow = ()=>{
        return this.lifeSpan
    }
}

let a1 = new Animals("Lion", 16, 'forest')
let a2 = new Animals("Dogs", 13, 'Home')
// console.log(a1.getAnimalDetails())
// console.log(a2.getAnimalDetails())


// CHILD CLASS
class WildAnimals extends Animals{
    
    constructor(n, f, lf){
        super()
        this.name = n
        this.liveIn = f
        this.lifeSpan = lf // As this property is present in Parent class its important to metion in child class to or else w'ill get undefined
    }

    isWild(){
        return this.liveIn === 'forest'
    }
}
let w1 = new WildAnimals('Lion', 'forest', 16)
console.log("Animal is Wild or not ===>", w1.isWild())
console.log("Animal Details ===>", w1.getAnimalDetails()) 
// getAnimalDetails() is not method of WildAnimals it gives error if we do not add 
// super() method in constructor of child class and Extends Parent Class 
