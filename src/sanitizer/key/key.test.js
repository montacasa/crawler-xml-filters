/* global describe test expect */
const sanitizer = require('./key');

// const skus = []; // skus list provided before the function
// let skusCounter = Math.floor(Math.random() * 999) + 0;
// const mockSanitize = jest.fn();

// define default product
const product = {
  id: '',
  link: '',
  name: '',
};

describe('sanitize id', () => {
  test('should change to sku', () => {
    let key = 'id';
    const newKey = sanitizer(key, product);
    expect(newKey).toBe('sku');
  });

  test('should not change if an sku already exists', () => {
    product.sku = '#123';
    let key = 'id';
    const newKey = sanitizer(key, product);
    expect(newKey).toBe('id');
  });
});

describe('sanitize link', () => {
  test('should change to url', () => {
    let key = 'link';
    const newKey = sanitizer(key, product);
    expect(newKey).toBe('url');
  });

  test('should not change if an url already exists', () => {
    product.url = '#123';
    let key = 'link';
    const newKey = sanitizer(key, product);
    expect(newKey).toBe('link');
  });
});

describe('sanitize title', () => {
  test('should change to name', () => {
    let key = 'title';
    const newKey = sanitizer(key, product);
    expect(newKey).toBe('name');
  });

  test('should not change if a name already exists', () => {
    product.name = '#123';
    let key = 'title';
    const newKey = sanitizer(key, product);
    expect(newKey).toBe('title');
  });
});
