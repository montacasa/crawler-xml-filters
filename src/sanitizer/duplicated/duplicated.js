const some = require('lodash').some;
const matches = require('lodash').matches;

/**
 * Detect repeated items with provided items
 *
 * @param  {String}                  key     Key to match with filter
 * @param  {String}                  filter  Filter to match with key
 * @param  {String | Array<string>}  value   Value to be sanitized
 * @param  {Array<string>}           items   List of items to check
 * @return {Object}                          Updated list of items and matching result
 */
const itemsSanitizer = (key, filter, value, items) => {
  switch (key) {
    case filter: {
      const match = some(items, matches(value));
      const arr = [...items];
      if (!match) {
        arr.push(value);
      }
      return {
        items: arr,
        match,
      };
    }
    default:
  }
  return {items, match: false};
};

module.exports = itemsSanitizer;
