/**
 * Compare selected fields from two lists and return true if they are all equal, or false if one or more differ
 * @param  {Array<any>}     first   First list
 * @param  {Array<any>}     second  Second list
 * @param  {Array<string>}  fields  List of field keys to compare
 * @return {Boolean}
 */
const comparator = (first, second, fields) => {
  try {
    for (let i = fields.length - 1; i >= 0; i--) {
      const key = fields[i];
      const firstKey = first[key];
      const secondKey = second[key];

      // Return false with the absense of the field in one of the lists
      if ((!firstKey && secondKey) || (firstKey && !secondKey)) {
        return false;
      }

      // Check for arrays
      const isFirstAnArray =
        Object.prototype.toString.call(firstKey) === '[object Array]';
      const isSecondAnArray =
        Object.prototype.toString.call(secondKey) === '[object Array]';

      // Compare!
      if (firstKey !== secondKey) {
        // Compare arrays
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
  // If the function gets here, all selected fields are equal in both lists
  return true;
};

module.exports = comparator;
