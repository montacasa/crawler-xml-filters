/**
 * Sanitize texts inside __text fields
 *
 * @param  {Object} field e.g. { __text: 'String' }
 * @return {String}
 */
const __text = field => (field && field.__text) || field;

module.exports = __text;
