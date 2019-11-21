function AnimalES5(name, energy) {
    let animal = Object.create(AnimalES5.prototype)
    animal.name = name
    animal.energy = energy

    return animal
}

AnimalES5.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`)
}

Dog.prototype = Object.create(AnimalES5.prototype) //Assign Dog to AnimalES5 prototype
Dog.prototype.constructor = Dog

function Dog(name, energy, breed) {
    AnimalES5.call(name, energy)
    this.breed = breed
}

Dog.prototype.bark = function() {
    console.log("WOOF WOOF")
    return "WOOF WOOF"
}

const dog = AnimalES5('Tobi', 10)
module.exports = AnimalES5
module.exports = Dog
