const { pipe } = require('ramda'),
    { join, resolveFields, prejoin } = require('../common'),
    builder = require('../builder');

/**
 * Select sql builder
 * @param {...[String]} fields
 * @returns {function(String, { name, options }): String}
 */
module.exports = (...fields) => {

    fields = fields.length ? fields : ['*'];

    return builder((sql, table) => pipe(
        resolveFields(table),
        join(','),
        fields => `select ${fields} from ${table.name}`,
        prejoin(' ', [sql])
    )(fields));
};