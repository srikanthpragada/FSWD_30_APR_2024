class Person {
    constructor(name, age) {
        // create properties and store values
        this.name = name
        this.age = age
        let company = "Google"  // local variable 
    }
    // methods 
    isMajor() {
        return this.age >= 21
    }
}


let p1 = new Person("Ellison", 60)   // Create an object 
p1.age = 19     // update property 
p1.email = "ellison@oracle.com"    // create a new property

console.log(p1)
console.log(p1.isMajor())

let p2 = new Person()
//console.log(p2)



