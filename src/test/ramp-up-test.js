//import { assert } from 'assert'
const assert = require('assert')
const { expect } = require(`chai`)
let AnimalES5Handle = require(`../../src/objects/AnimalEs5`)
let Dog = require(`../../src/objects/AnimalEs5`)
//import {animal}  from '../../src/objects/Animal'

describe(`Basic mocha test`, () => {
    it(`Retuns length of string`, () => {
        assert.equal(`hello`.length, 5)
    })
    it(`Testing Animal class`, () => {
        console.log("Testing Animal")
        const dog = new Dog(`Tobi`, 10, `Shi Tzu`)

       assert(dog instanceof AnimalES5Handle)
        const bark = dog.bark()
        assert.equal(`WOOF WOOF`, bark)
    })
    it(`should return -1`, () => {
        assert.equal([1, 2, 3].indexOf(4), -1)
    })
})

