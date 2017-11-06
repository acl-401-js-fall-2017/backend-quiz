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

        const promiseAllPets = [
            request.post('/api/pets')
                .send(petData[0]),
            request.post('/api/pets')
                .send(petData[1])
        ];

        return Promise.all(promiseAllPets)
            .then(resArray => {
                resArray = resArray.map(res => {
                    return {
                        type: res.body.type,
                        _id: res.body._id
                    };
                });
                assert.ok(resArray);
            });
    });

});