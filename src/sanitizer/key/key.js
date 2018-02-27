const updater = require('../../updater');

/**
 * Satinize key name
 *
 * @param  {String} key       The key which should be sanitized
 * @param  {Object} sanitize  Object of functions to sanitize it and mark if updater function may update the key or not
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
