const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('<Resource Name Here> API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());
    const testPet1 = {
        name: 'sam',
        type: 'dog', 
        breed: 'good dog',
        catchPhrase: 'I am a good dog.'
    };
    let testPet2 = {
        name: 'jim',
        type: 'cat', 
        breed: 'good cat',
        catchPhrase: 'I am a good cat.'
    };

    it('Should save a pet with an id', () => {
       
    });


});