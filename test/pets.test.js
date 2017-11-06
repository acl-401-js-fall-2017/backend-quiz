const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;
const Pet = require('../../lib/models/pet');



describe('<Resource Name Here> API', () => {
    
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

        return request.post('/api/pets/').send(dog)
            .then( () => request.post('/api/pets/').send(cat));
    });

    beforeEach(() => {
        const dogId = null;
        const catId = null;
    });

    // 1. POST two pets, each of a different type
    // 1. POST two raves from a single user emails to both of the pets from prior step.
    // 1. POST two raves from a different user email to both of the pets from first step
    // 1. **Test** that `GET` `/pets` returns both pets (simple array.length and name check for 
    // each pet okay)
    // 1. **Test** that `GET` `/pets?type=<one of the pet types>` only returns the one pet of that type
    // 1. **Test** that `GET` `/raves` returns all four raves plus pet name and type
    // 1. **Test** that `GET` `/pets/:id` for one of the pets returns all fields and has the two raves

    // remove me!
    it('is a test', () => {
        assert.isOk(request);
    });

});