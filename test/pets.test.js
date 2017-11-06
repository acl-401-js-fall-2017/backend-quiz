const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pets API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    let petArray = [];

    const pet1 = {
        name: 'fluffy',
        type: 'cat',
        breed:'some'
    };
    const pet2 = {
        name: 'bug',
        type: 'dog',
        breed:'other'
    };

    beforeEach( () => {
        return request.post('/api/pets')
            .send([pet1, pet2])
            .then( ({body}) =>{
                petArray = body;
            });
    });

    it('is a test', () => {
        assert.isOk(petArray[0].breed);
        assert.isOk(petArray[1].type);
        assert.notEqual(petArray[0].type, petArray[1].type);
    });

    

});