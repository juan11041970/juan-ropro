import isValidUserId from './isValidUserId'
const assert = require(`assert`)

describe(`Basic mocha test`, () => {
    it(`Retuns length of string`, () => {
        assert.equal(`hello`.length, 5)
    })
    it(`Verifies if user is valid`, () => {
        const isValid = isValidUserId([`abc123`, `xyz321`], `abc123`)
        assert.equal(isValid, true)
    })
})

// describe(`Test if user is valid`, () => {
//     it(`Verifies if user is valid`, () => {
//         const isValid = controller.isValidUserId([`abc123`, `xyz321`], `abc123`)
//         assert.equal(isValid, true)
//     })
// })
