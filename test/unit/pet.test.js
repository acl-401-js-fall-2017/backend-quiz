const {assert} = require('chai');
const Pet = require('../../lib/models/pet');

describe('Pet Model', () => {
    const pet = new Pet({
        name: 'Buddy',
        type: 'dog',
        breed: 'Golden Retriever',
        catchphrase: 'Go Buddy!'
    });
    
    it('should validate model', () => {
        const validate = pet.validateSync();
        assert.equal(validate, undefined);
    });

    it('required fields are valid', () => {
        const requiredPet = new Pet({});
        
        const errors = requiredPet.validateSync().errors;
        assert.equal(errors.name.kind, 'required');
        assert.equal(errors.type.kind, 'required');
    });
});