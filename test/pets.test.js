const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pet API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    
    it('is a test', () => {
        assert.isOk(request);
    });

});



const assert = require('chai').assert;
const Studio = require('../../lib/models/studio');

describe('Studio model', () => {
    it('check if studio model is good', () => {
        const studio = new Studio({
            name: 'Paramount Pictures',
            address: {
                city: 'Hollywood',
                state: 'California',
                country: 'USA'
            }
        });
        assert.equal(studio.validateSync(), undefined);
    });

    it('checks required fields', () => {
        const studio = new Studio({ });
        const { errors } = studio.validateSync();
        assert.equal(errors.name.kind, 'required');
    });
});