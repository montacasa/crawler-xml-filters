/**
 * Check if json can be parsed
 * @param  {String}      json
 * @return {Boolean}
 */
const isJson = json => {
  try {
    JSON.parse(json);
  } catch (error) {
    return false;
  }
  return true;
};

module.exports = isJson;
