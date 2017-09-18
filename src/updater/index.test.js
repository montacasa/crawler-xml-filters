/* global describe test expect */
const updater = require('./');

describe('updater', () => {
  test('should update field if check fails', () => {
    const original = 'original';
    const check = false;
    const newField = 'newField';

    expect(updater(original, check, newField)).toBe('newField');
  });

  test('should not update field if check passes', () => {
    const original = 'original';
    const check = true;
    const newField = 'newField';

    expect(updater(original, check, newField)).toBe('original');
  });

  test('should update field if check is undefined', () => {
    const original = 'original';
    const check = undefined; // eslint-disable-line no-undefined
    const newField = 'newField';

    expect(updater(original, check, newField)).toBe('newField');
  });
});
