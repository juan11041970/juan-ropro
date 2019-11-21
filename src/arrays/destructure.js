const user = {
    name: 'Juan Alvarado',
    handle: '@westcoast',
    location: 'Santa Clara'
};
// const user = {};
// user.name = 'Juan'
// user.handle = '@wesestcoast'
// user.location = 'Santa Clara, CA'

const {name: newName, handle, location } = user

console.log(newName)
console.log(handle)
console.log(location)

function logUser(userName, userOrg) {
    console.log(`userName: ${userName}`)
    console.log(`userOrg: ${userOrg}`)
}

function logUserDestructured({userName, userOrg = 'Payments'}) {
    console.log(`userName-D: ${userName}`)
    console.log(`userOrg-D: ${userOrg}`)
}

logUserDestructured( { userOrg: "billing-D", userName: "juan-D"} )
logUserDestructured( { userName: "juan-D"} )

logUser("juan", "Billing")

function formatMessage(name, id, avatar) {
    return {
        name, id, avatar, timestamp: Date.now(),
        save() {
            console.log ("saving message")
        }
    }
}

formatMessage("Juan", "westcoast", "go-blue").save()

var add = (x, y) => {
    return x + y
}

console.log(add(2,2))
/**
 .then(param) => {
 this.setState( (param) => console.log('Log') || ({

 }));
 })
 }
 **/
