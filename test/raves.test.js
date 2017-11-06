const request = require('./request');
const mongoose = require('mongoose').connection;
const assert = require('chai').assert;

describe('Rave API', () => {
    let raveData = null;
    
    beforeEach(() => {
        mongoose.dropDatabase();

        raveData = [
            {
                pet: 'Sam',
                comments: 'coolest pet ever',
                email: 'art@coolpets.com',
            },
            {
                pet: 'Timmy',
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