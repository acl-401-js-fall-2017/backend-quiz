const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('<Resource Name Here> API', () => {
    
    before(() => mongoose.connection.dropDatabase());

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

        it('posts two raves from different users', () => {

            raves[0].pet = savedPets[0]._id;
            raves[1].pet = savedPets[1]._id;
            raves[0].email = 'tri@bro.com';
            raves[1].email = 'mike@bro.com';

            const saveRaves = [
                request.post('/api/raves').send(raves[0]).then(res => res.body),
                request.post('/api/raves').send(raves[1]).then(res => res.body)
            ];
            return Promise.all(saveRaves)
                .then(res => {
                    res.forEach(rave => assert.ok(rave._id));
                });
        });
    });

    describe('GET', () => {
        it('gets both pets', () => {
            return request.get('/api/pets')
                .then(({body: res}) => {
                    assert.ok(res.length === 2);
                    let names = res.map(pet => pet.name);
                    assert.ok(names.includes('Milk'));
                    assert.ok(names.includes('Oreo'));
                });
        });

        it('gets pets by type', () => {
            return request.get('/api/pets?type=dog')
                .then(({body: res}) => {
                    assert.ok(res[0].type === 'dog');
                });
        });

        it('gets all raves', () => {
            return request.get('/api/raves')
                .then(({body: res}) => {
                    assert.ok(res.length === 2);                    
                    let names = res.map(rave => rave.pet.name);
                    let types = res.map(rave => rave.pet.type);
                    assert.ok(names.includes('Milk'));
                    assert.ok(names.includes('Oreo'));
                    assert.ok(types.includes('dog'));
                    assert.ok(types.includes('cat'));
                });
        });
    });
});