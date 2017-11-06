const request = require('./request');
const mongoose = require('mongoose').connection;
const assert = require('chai').assert;

describe('Rave API', () => {
    let raveData = null;
    
    beforeEach(() => {
        mongoose.dropDatabase();

        raveData = [
            {
                pet: '5a00defa9ada5f7c826f3395',
                comments: 'coolest pet ever',
                email: 'art@coolpets.com',
            },
            {
                pet: '5a00df2b1faf7f7c912c73ad',
                comments: 'coolest pet ever',
                email: 'art@coolpets.com',
            },
        ];
        
    });

    // remove me!
    it('Posts two raves, from single email', () => {

        const promiseAllRaves = [
            request.post('/api/raves')
                .send(raveData[0]),
            request.post('/api/raves')
                .send(raveData[1])
        ];

        return Promise.all(promiseAllRaves)
            .then(resArray => {
                resArray = resArray.map(res => {
                    return {
                        email: res.body.email,
                        _id: res.body._id
                    };
                });
                assert.ok(resArray);
            });
    });

});