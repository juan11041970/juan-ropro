function add(x, y) {
    return x + y
}
function addFive(x, callback) {
    return callback(5, x)
}

const me = add
const added = addFive(10, me)
console.log(added)

function success() {
    console.log('Success!')
}

function onError() {
    console.log('Error!')
}

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve() //fulfilled
    }, 2000)
    })

promise.then(success)
promise.catch(onError)
