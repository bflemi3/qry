const { reduce, is, all } = require('ramda');
const { assert } = require('./common');

/**
 *
 * @param {String} name
 * @param {{ fields: Array<{{ name: String, field: String, [identifier: Boolean]}> }} options
 * @returns {function(...[function]): { valueOf: function(): String }}
 */
module.exports = ({ name, options = {}}) => {
    assert(is(String, name), `Invalid argument. 'name' must be a string.`);
    assert(is(Object, options), `Invalid argument. 'options' must be an object.`);

    const table = { name, options };

    return (...builders) => {
        assert(
            all(is(Function), builders),
            `Invalid argument. Each builder must be a builder function.`
        );

        const sql = reduce((sql, b) => b(sql, table), '', builders);
        return {
            valueOf: () => sql
        };
    }
};