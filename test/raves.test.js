const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('<Resource Name Here> API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    let bubdow = null;
    let quag = null;
    let bobReview = null;

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

    beforeEach(() => {
        bobReview = {
            pet: '59ef87b38e62d836e1c0ee48',
            comments: 'best animal, like ever',
            email: 'emaily@mcemailface.com'
        };
        return request.post('/api/pets')
            .send(bobReview)
            .then(res => bobReview = res.body);
    });



    it.skip('GET all raves with pet names and types ', () => {
        return request.get('/api/raves')
            .then(({ body }) => {
                assert.equal(body.length, 1);
            });    
    });

});