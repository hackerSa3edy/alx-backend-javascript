# 0x06. Unittests in JS

## Overview

This project focuses on implementing unit tests in JavaScript using various testing frameworks and libraries. You'll learn how to write test suites, use assertion libraries, create spies and stubs, handle async testing, and perform integration testing.

## Resources

* [Mocha Documentation](https://mochajs.org/)
* [Chai Documentation](https://www.chaijs.com/)
* [Sinon Documentation](https://sinonjs.org/)
* [Express Documentation](https://expressjs.com/)
* [Request Module](https://github.com/request/request)
* [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

## Tasks

| Task | Files | Description |
|------|-------|-------------|
| 0. Basic test with Mocha and Node assertion library | [package.json](./package.json), [0-calcul.js](./0-calcul.js), [0-calcul.test.js](./0-calcul.test.js) | Introduction to basic testing using Mocha and Node's assert |
| 1. Combining descriptions | [1-calcul.js](./1-calcul.js), [1-calcul.test.js](./1-calcul.test.js) | Learn to group tests and create nested test suites |
| 2. Basic test using Chai assertion library | [2-calcul_chai.js](./2-calcul_chai.js), [2-calcul_chai.test.js](./2-calcul_chai.test.js) | Introduction to Chai assertion library and its syntax |
| 3. Spies | [utils.js](./utils.js), [3-payment.js](./3-payment.js), [3-payment.test.js](./3-payment.test.js) | Using Sinon spies to track function calls |
| 4. Stubs | [4-payment.js](./4-payment.js), [4-payment.test.js](./4-payment.test.js) | Using Sinon stubs to control function behavior |
| 5. Hooks | [5-payment.js](./5-payment.js), [5-payment.test.js](./5-payment.test.js) | Implementing before and after hooks in test suites |
| 6. Async tests with done | [6-payment_token.js](./6-payment_token.js), [6-payment_token.test.js](./6-payment_token.test.js) | Testing asynchronous functions using callbacks |
| 7. Skip | [7-skip.test.js](./7-skip.test.js) | Learning to skip tests under certain conditions |
| 8. Basic Integration testing | [8-api/package.json](./8-api/package.json), [8-api/api.js](./8-api/api.js), [8-api/api.test.js](./8-api/api.test.js) | Introduction to API integration testing |
| 9. Regex integration testing | [9-api/api.js](./9-api/api.js), [9-api/api.test.js](./9-api/api.test.js), [9-api/package.json](./9-api/package.json) | Testing API endpoints with regex patterns |
| 10. Deep equality & Post integration testing | [10-api/api.js](./10-api/api.js), [10-api/api.test.js](./10-api/api.test.js), [10-api/package.json](./10-api/package.json) | Testing POST endpoints and deep equality comparisons |
