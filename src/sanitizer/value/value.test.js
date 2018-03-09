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

  test('should sanitize image_link as an array', () => {
    const key = 'image_link';
    const value = 'image';
    const sanitize = {
      arrays: mockSanitizer,
    };
    expect(sanitizer(key, value, sanitize)).toBe('sanitized-image');
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

describe('price', () => {
  test('should sanitize string with __text', () => {
    const key = 'price';
    const value = 'price';
    const sanitize = {
      __texts: mockSanitizer,
    };
    expect(sanitizer(key, value, sanitize)).toBe('sanitized-price');
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

describe('availability', () => {
  test('should sanitize string with __text', () => {
    const key = 'availability';
    const value = 'availability';
    const sanitize = {
      __texts: mockSanitizer,
    };
    expect(sanitizer(key, value, sanitize)).toBe('sanitized-availability');
  });
});
