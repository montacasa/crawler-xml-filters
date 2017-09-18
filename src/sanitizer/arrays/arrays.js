const uniq = require('lodash').uniq;

/**
 * Sanitize arrays
 *
 * @param  {String | Object | Array<string> | Array<array>} field
 * @return {Array<string>}
 */
const arrays = field => {
  // deal with __text sections for non array field
  if (field && field.__text) {
    return [field.__text];
  }

  // deal with nested objects
  let f = field;
  if (f && f.image) {
    f = f.image;
  }
  if (f && f.category) {
    f = f.category;
  }

  // deal with array
  if (f && f.constructor === Array) {
    const fieldArray = [];
    for (let key in f) {
      // deal with nested arrays
      if (f[key].constructor === Array) {
        const fArray = f[key];
        for (let a = fArray.length - 1; a >= 0; a--) {
          // check for __text section
          if (fArray[a].__text) {
            fieldArray.push(fArray[a].__text);
          } else {
            fieldArray.push(fArray[a]);
          }
        }
        // check for __text section
      } else if (f[key].__text) {
        fieldArray.push(f[key].__text);
      } else {
        fieldArray.push(f[key]);
      }
    }
    return uniq(fieldArray); // check for duplicates
  }
  return [f];
};

module.exports = arrays;
