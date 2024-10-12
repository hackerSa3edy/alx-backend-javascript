# Project: 0x03. ES6 Data Manipulation

## Description

This project focuses on data manipulation using ES6 features. It covers various topics such as arrays, typed arrays, maps, sets, and weak maps. The goal is to understand how to efficiently manipulate data structures in JavaScript using modern ES6 syntax and features.

## Resources

### Read or watch

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Tasks

| Task                         | File                                                     | Description                                                        |
| ---------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| 0. Basic list of objects     | [0-get_list_students.js](./0-get_list_students.js)       | Create and return an array of objects representing students.       |
| 1. More mapping              | [1-get_list_student_ids.js](./1-get_list_student_ids.js) | Return an array of student IDs from a list of student objects.     |
| 2. Filter                    | [2-get_students_by_loc.js](./2-get_students_by_loc.js)   | Filter and return a list of students based on their location.      |
| 3. Reduce                    | [3-get_ids_sum.js](./3-get_ids_sum.js)                   | Compute and return the sum of all student IDs in a list.           |
| 4. Combine                   | [4-update_grade_by_city.js](./4-update_grade_by_city.js) | Update the grades of students in a specific city.                  |
| 5. Typed Arrays              | [5-typed_arrays.js](./5-typed_arrays.js)                 | Create an Int8 typed array and set a value at a specific position. |
| 6. Set data structure        | [6-set.js](./6-set.js)                                   | Create and return a set of unique values from an array.            |
| 7. More set data structure   | [7-has_array_values.js](./7-has_array_values.js)         | Check if all elements in an array are present in a set.            |
| 8. Clean set                 | [8-clean_set.js](./8-clean_set.js)                       | Filter and clean a set of strings by removing a specified prefix.  |
| 9. Map data structure        | [9-groceries_list.js](./9-groceries_list.js)             | Create and return a map of grocery items with their quantities.    |
| 10. More map data structure  | [10-update_uniq_items.js](./10-update_uniq_items.js)     | Update the quantities of unique items in a grocery map.            |
| 11. Weak link data structure | [100-weak.js](./100-weak.js)                             | Track the number of times an endpoint is queried using a WeakMap.  |

## Setup

To set up the project, you need to have Node.js and npm installed. Then, install the dependencies by running:

```sh
npm install
```

## Running Tests

To run the tests, use the following command:

```sh
npm test
```

## Linting

To check for linting errors, use the following command:

```sh
npm run lint
```

To fix linting errors, use:

```sh
npm run lint -- --fix
```

## Babel

This `babel.config.js` file configures Babel to use the `@babel/preset-env` preset, targeting the current version of Node.js. This allows you to write modern JavaScript code and have it automatically transpiled to a version that is compatible with the current Node.js environment.

## ESLint

ESLint is used to ensure code quality and consistency. The configuration for ESLint is in the `.eslintrc.js` file.

## Author

This project is part of the ALX Software Engineering program.
