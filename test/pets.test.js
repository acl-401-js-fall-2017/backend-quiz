const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pets API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    let petArray = [];

    const pet1 = {
        name: 'fluffy',
        type: 'cat',
        breed:'some'
    };
    const pet2 = {
        name: 'bug',
        type: 'dog',
        breed:'other'
    };

    let review1 = null;
    let review2 = null;
    let review3 = null;
    let review4 = null;

    beforeEach( () => {
        return request.post('/api/pets')
            .send([pet1, pet2])
            .then( ({body}) =>{
                petArray = body;
                review1 = {
                    pet: petArray[0]._id,
                    comments:'great pet!',
                    email:'review@gmail.com'
                };
                review2 = {
                    pet: petArray[1]._id,
                    comments:'great pet too!',
                    email:'review@gmail.com'
                };
                review3 = {
                    pet: petArray[1]._id,
                    comments:'great pet dif!',
                    email:'reviewsome@gmail.com'
                };
                review4 ={
                    pet: petArray[1]._id,
                    comments:'great pet diftoo!',
                    email:'reviewother@gmail.com'
                };
            });
    });

    it('checks that both pets were posted correctly', () => {
        assert.isOk(petArray[0].breed);
        assert.isOk(petArray[1].type);
        assert.notEqual(petArray[0].type, petArray[1].type);
    });

    it('checks that get pets works correctly', ()=>{
        return request.get('/api/pets')
            .then( ({body}) =>{
                assert.equal(body.length,2);
                assert.deepEqual(body[0].name, 'fluffy');
                assert.deepEqual(body[1].name, 'bug');
            });
    });

    it('checks that get pets by type works correctly', ()=>{
        return request.get('/api/pets?type=dog')
            .then( ({body}) =>{
                assert.deepEqual(body.name, 'bug');
            });
    });
    
    it('tests that raves can be posted correctly', ()=>{
        return request.post('/api/raves')
            .send(review1)
            .then(({body}) => {
                assert.ok(body.comments);
                return request.post('/api/raves')
                    .send(review2)
                    .then(({body}) => {
                        assert.ok(body.comments);
                    });
            });
    });

    it('tests that raves can be posted correctly from different users', ()=>{
        return request.post('/api/raves')
            .send(review3)
            .then(({body}) => {
                assert.ok(body.comments);
                return request.post('/api/raves')
                    .send(review4)
                    .then(({body}) => {
                        assert.ok(body.comments);
                    });
            });
    });

});