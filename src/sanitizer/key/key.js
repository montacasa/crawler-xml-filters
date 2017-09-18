const updater = require('../../updater');

/**
 * Satinize key name
 *
 * @param  {String} key
 * @param  {Object} sanitize Object of functions to sanitize. e.g. Product.sanitize
 * @return {String}
 */
const keySanitizer = (key, sanitize) => {
  switch (key) {
    case 'id':
      return updater('id', sanitize.sku, 'sku');
    case 'link':
      return updater('link', sanitize.url, 'url');
    case 'title':
      return updater('title', sanitize.name, 'name');
    default:
  }
  return key;
};

module.exports = keySanitizer;
