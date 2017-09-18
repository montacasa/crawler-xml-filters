/**
 * Sanitize values
 *
 * @param  {String | Array<string>} value
 * @param  {Object}                 sanitize
 * @return {String | Array<string>}
 */
const valueSanitizer = (key, value, sanitize) => {
  switch (key) {
    case 'images':
    case 'categories':
      return sanitize.arrays(value);
    case 'id': {
      const sanitizeTexts = sanitize.__texts(value);
      const sanitizeUnderscores = sanitize.underscore(sanitizeTexts);
      return sanitizeUnderscores;
    }
    case 'installment':
      return sanitize.installment(value);
    case 'sku':
      return sanitize.underscore(value);
    default:
  }
  return value;
};

module.exports = valueSanitizer;
