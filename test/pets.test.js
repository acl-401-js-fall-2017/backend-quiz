const request = require('./request');
const mongoose = require('mongoose').connection;
const assert = require('chai').assert;

describe('Pet API', () => {
    let petData = null;
    
    beforeEach(() => {
        mongoose.dropDatabase();

        petData = [
            {
                name: 'Sam',
                type: 'fish',
                breed: 'Salmon',
                catchPhrase: 'good morning'
            },
            {
                name: 'Timmy',
                type: 'dog',
                breed: 'Boston',
                catchPhrase: 'norma jean'
            }
        ];
        
    });

    // remove me!
    it('Posts two pets, each different type', () => {
        return request.post('/api/pets')
            .send(petData)
            .then(res => assert.ok(res.body));
    });

});