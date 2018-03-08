/* global describe test expect */
const updater = require('./');

describe('updater', () => {
  test('should update field if forbid fails', () => {
    const original = 'original';
    const forbid = false;
    const newField = 'newField';

    expect(updater(original, forbid, newField)).toBe('newField');
  });

  test('should not update field if forbid is true', () => {
    const original = 'original';
    const forbid = true;
    const newField = 'newField';

    expect(updater(original, forbid, newField)).toBe('original');
  });

  test('should update field if forbid is undefined', () => {
    const original = 'original';
    const forbid = undefined; // eslint-disable-line no-undefined
    const newField = 'newField';

    expect(updater(original, forbid, newField)).toBe('newField');
  });

  test('should not update field if forbid is truethy', () => {
    const original = 'original';
    const forbid = 'string'; // eslint-disable-line no-undefined
    const newField = 'newField';

    expect(updater(original, forbid, newField)).toBe('original');
  });
});
