/**
 * Update a report and save it
 *
 * @param  {Object}   report
 * @param  {Any}      field
 * @param  {Any}      value
 */
const update = (report, field, value) => {
  report.set(field, value);
  report.save();
};

module.exports = update;
