/* global test expect */

const updateAllFields = require('./updateAllFields');

test('should update all fields in a report', () => {
  const fields = {
    quantity: 100,
  };

  const report = updateAllFields(fields);

  expect(report[0].key).toBe('quantity');
  expect(report[0].value).toBe(100);
});
