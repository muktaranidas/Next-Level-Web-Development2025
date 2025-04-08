"use strict";
// OOP
//  Class
class Animal {
    //    public name: string; //property
    //    public species: string;
    //    public sound: string;
    // constructor
    // parameter properties
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    // anonimous function
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
// instance
const dog = new Animal("german Shepard Bhai", "Dog", "Ghew Ghew");
const cat = new Animal("Sudipto", "Cat", "Meaw Meaw");
cat.makeSound();
