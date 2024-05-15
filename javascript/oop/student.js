//Superclass 
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    isMajor() {
        return this.age >= 21
    }
}
// Subclass 
class Student extends Person {
    constructor(name, age, course) {
        super(name, age) // call superclass constructor
        this.course = course
    }
    setCourse(newCourse) {
        this.course = newCourse;
    }
}

let p1 = new Person("Ellison", 60)   
console.log(p1)

let s = new Student("Mark", 20, "MS CS")
s.setCourse("MS IT")
console.log(s)
console.log(s.isMajor())

