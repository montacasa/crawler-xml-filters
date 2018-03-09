const sanitizer = require('../../../sanitizer');
/**
 * Loop and sanitize fields of an item to create a new one
 *
 * @param  {Array<string>} fields    List of fields to look inside item
 * @param  {Object}        item      The item to be looped and sanitized
 * @param  {Object}        services  Sanitization methods and sanitize list services
 * @return {Object}                  A new object representing the sanitized item
 */
const loop = (fields, item) => {
  const data = {};

  for (let f = fields.length - 1; f >= 0; f--) {
    let key = fields[f];
    let value = item[key];

    // sanitize keys and values
    // TODO: Document keys and values sanitization better
    value = sanitizer.value(key, value, sanitizer);
    key = sanitizer.key(key, item);

    // update the field
    if (value && value.constructor === Array) {
      // if it's not an invalid array
      if (value[0]) {
        Object.assign(data, {[key]: value});
      }
    } else if (value) {
      // or if it's a valid single value
      Object.assign(data, {[key]: value});
    }
  }

  // Return the new object
  return data;
};

module.exports = loop;
