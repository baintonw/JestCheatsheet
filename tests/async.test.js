// const fetchData = (callback) => {
//     setTimeout(callback, 2000)
// };



// test('the data is peanut butter', done => {
//     function callback(data) {
//       try {
//         expect(data).toBe('peanut butter');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     }
  
//     fetchData(callback);
//   });

//Promise based solution

// test('the data is peanut butter', () => {
//     return fetchData().then(data => {
//       expect(data).toBe('peanut butter');
//     });
//   });

// I clearly have not yet figured out async