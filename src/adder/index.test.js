/* global test expect */

const add = require('./.');

test('should add a string to a list only once', () => {
  const arr = ['test'];
  const newArr = add('test', arr);
  expect(newArr[0]).toBe('test');
  expect(newArr[1]).toBeFalsy();
});

test('should add a string to an empty list', () => {
  const arr = [];
  const newArr = add('test', arr);
  expect(newArr[0]).toBe('test');
});

test('should add a string to a non empty list', () => {
  const arr = ['test 1'];
  const newArr = add('test 2', arr);
  expect(newArr[0]).toBe('test 1');
  expect(newArr[1]).toBe('test 2');
});
