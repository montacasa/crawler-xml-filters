/**
 * Sanitize strings making it slug friendly
 *
 * @param  {String} field
 * @return {String}
 */
const underscore = field => {
  if (!field) {
    return null;
  }

  if (typeof field.replace !== 'function') {
    return field;
  }

  const spaces = field && field.replace(/\s|-|\\|\||\//g, '_');
  const specialChars = spaces
    .replace(/[ç]/gi, 'c')
    .replace(/[á|à|ã|â]/gi, 'a')
    .replace(/[é|è|ê]/gi, 'e')
    .replace(/[í|ì|ï|î]/gi, 'i')
    .replace(/[ó|ò|õ|ô]/gi, 'o')
    .replace(/[ú|ù|û|ü]/gi, 'u');
  return specialChars;
};

module.exports = underscore;
