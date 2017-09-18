/* global describe test expect */
const counter = require('./counter');

describe('counter', () => {
  test('should increment number if check passes', () => {
    expect(counter(1, true)).toBe(2);
  });
  test('should not increment number if check fails', () => {
    expect(counter(1, false)).toBe(1);
  });
  test('should not increment number if check is undefined', () => {
    expect(counter(1)).toBe(1);
  });
  test('should increment number by defined number', () => {
    expect(counter(1, true, 2)).toBe(3);
  });
  test('should update number to defined number', () => {
    expect(counter(1, true, null, 10)).toBe(10);
  });
  test('should decrement number by defined number', () => {
    expect(counter(1, true, -1)).toBe(0);
  });
});
