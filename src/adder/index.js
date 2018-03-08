const uniq = require('lodash').uniq;

/**
 * Add a new item to an existing list
 *
 * @param   {...*}       item The item to be added
 * @param   {Array<any>} list The list to be added to
 * @returns {Array<any>}      The new list with the item added to it
 */
const adder = (item, list) => {
  list.push(item);
  const result = uniq(list);
  return result;
};

module.exports = adder;
