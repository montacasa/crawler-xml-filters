/* global describe test expect */
const sanitizer = require('./value');

// const skus = []; // skus list provided before the function
// let skusCounter = Math.floor(Math.random() * 999) + 0;
// const mockSanitize = jest.fn();
const mockSanitizer = itSelf => `sanitized-${itSelf}`;

describe('images', () => {
  test('should sanitize array', () => {
    const key = 'images';
    const value = 'images';
    const sanitize = {
      arrays: mockSanitizer,
    };
    expect(sanitizer(key, value, sanitize)).toBe('sanitized-images');
  });
});

describe('categories', () => {
  test('should sanitize array', () => {
    const key = 'categories';
    const value = 'categories';
    const sanitize = {
      arrays: mockSanitizer,
    };
    expect(sanitizer(key, value, sanitize)).toBe('sanitized-categories');
  });
});

describe('id', () => {
  test('should sanitize string twice', () => {
    const key = 'id';
    const value = 'id';
    const sanitize = {
      __texts: mockSanitizer,
      underscore: mockSanitizer,
    };
    expect(sanitizer(key, value, sanitize)).toBe('sanitized-sanitized-id');
  });
});

describe('installment', () => {
  test('should sanitize string', () => {
    const key = 'installment';
    const value = 'installment';
    const sanitize = {
      installment: mockSanitizer,
    };
    expect(sanitizer(key, value, sanitize)).toBe('sanitized-installment');
  });
});

describe('sku', () => {
  test('should sanitize string with underscore and name counting', () => {
    const key = 'sku';
    const value = 'sku';
    const sanitize = {
      underscore: mockSanitizer,
    };
    expect(sanitizer(key, value, sanitize)).toBe('sanitized-sku');
  });
  test.skip('should update skus list', () => {
    expect().anything();
  });
});
