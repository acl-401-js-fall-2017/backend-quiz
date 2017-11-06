const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('<Resource Name Here> API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    let pets = [
        {
            name: 'Milk',
            type: 'dog',
            breed: 'Maltese',
            catchPhrase: 'Play with me!'
        },
        {
            name: 'Oreo',
            type: 'cat',
            breed: 'mixed',
            catchPhrase: 'Put me down and give me food.'
        }
    ];

    describe('Pets', () => {
        it('posts two pets', () => {

            const savePets = [
                request.post('/api/pets').send(pets[0]).then(res => res.body),
                request.post('/api/pets').send(pets[1]).then(res => res.body)
            ];

            return Promise.all(savePets)
                .then(res => {
                    res.forEach(pet => assert.ok(pet._id));
                });
        });
    });

});