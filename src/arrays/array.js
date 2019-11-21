function array() {
    let arr = Object.create(array.prototype)
    Object.defineProperty(arr, 'length', {
        value: 0,
        enumerable: false,
        writable: true
    })


    for (key in arguments) {
        arr[key] = arguments[key]
        arr.length++
    }

    return arr
}

array.prototype.push = function(element) {

    this[this.length] = element
    this.length++
    return this.length
}
array.prototype.pop = function() {

    this.length--
    const elemToRemove = this[this.length]
    delete this[this.length]

    return elemToRemove
}

array.prototype.filter = function(cb) { //cb = callback
    let result = array()

    for (let index in this) {

        if (this.hasOwnProperty(index)) {
            const element = this[index]

            if (cb(element, index)) {
                result.push(element)
            }
        }
    }

    return result
}

const friends = array()
friends.push('Juan')

const fruits = ['apple', 'pear', 'banana']
fruits.map(elem => console.log("mapping1") ||
    console.log("mapping2")
)

