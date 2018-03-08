/* global describe test expect */
const sanitizer = require('./key');

// TODO: Remove code below or increment test
// const skus = []; // skus list provided before the function
// let skusCounter = Math.floor(Math.random() * 999) + 0;
// const mockSanitize = jest.fn();

// define default list
const list = () => ({
  id: '',
  link: '',
  name: '',
});

describe('sanitize id', () => {
  test('should change to sku', () => {
    let key = 'id';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('sku');
  });

  test('should not change if an sku already exists', () => {
    let newList = list();
    newList.sku = '#123';
    let key = 'id';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('id');
  });
});

describe('sanitize link', () => {
  test('should change to url', () => {
    let key = 'link';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('url');
  });

  test('should not change if an url already exists', () => {
    let newList = list();
    newList.url = '#123';
    let key = 'link';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('link');
  });
});

describe('sanitize title', () => {
  test('should change to name', () => {
    let key = 'title';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('name');
  });

  test('should not change if a name already exists', () => {
    let newList = list();
    newList.name = '#123';
    let key = 'title';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('title');
  });
});

describe('sanitize additional_image_link', () => {
  test('should change to images', () => {
    let key = 'additional_image_link';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('images');
  });

  test('should not change if image_link already exists', () => {
    let newList = list();
    newList.image_link = '#123';
    let key = 'additional_image_link';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('additional_image_link');
  });

  test('should not change if images already exists', () => {
    let newList = list();
    newList.images = '#123';
    let key = 'additional_image_link';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('additional_image_link');
  });
});

describe('sanitize google_product_category', () => {
  test('should change to categories', () => {
    let key = 'google_product_category';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('categories');
  });

  test('should not change if categories already exists', () => {
    let newList = list();
    newList.categories = '#123';
    let key = 'google_product_category';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('google_product_category');
  });
});
