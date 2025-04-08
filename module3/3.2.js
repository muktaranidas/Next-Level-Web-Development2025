"use strict";
// OOP
// Inheritense
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numOfHours) {
        console.log(`${this.name} will sleep for ${numOfHours}`);
    }
}
class Student extends Person {
    // name: string;
    // age: number;
    // address: string;
    constructor(name, age, address) {
        // this.name = name;
        // this.age = age;
        // this.address = address;
        super(name, age, address);
    }
}
const student1 = new Student("Sudipto", 25, "Dhaka");
console.log(student1);
class Teacher extends Person {
    constructor(name, age, address, designation) {
        // this.name = name;
        // this.age = age;
        // this.address = address;
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(numOfClass) {
        console.log(`${this.name} will take ${numOfClass}`);
    }
}
const teacher1 = new Teacher("Mukta", 26, "Dhaka", "SWE");
console.log(teacher1);
