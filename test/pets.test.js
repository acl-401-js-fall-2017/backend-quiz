const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pet Raves API', () => {
    var petDog = null;
    
    beforeEach(() => {
        mongoose.connection.dropDatabase();
        
        petDog =  {
            name: 'Fido',
            type: 'dog',
            breed: 'retriever',
            catchPhrase: 'woof woof'
        };

    });

    it('saves a pet', () => {

        // var petCat = {
        //     name: 'Kitty',
        //     type: 'cat',
        //     breed: 'black',
        //     catchPhase: 'meow meow'
        // };

        return request.post('/api/pets')
            .send(petDog)
            .then(res => {
                const pet = res.body;
                assert.equal(pet.name, 'Fido');
                assert. 
            });

    });

});