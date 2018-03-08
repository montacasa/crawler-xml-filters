/**
 * Update something from original to final if forbid doesn't pass
 *
 * @param  {String}   original  The original value
 * @param  {Boolean}  forbid    An externally provided checking to define if the update should really occur
 * @param  {String}   final     The final value, to which the orinal should be updated, in case forbid is false
 * @return {String}             The resulting value, either original or final
 */

const updater = (original, forbid = false, final) =>
  !forbid ? final : original;

module.exports = updater;
