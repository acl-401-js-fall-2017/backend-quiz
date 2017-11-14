const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('<Resource Name Here> API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    let bubdow = null;
    let quag = null;

    beforeEach(() => {
        bubdow = {
            name: 'Bubdow',
            type: 'dog',
            breed: 'Mutt',
            catchPhrase: 'Can I please have a treat, or whatever you are eating?'
        };
        return request.post('/api/pets')
            .send(bubdow)
            .then(res => bubdow = res.body);
    });

    beforeEach(() => {
        quag = {
            name: 'Quagmire',
            type: 'cat',
            breed: 'Tabby',
            catchPhrase: 'Give me belly rubs so that I can attack you'
        };
        return request.post('/api/pets')
            .send(quag)
            .then(res => quag = res.body);
    });

    it('GET all for pets', () => {
        return request.get('/api/pets')
            .then(({ body }) => {
                assert.equal(body.length, 2);
                assert.equal(quag.name, body[0].name);
                assert.equal(bubdow.name, body[1].name);
            });
    });

    //Test that GET /pets?type=<one of the pet types>
    // only returns the one pet of that type

    // it('GET only one type of pet', () => {
    //     return request.get('/api/pets')
    //         .then()
    // });

});