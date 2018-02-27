const uniq = require('lodash').uniq;

/**
 * Sanitize arrays by a set of rules, including getting nested __text arr, finding nested arrays or validading if the
 * type of the object is really an array
 *
 * @param  {String | Object | Array<string> | Array<array>} obj  The array to be sanitized
 * @return {Array<string>}                                       The final sanitized array
 */
const arrays = obj => {
  /*
   * In case the type of obj is not an array
   */
  // Deal with __text sections for non array type
  if (obj && obj.__text) {
    return [obj.__text];
  }

  // Deal with nested objects with __text field
  for (const p in obj) {
    const prop = obj[p];
    if (prop && prop.__text) {
      return [prop.__text];
    }
  }

  // Deal with nested image and category objects
  if (obj && obj.image) {
    obj = obj.image;
  }
  if (obj && obj.category) {
    obj = obj.category;
  }

  /*
   * In case the type of obj is an array
   */
  if (obj && obj.constructor === Array) {
    const arr = [];
    for (let key in obj) {
      // Deal with nested arrays
      if (obj[key].constructor === Array) {
        const objArray = obj[key];
        for (let a = objArray.length - 1; a >= 0; a--) {
          // Check for __text section
          if (objArray[a].__text) {
            arr.push(objArray[a].__text);
          } else {
            arr.push(objArray[a]);
          }
        }
        // Check for __text section
      } else if (obj[key].__text) {
        arr.push(obj[key].__text);
      } else {
        arr.push(obj[key]);
      }
    }
    return uniq(arr); // Remove duplicates
  }
  return [obj];
};

module.exports = arrays;
