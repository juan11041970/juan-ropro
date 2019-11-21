export default class Animal {

    constructor(name, energy) {

        if (this instanceof Animal == false) {
            console.warn("Forgot new keyword")
        } else {
            console.log("Has new")
        }

        this.name = name
        this.energy = energy
    }

    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

class Dog extends Animal {
    constructor (name, energy, breed, weight)  {
        super(name, energy)
        this.breed = breed
        this._weight = weight
    }
    eat (amount) {
        console.log(`${this.name} is eating`)
        this.energy += amount
    }

    sleep (length) {
        console.log(`${this.name} is sleeping`)
        this.energy += length
    }
    bark (length) {
        console.log(`Woof Woof`)
        this.energy += length
    }

    get weight() {
        return this._weight
    }
}

const tobi = new Dog(`Tobi`, 10, `Shi Tzu`, 25)
console.log(`${tobi.name} weighs ${tobi.weight} lbs`)
console.log(`${tobi.name} has ${tobi.energy} energy`)


const animal = new Animal(`Tobi`, 10)
animal.age = 20
console.log(animal.name)
console.log(animal.age)
console.log(Object.getPrototypeOf(animal))

const dog = new Dog(`Tobi`, 20, `Shih tzu`)
dog.bark()



// for( let key in animal) {
//     // if(dog.hasOwnProperty(key)) {
//         console.log(`Key ${key} value ${animal[key]}`)
//     // }
// }
