const { curry, pipe, prepend: _prepend } = require('ramda');

const join = curry((delimiter, array) => array.filter(i => i).join(delimiter));

const prepend = curry((array, item) => _prepend(item, array));

module.exports = {
    /**
     * Assert that the given predicate boolean is true, if not, throws an Error using given error message
     * @param {Boolean} predicate
     * @param {String} errorMessage
     * @returns {Boolean}
     */
    assert: (predicate, errorMessage) => {
        if(!predicate) throw new Error(errorMessage);
        return true;
    },

    /**
     * Joins the given array of strings by the delimiter
     * @param {String} delimiter
     * @param {Array<String>} array
     * @returns {function(Array<String>): String}
     */
    join,

    /**
     * Given a delimiter and an array of Strings, prepends the new String and joins together using the delimiter
     * @param {String} delimiter
     * @param {Array<String>} array
     * @param {String}
     * @returns {function(Array<String>): function(String | Array<String>): String}
     */
    prejoin: curry((delimiter, array, item) => pipe(prepend(array), join(delimiter))(item)),

    /**
     * Prepends the item to the given array
     * @param {Array<*>} array
     * @param {*} item
     * @returns {function(*): Array<*>}
     */
    prepend,

    /**
     * Given a table object, attempts to resolve each field name
     * @param {{ fields: Array<{{ name: String, field: String, [identifier: Boolean]}> }} table
     * @returns {function(Array<String>): Array<String>}
     */
    resolveFields: table => fields => fields.filter(f => f)
};