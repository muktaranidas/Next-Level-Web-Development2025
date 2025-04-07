// OOP
// Inheritense
class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} will sleep for ${numOfHours}`);
        
    }
}
class Student extends Person {
    // name: string;
    // age: number;
    // address: string;

    constructor(name: string, age: number, address: string) {
        // this.name = name;
        // this.age = age;
        // this.address = address;
        super(name,age,address)
    }

    // getSleep(numOfHours: number) {
    //     console.log(`${this.name} will sleep for ${numOfHours}`);
        
    // }
}

const student1 = new Student("Sudipto", 25, "Dhaka");
console.log(student1);



class Teacher extends Person {
    // name: string;
    // age: number;
    // address: string;
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        // this.name = name;
        // this.age = age;
        // this.address = address;
        super(name,age,address)
        this.designation = designation;
    }
    takeClass(numOfClass: number) {
    console.log(`${this.name} will take ${numOfClass}`);
}
    // getSleep(numOfHours: number) {
    //     console.log(`${this.name} will sleep for ${numOfHours}`);
        
    // }
}

const teacher1 = new Teacher("Mukta", 26, "Dhaka", "SWE")
console.log(teacher1);

