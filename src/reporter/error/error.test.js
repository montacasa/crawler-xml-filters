/* global describe test expect */

const error = require('./error');
const report = require('../mock/report');
const updatedReport = require('../mock/emptyReport');

describe('report error', () => {
  test('should update status', () => {
    const message = 'There has been an error!';
    error(report, message);
    expect(updatedReport.status).toBe('Error');
  });

  test('should update error', () => {
    const message = 'There has been an error!';
    error(report, message);
    expect(updatedReport.error).toBe(1);
  });

  test('should update warnings', () => {
    const message = 'There has been an error!';
    error(report, message);
    expect(updatedReport.warnings).toBe(message);
  });
});
