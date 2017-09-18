/* global test describe expect */

const report = require('.');

describe('report', () => {
  test('should have an error function', () => {
    const isItAFunction = typeof report.error === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have an update function', () => {
    const isItAFunction = typeof report.update === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a batch function', () => {
    const isItAFunction = typeof report.batch === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a updateAllFields function', () => {
    const isItAFunction = typeof report.updateAllFields === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});
