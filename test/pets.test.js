const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('<Resource Name Here> API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    it('Should save a pet with an id', () => {
        return request.post()
        assert.isOk(request);
    });

});