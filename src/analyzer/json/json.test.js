/* global describe test expect */

const json = require('./json');

describe('analize if json can be parsed', () => {
  test('should return true if it is', () => {
    const valid = `
      {
        "1": 1,
        "2": 2,
        "3": 3
      }
    `;
    expect(json(valid)).toBeTruthy();
  });
  test('should return false if it is not', () => {
    const invalid = `
      {
        "1": 1,
        "2": 2,
        "3": 3,
      }
    `;
    expect(json(invalid)).toBeFalsy();
  });
});
