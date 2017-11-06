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
    let raves = [
        {
            pet: null,
            comment: 'adorable but barks too loud',
            email: null
        },
        {
            pet: null,
            comment: 'Why won\'t he love me!?',
            email: null
        }
    ];

    describe('POST', () => {

        let savedPets = null;
        // let savedRaves = null;

        it('posts two pets', () => {

            const savePets = [
                request.post('/api/pets').send(pets[0]).then(res => res.body),
                request.post('/api/pets').send(pets[1]).then(res => res.body)
            ];
            return Promise.all(savePets)
                .then(res => {
                    savedPets = res;
                    res.forEach(pet => assert.ok(pet._id));
                });
        });

        it('posts two raves from a single user: should fail', () => {

            raves[0].pet = savedPets[0]._id;
            raves[1].pet = savedPets[1]._id;
            raves[0].email = raves[1].email = 'tri@bro.com';

            const saveRaves = [
                request.post('/api/raves').send(raves[0]).then(res => res.body),
                request.post('/api/raves').send(raves[0]).then(res => res.body)
            ];
            return Promise.all(saveRaves)
                .then(res => {
                    res.forEach(rave => assert.ok(rave._id));
                });
        });
    });

});