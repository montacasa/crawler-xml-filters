/**
 * Update something from original to final if check passes
 *
 * @param  {String}  original: string        [description]
 * @param  {Boolean} check:    boolean       [description]
 * @param  {String}  final:    string        [description]
 * @return {String}
 */
const updater = (original, check = false, final) => {
  if (!check) {
    return final;
  }
  return original;
};

module.exports = updater;
