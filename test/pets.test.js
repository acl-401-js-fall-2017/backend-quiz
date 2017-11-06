const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pet API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    const pet1 = {
        name: 'Shadow',
        petType: 'dog',
        breed: 'Australian Shepherd Mix',
        catchphrase: 'Frisbee is my middle name'
    };
    const pet2 = {
        name: 'Harley',
        petType: 'cat',
        breed: 'catlike',
        catchphrase: 'I purr like a motorcycle'
    };


    

    it('saves a pet', () => {
        return request.post('/api/pets')
            .send(pet1)
            .then(({ body }) => {
                assert.equal(body.name, 'Shadow');
            });
    });

    it('saves a pet', () => {
        return request.post('/api/pets')
            .send(pet2)
            .then(({ body }) => {
                assert.equal(body.name, 'Harley');
            });
    });

    it.only('gets both pets', () => {

        let petCollection = [pet1, pet2].map(item => {
            return request.post('/pets')
                .send(item)
                .then(res => res.body);
        });

        let saved = null;
        return Promise.all(petCollection)
            .then(_saved => {
                saved = _saved;
                return request.get('/api/pets');
            })
            .then(res => {
                assert.deepEqual(res.body, saved);
            // assert.equal(res.body[1].pob, 'Concord CA');
            // assert.equal(res.body[1].dob.slice(0, 4), 1956);
            // assert.equal(res.body[1].name, 'Tom Hanks');
            });

    });
});