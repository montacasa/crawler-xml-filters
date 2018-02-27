/**
 * Update counter based on boolean (used with validations)
 *
 * @param  {Number}  original     Original value
 * @param  {Boolean} shouldUpdate Update checker
 * @param  {Number}  increment    Value to increment or decrement
 * @param  {Number}  final        Final value (ignores increment value)
 * @return {Number}
 */
const counter = (original, shouldUpdate = false, increment = 1, final) => {
  if (shouldUpdate) {
    return !final ? original + increment : final;
  }
  return original;
};

module.exports = counter;
