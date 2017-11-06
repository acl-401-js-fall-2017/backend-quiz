const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pets API', () => {

    
    beforeEach(() => mongoose.connection.dropDatabase());
    
    const animals = {
        name: 'Milo',
        type: ['cat','dog','bird','fish','snake'],
        breed: 'Lab',
        catchPhrase: {
            type: 'Go, Boy!'
        }
    };

    it('saves a pet with an id', () => {        
        return request.post('/api/pets')
            .send(animals)
            .then(res => {
                const pet = res.body;
                assert.isOk(pet._id);
                assert.equal(pet.name, animals.name);
            });
    });

    it('gets all pets by name', () => {
        
        const pet1 = {
            name: 'Milo',
            type: ['dog', 'fish']
        };
        
        const pet2 = {
            name: 'Swimmer',
            type: ['dog', 'fish']
        };

        const petArray = [pet1, pet2].map(pet => {
            return request.post('/api/pets')
                .send(pet)
                .then(res => res.body);
        });
        let saved = null;
        return Promise.all(petArray)
            .then(_saved => {
                saved = _saved;
                return request.get('/api/fpets');
            })
            .then(res => {
                assert.equal(res.body.name, saved.name);  
            });
    });

});