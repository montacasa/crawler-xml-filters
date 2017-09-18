/* global test describe expect */

const analyze = require('.');

describe('Analyzer', () => {
  test('should have a crawlerExceptions function', () => {
    const isItAFunction = typeof analyze.crawlerExceptions === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a json function', () => {
    const isItAFunction = typeof analyze.json === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a comparator function', () => {
    const isItAFunction = typeof analyze.comparator === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});
