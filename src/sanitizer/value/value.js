/**
 * Sanitize values
 *
 * @param  {String | Array<string>} value     The value to be sanitized
 * @param  {Object}                 sanitize  A sanitization type from sanitizer
 * @return {String | Array<string>}
 */
const valueSanitizer = (key, value, sanitize) => {
  switch (key) {
    // case 'image_link': TODO: Check if a sanitized 'image_link' field get here as it should
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
