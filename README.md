## Jest Cheatsheet  
---

 
This is mainly taken from [Jest starting docs][getting started]

### Setup

1. Create a new js file
2. Install Jest  
   
        yarn add jest  

    or  

        npm install jest
3. Create a JavaScript file called app.js (or whatever you want), and create a test function. Export that function. 
   
        function sum(a,b) {
            return a + b;
        };
        module.exports = sum
4. Create a test version of that file (e.g. app.test.js), and import the function.  

        const sum = require('./sum.js');
5. Write logic for actual test.  

        test('adds 1 + 2 to equal 3', () => {
            expect(sum(1,2)).toBe(3);
        })
6. Add the following to your `package.json`:  

        {
            "scripts": {
                "test": "jest"
            }
        }
7. Run `yarn test` or `npm run test` to run the tests



[getting started]: https://jestjs.io/docs/en/getting-started
