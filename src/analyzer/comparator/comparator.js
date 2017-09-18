/**
 * Differ lists with provided fields and return true if they are equal or false if not
 * @param  {Array<any>}    first  First list
 * @param  {Array<any>}    second Second list
 * @param  {Array<string>} fields List of field keys to compare
 * @return {Boolean}
 */
const comparator = (first, second, fields) => {
  try {
    for (let i = fields.length - 1; i >= 0; i--) {
      const key = fields[i];
      const firstKey = first[key];
      const secondKey = second[key];

      if ((!firstKey && secondKey) || (firstKey && !secondKey)) {
        return false;
      }

      // Deal with arrays
      const isFirstAnArray =
        Object.prototype.toString.call(firstKey) === '[object Array]';
      const isSecondAnArray =
        Object.prototype.toString.call(secondKey) === '[object Array]';

      if (firstKey !== secondKey) {
        if (isFirstAnArray && isSecondAnArray) {
          for (let f = firstKey.length - 1; f >= 0; f--) {
            if (firstKey[f] === secondKey[f]) {
              return true;
            } else if (!firstKey[f] && !secondKey[f]) {
              return true;
            }
          }
        }
        return false;
      }
    }
  } catch (e) {
    return true;
  }
  return true;
};

module.exports = comparator;
