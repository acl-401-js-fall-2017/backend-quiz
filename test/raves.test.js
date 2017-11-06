const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('<Resource Name Here> API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());
    // let savedPet1 = null; 
    // let savedPet2 = null;
    
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
    return Promise.all(testPets.map(pet => {
        return request.post('/api/pets')
            .send(pet)
            .then(res => res.body);
    }));

    it('Should save a pet with an id', () => {
       
    });


});