const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('<Resource Name Here> API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());
    let savedRave1 = null; 
    let savedRave2 = null;
    
    let savedPetsArray = null;
    const testPet1 = {
        name: 'sam',
        type: 'dog', 
        breed: 'good dog',
        catchPhrase: 'I am a good dog.'
    };
    const testPet2 = {
        name: 'jim',
        type: 'cat', 
        breed: 'good cat',
        catchPhrase: 'I am a good cat.'
    };
    const testPets = [testPet1, testPet2];

    beforeEach(() => {
        return Promise.all(testPets.map(pet => {
            return request.post('/api/pets')
                .send(pet)
                .then(res => res.body);
        }))
            .then( savedPets => {
                savedPetsArray = savedPets;
                savedRave1 = {
                    pet: savedPetsArray[0]._id,
                    comments: 'I love this pet!',
                    email: 'smoyo@me.com'
                };
                savedRave2 = {
                    pet: savedPetsArray[1]._id,
                    comments: 'this is the best test!',
                    email: 'smoyo@me.com'
                };


            });
    });

    it('Should save a rave with an id', () => {
        return request.post('/api/raves')
            .send(savedRave1)
            .then(res => res.body)
            .then(savedRave => {
                assert.isOk(savedRave._id);
                assert.deepEqual(savedRave.comments, savedRave1.comments);
            });
    });

    it('Should save a  2 raves from a single email address to two pets', () => {
        const testRaves = [savedRave1, savedRave2];
        return Promise.all(testRaves.map(rave => {
            return request.post('/api/raves')
                .send(rave)
                .then(res => res.body);
        }))
            .then( savedRaves => {
                assert.isOk(savedRaves[0]._id);
                assert.isOk(savedRaves[1]._id);
                assert.deepEqual(savedRaves[0].comments, savedRave1.comments);
                assert.deepEqual(savedRaves[1].comments, savedRave2.comments);
            });
    });

    // it('should get all raves', () => {
    //     const raveArray = [savedRave1, savedRave2];
    //     return Promise.all(raveArray.map( rave => {
    //         return request.post('/api/raves')
    //             .send(rave)
    //             .then( res => res.body);
    //     }))
    //         .then(()=> {
    //             return request.get('/api/raves');
    //         });

    // });





});