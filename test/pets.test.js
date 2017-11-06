const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;
const Pet = require('../lib/models/pet');
const Rave = require('../lib/models/rave');

describe('Pets API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    beforeEach(() => {
        const dog = new Pet({
            name: 'DogFriend123',
            type: 'dog',
            breed: 'Goodboy',
            catchPhrase: 'Is there any pizza left?'
        });

        const cat = new Pet({
            name: 'CatBuddy456',
            type: 'cat',
            breed: 'Normal',
            catchPhrase: '...'
        });

        let dogId = null;
        let catId = null;

        return request.post('/api/pets/').send(dog)
            .then( sent => {
                dogId = sent.body._id;
                return request.post('/api/pets/').send(cat);
            })
            .then( sent => {
                catId = sent.body._id;
            })
            .then( () => {
                const bobRaveOne = { 
                    name: dogId,
                    comments: 'it stinks',
                    email: 'bob@aol.com'
                };

                return request.post('/api/raves/').send(bobRaveOne);
            })
            .then( () => {
                const bobRaveTwo = new Rave({ 
                    name: catId,
                    comments: 'I like it!!!',
                    email: 'bob@aol.com'
                });

                return request.post('/api/raves/').send(bobRaveTwo);
            })
            .then( () => {
                const jeffRaveOne = new Rave({ 
                    name: dogId,
                    comments: 'very good',
                    email: 'jeff@aol.com'
                });

                return request.post('/api/raves/').send(jeffRaveOne);
            })
            .then( () => {
                const jeffRaveTwo = { 
                    name: catId,
                    comments: 'no thank you',
                    email: 'jeff@aol.com'
                };

                return request.post('/api/raves/').send(jeffRaveTwo);
            });
    });


    // 1. POST two pets, each of a different type
    // 1. POST two raves from a single user emails to both of the pets from prior step.
    // 1. POST two raves from a different user email to both of the pets from first step
    // 1. **Test** that `GET` `/pets` returns both pets (simple array.length and name check for 
    // each pet okay)
    // 1. **Test** that `GET` `/pets?type=<one of the pet types>` only returns the one pet of that type
    // 1. **Test** that `GET` `/raves` returns all four raves plus pet name and type
    // 1. **Test** that `GET` `/pets/:id` for one of the pets returns all fields and has the two raves

    it('should return both pets that were posted', () => {
        return request.get('/api/pets/')
            .then( got => {
                assert.equal(got.length, 2);
            });
    });

    // remove me!
    it('is a test', () => {
        assert.isOk(request);
    });

});