class Animals{
    name = ''           // Porperties similar like variables but doesnt require let or var keyword
    lifeSpan = 0
    
    constructor(a, b){ // constructors that always gets call automatically when Class instace in created
        this.name = a
        this.lifeSpan = b
    }
    
    // methods similar like funciton but doesnt require funciton keyword
    getAnimalDetails(){
        // console.log("Animal Name is ==> ", this.name)
        return `${this.name} ${this.lifeSpan}`
    }

    getAnimalNameArrow = ()=>{
        // this represent to complete class lexical scop with its property and methods
        console.log("ARROW FUNCTION inSIDE CLASS ===>", this) 
        return this.lifeSpan
    }
}

let a1 = new Animals("Lion", 16)
console.log(a1.name)
console.log(a1.lifeSpan)
console.log(a1.getAnimalDetails())
console.log(a1.getAnimalNameArrow())