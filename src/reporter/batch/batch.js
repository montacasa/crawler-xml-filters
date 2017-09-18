/**
 * Update multiple fields within a report and save it
 *
 * @param  {Object}        report
 * @param  {Array<Object>} fields
 */
const batch = (report, fields) => {
  for (var i = fields.length - 1; i >= 0; i--) {
    report.set(fields[i].key, fields[i].value);
  }
  report.save();
};

module.exports = batch;
