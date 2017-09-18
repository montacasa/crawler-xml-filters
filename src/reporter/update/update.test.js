/* global describe test expect */

const update = require('./update');
const report = require('../mock/report');
const updatedReport = require('../mock/emptyReport');

describe('report update', () => {
  test('should update a field', () => {
    const field = 'store';
    const value = 'STORE-A';
    update(report, field, value);
    expect(updatedReport.store).toBe('STORE-A');
  });
});
