const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Pet API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    const pet = [{
        name: 'Shadow',
        petType: 'dog',
        breed: 'Australian Shepherd Mix',
        catchphrase: 'Frisbee is my middle name'
    },
    {
        name: 'Harley',
        petType: 'cat',
        breed: 'catlike',
        catchphrase: 'I purr like a motorcycle'
    }
    ];
    

    it.only('saves a pet', () => {
        return request.post('/api/pets')
            .send(pet[0])
            .then(({ body }) => {
                assert.equal(body.name, 'Shadow');
            });
    });
    

});



// const assert = require('chai').assert;
// const Studio = require('../../lib/models/studio');

// describe('Studio model', () => {
//     it('check if studio model is good', () => {
//         const studio = new Studio({
//             name: 'Paramount Pictures',
//             address: {
//                 city: 'Hollywood',
//                 state: 'California',
//                 country: 'USA'
//             }
//         });
//         assert.equal(studio.validateSync(), undefined);
//     });

//     it('checks required fields', () => {
//         const studio = new Studio({ });
//         const { errors } = studio.validateSync();
//         assert.equal(errors.name.kind, 'required');
//     });
// });