/* global describe test expect */

const batch = require('./batch');
const report = require('../mock/report');
const updatedReport = require('../mock/emptyReport');

describe('report batch', () => {
  test('should update a batch of fields', () => {
    const fields = [
      {
        key: 'one',
        value: 1,
      },
      {
        key: 'two',
        value: 2,
      },
      {
        key: 'three',
        value: 3,
      },
    ];
    batch(report, fields);
    expect(updatedReport.one).toBe(1);
    expect(updatedReport.two).toBe(2);
    expect(updatedReport.three).toBe(3);
  });
});
