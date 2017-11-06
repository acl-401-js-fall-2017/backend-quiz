const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pets API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    const testPet = {
        name: 'Hunter',
        type: 'dog',
        breed: 'mutt',
        catchPhrase: 'wonderful puppy!!'
    };

    it('saves a pert', () => {
        return request.post('/api/pets')
            .send(testPet)
            .then(({ body }) => {
                assert.equal(body.name, testPet.name);
            });
    });

});


