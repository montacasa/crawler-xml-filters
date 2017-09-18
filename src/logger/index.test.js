/* global test describe expect */

const logger = require('.');

describe('logger', () => {
  test('should have an logger function', () => {
    const isItAFunction = typeof logger === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});
