/* global test describe expect */

const sanitizer = require('.');

describe('sanitizer', () => {
  test('should have a key function', () => {
    const isItAFunction = typeof sanitizer.key === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have an value function', () => {
    const isItAFunction = typeof sanitizer.value === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a duplicated function', () => {
    const isItAFunction = typeof sanitizer.duplicated === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a underscore function', () => {
    const isItAFunction = typeof sanitizer.underscore === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a __texts function', () => {
    const isItAFunction = typeof sanitizer.__texts === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a arrays function', () => {
    const isItAFunction = typeof sanitizer.arrays === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a installment function', () => {
    const isItAFunction = typeof sanitizer.installment === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});
