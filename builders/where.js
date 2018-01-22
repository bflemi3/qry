const { pipe, toPairs, cond, is } = require('ramda'),
    { assert, join, resolveFields, prepend } = require('../common'),
    builder = require('../builder');

// const resolveConditions = pipe(
//     cond([
//         [is(Object), reduce((acc, [key, value]) => )]
//     ])
//     toPairs,
//     reduce((acc, [key, value]) => )
// );

//reduce((acc, condition) => join(' and ', [acc, ]), '');

/**
 *
 * @param {...Object} conditions
 *
 * @example
 *      - where({ name: 'bob', age: 33 }) --> where name = 'bob' and age = 33
 *      - where({ or: { name: 'bob', age: 33}} --> where name = 'bob' or age = 33
 *      - where({ and: { name: 'bob', age: 33}} --> where name = 'bob' and age = 33
 *
 * @returns {function(String, { name, options }): String}
 */
module.exports = (...conditions) => {

    assert(conditions.length !== 0, `Invalid argument. At least one condition must be passed.`);

    return builder((sql, table) => pipe(
        // resolveConditions
    )(conditions));
};