const request = require('../request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pet API', () => {
    
    beforeEach(() => {
        mongoose.connection.dropDatabase();
    });

    it('Posts a new Pet', () => {
        const rawData = [
            {
                name: 'Buddy',
                type: 'dog',
                breed: 'Golden Retriever',
                catchphrase: 'Go Buddy!'
            },
            {
                name: 'Honey',
                type: 'cat',
                breed: 'Calico',
                catchphrase: 'Go Honey!'
            }
        ];
        return request.post('/api/pets')
            .send(rawData[0], rawData[1])
            .then(res => {
                const [pet1, pet2] = res.body;
                assert.ok(pet1._id);
                assert.ok(pet2._id);
            });   
    });

    it('returns a 400 for invalid model', () => {
        return request.get('/api/pet')
            .then(
                () => { throw new Error('Invalid pet');},
                err => {
                    assert.equal(err.status, 400);
                });
    });
});