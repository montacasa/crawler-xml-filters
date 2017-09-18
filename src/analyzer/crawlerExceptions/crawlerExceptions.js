const some = require('lodash').some;

const exceptions = [
  {code: 'lolahome'},
  {code: 'fastshop'},
  {code: 'artefacto'},
];

/**
 * Check if store is an exception to be actually crawled
 * @param  {String}      code     Store code
 * @return {Boolean}
 */
const crawlerExceptions = code => {
  return some(exceptions, {code});
};

module.exports = crawlerExceptions;
