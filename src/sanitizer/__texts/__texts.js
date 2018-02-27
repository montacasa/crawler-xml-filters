/**
 * Sanitize objects inside __text fields
 *
 * @param  {Object} obj  Object value to be sanitized - e.g. { __text: 'String' }
 * @return {...*}        The value found inside __text field
 */
const __text = obj => (obj && obj.__text) || obj;

module.exports = __text;
