// const request = require('./request');
// const mongoose = require('mongoose');
// const assert = require('chai').assert;

// describe('Pets API', () => {
    
//     beforeEach(() => mongoose.connection.dropDatabase());

//     const testPet1 = {
//         name: 'Hunter',
//         type: 'dog',
//         breed: 'mutt',
//         catchPhrase: 'wonderful puppy!!'
//     };

   


//     beforeEach(() => {
//         let savedPet = null;
//         return request.post('/api/pets')
//             .send(testPet1)
//             .then(res => {
//                 savedPet = res.body;
//                 return request.get(`/api/pets/${savedPet._id}`);
//             })
//             .then(() => {
//                 return request.post('/api/raves')
//                     .send({
//                         pet: savedPet._id,
//                         comment: 'most great cat',
//                         email: 'petLover@abc.com'
//                     })
//                     .then(res => {
//                         res.body = res;
//                     });
//             });
//     });

//     // it('gets all pets', () => { 
//     //     return request.get('/api/raves')
//     //         .then(res => {
//     //             assert.equal(res.body.comment, 'most great cat');  
//     //             // assert.equal(res.body.type, saved.type);
//     //         });
        
//     // });

// });
