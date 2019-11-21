function animal(name, energy) {
    let animal = {}
    animal.name = name
    animal.energy =  energy

    animal.eat = function(amount) {
        console.log(`${this.animal.name} is eating `)
        this.energy += amount
    }

    return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
