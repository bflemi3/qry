const { is } = require('ramda'),
    { assert } = require('./common');

module.exports = fn => {
    assert(is(Function, fn), `Invalid argument. 'fn' must be a function.`);

    return (sql, table) => {
        assert(is(String, sql), `Invalid argument. 'sql' must be a string.`);
        assert(is(Object, table), `Invalid argument. 'table' must be an object.`);

        return fn(sql, table);
    }
};