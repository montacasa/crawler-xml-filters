/**
 * Check if json can be parsed
 * @param  {String}  json  The JSON object stringified
 * @return {Boolean}  Wheater it can or can not be parsed
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
