const {assert} = require('chai');
const Rave = require('../../lib/models/rave');

describe.only('Rave Model', () => {
    const rave = new Rave ({
        pet: 'as12da55sd342afsg',
        comments: 'honey was a good cat',
        email: 'good@goodemail.com'
    });

    it('should validate model', () => {
        const validate = rave.validateSync();
        assert.equal(validate, undefined);
    });
});