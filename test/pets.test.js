const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pets API', () => {
    var pet1 = null;
    
    beforeEach(() => {
        mongoose.connection.dropDatabase();
        
        pet1 = {
            name: 'Fido',
            type: 'dog',
            breed: 'retriever',
            catchPhrase: 'woof woof'
        };

    });

    it('gets a pet', () => {

        return request.post('/api/pets')
            .send(pet1)
            .then(res => {
                const pet = res.body;
                assert.equal(pet.name, 'Fido');
            });

    });

});