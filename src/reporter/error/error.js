const update = require('../update/update');

/**
 * Update a report with an error message
 *
 * @param  {Object} report
 * @param  {String} message
 */
const error = (report, message) => {
  update(report, 'status', 'Error');
  update(report, 'error', 1);
  update(report, 'warnings', message);
};

module.exports = error;
