const uniq = require('lodash').uniq;

const adder = (string, list) => {
  list.push(string);
  const result = uniq(list);
  return result;
};

module.exports = adder;
