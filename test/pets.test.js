const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pets API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    const testPet1 = {
        name: 'Hunter',
        type: 'dog',
        breed: 'mutt',
        catchPhrase: 'wonderful puppy!!'
    };

    const testPet2 = {
        name: 'Meow',
        type: 'cat',
        breed: 'domestic',
        catchPhrase: 'great cat!'
    };

    it('saves a pet', () => {
        return request.post('/api/pets')
            .send(testPet1)
            .then(({ body }) => {
                assert.equal(body.name, testPet1.name);
            });
    });

    it('gets all pets', () => { 
        const petArray = [testPet1, testPet2].map(pet => {
            return request.post('/api/pets')
                .send(pet)
                .then(res => res.body);
        });
        
        let saved = null;
        return Promise.all(petArray)
            .then(_saved => {
                saved = _saved;
                return request.get('/api/pets');
            })
            .then(res => {
                assert.equal(res.body.name, saved.name);  
                assert.equal(res.body.type, saved.type);
            });
        
    });

    it('gets a pet with id', () => {
        let savedPet = null;
        return request.post('/api/pets')
            .send(testPet1)
            .then(res => {
                savedPet = res.body;
                return request.get(`/api/pets/${savedPet._id}`);
            })
            .then(res => {
                assert.equal(res.body.name, savedPet.name);
                assert.equal(res.body.type, savedPet.type);
                assert.equal(res.body.breed, savedPet.breed);
                assert.equal(res.body.catchPhrase, savedPet.catchPhrase); 
            });
    });

    it('gets pets with type', () => {
        return request.post('/api/pets')
            .send(testPet1)
            .then(() => {
                return request.get('/api/pets?type=dog');
            })
            .then(res => {
                assert.equal(res.body[0].type, 'dog');
            });
    });



    it('saves a rave', () => {
        let savedPet = null;
        return request.post('/api/pets')
            .send(testPet1)
            .then(res => {
                savedPet = res.body;
                return request.get(`/api/pets/${savedPet._id}`);
            })
            .then(() => {
                return request.post('/api/raves')
                    .send({
                        pet: savedPet._id,
                        comment: 'most great cat',
                        email: 'petLover@abc.com'
                    })
                    .then(res => {
                        assert.equal(res.body.email, 'petLover@abc.com');
                    });
            });
    });
});




