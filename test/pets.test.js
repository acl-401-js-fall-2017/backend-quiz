const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;
const Pet = require('../lib/models/pet');
const Rave = require('../lib/models/rave');

//TODO: make routes return error when applicable 
describe('Pets / Raves API', () => {
    
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
                    pet: dogId,
                    comments: 'it stinks',
                    email: 'bob@aol.com'
                };

                return request.post('/api/raves/').send(bobRaveOne);
            })
            .then( () => {
                const bobRaveTwo = new Rave({ 
                    pet: catId,
                    comments: 'I like it!!!',
                    email: 'bob@aol.com'
                });

                return request.post('/api/raves/').send(bobRaveTwo);
            })
            .then( () => {
                const jeffRaveOne = new Rave({ 
                    pet: dogId,
                    comments: 'very good',
                    email: 'jeff@aol.com'
                });

                return request.post('/api/raves/').send(jeffRaveOne);
            })
            .then( () => {
                const jeffRaveTwo = { 
                    pet: catId,
                    comments: 'no thank you',
                    email: 'jeff@aol.com'
                };

                return request.post('/api/raves/').send(jeffRaveTwo);
            });
    });


    

    it('should return both pets that were posted', () => {
        return request.get('/api/pets/')
            .then( got => {
                assert.equal(got.body.length, 2);
            });
    });

    it('should get a pet by chosen type', () => {
        return request.get('/api/pets/getPet?type=cat')
            .then( got => {
                assert.equal(got.body.type, 'cat');
            });
    });

    it('should get all raves from db plus pet name and type', () => {
        return request.get('/api/raves/')
            .then( got => {
                //TODO: remember how to format [0].foo.bar in asserts
                const testName = got.body[0].pet.name;
                const testType = got.body[0].pet.type;
                assert.equal(got.body.length, 4);
                assert.ok(testName);
                assert.ok(testType);
            });
    });

    // it('should return  ')

    // 1. **Test** that `GET` `/pets/:id` for one of the pets returns all fields and has the two raves


});