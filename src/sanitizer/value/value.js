/**
 * Sanitize values
 *
 * @param  {String | Array<string>} value     The value to be sanitized
 * @param  {Object}                 sanitize  A sanitization type from sanitizer
 * @return {String | Array<string>}           A new sanitized object
 */
const valueSanitizer = (key, value, sanitize) => {
  switch (key) {
    case 'image_link': // TODO: Validate the need of an exceptional field with values sanitizer
    case 'images':
    case 'categories':
      return sanitize.arrays(value);
    case 'id': {
      const sanitizeTexts = sanitize.__texts(value);
      const sanitizeUnderscores = sanitize.underscore(sanitizeTexts);
      return sanitizeUnderscores;
    }
    case 'price': // TODO: Validate the need this field with values sanitizer
      return sanitize.__texts(value);
    case 'installment':
      return sanitize.installment(value);
    case 'sku':
      return sanitize.underscore(value);
    default:
  }
  return value;
};

module.exports = valueSanitizer;
