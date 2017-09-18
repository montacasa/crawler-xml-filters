/* global test describe expect */

const register = require('.');

describe('register', () => {
  test('should have an updateField function', () => {
    const isItAFunction = typeof register.updateField === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have an loopFields function', () => {
    const isItAFunction = typeof register.loopFields === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});
