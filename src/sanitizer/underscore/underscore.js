// TODO: Rename this function to slugify
/**
 * Sanitize strings making it slug friendly
 *
 * @param  {String}  str  String to be sanitized
 * @return {String}       Sanitized string
 */
const underscore = str => {
  if (!str) {
    return null;
  }

  if (typeof str.replace !== 'function') {
    return str;
  }

  const spaces = str && str.replace(/\s|-|\\|\||\//g, '_');
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
