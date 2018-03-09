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

describe('sanitize image_link', () => {
  test('should change to images', () => {
    let key = 'image_link';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('images');
  });

  test('should not change if images already exists', () => {
    let newList = list();
    newList.images = '#123';
    let key = 'image_link';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('image_link');
  });

  test('should change if images is a nulled array', () => {
    let newList = list();
    newList.images = [null];
    let key = 'image_link';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('image_link');
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

describe('sanitize brand', () => {
  test('should change to manufacturer', () => {
    let key = 'brand';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('manufacturer');
  });

  test('should not change if manufacturer already exists', () => {
    let newList = list();
    newList.manufacturer = '#123';
    let key = 'brand';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('brand');
  });
});

describe('sanitize warranty', () => {
  test('should change to garantee', () => {
    let key = 'warranty';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('garantee');
  });

  test('should not change if garantee already exists', () => {
    let newList = list();
    newList.garantee = '#123';
    let key = 'warranty';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('warranty');
  });
});

describe('sanitize summary', () => {
  test('should change to description', () => {
    let key = 'summary';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('description');
  });

  test('should not change if description already exists', () => {
    let newList = list();
    newList.description = '#123';
    let key = 'summary';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('summary');
  });
});

describe('sanitize manufacturer', () => {
  test('should change to brand', () => {
    let key = 'manufacturer';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('brand');
  });

  test('should not change if brand already exists', () => {
    let newList = list();
    newList.brand = '#123';
    let key = 'manufacturer';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('manufacturer');
  });
});

describe('sanitize sale_price', () => {
  test('should change to special_price', () => {
    let key = 'sale_price';
    const newKey = sanitizer(key, list());
    expect(newKey).toBe('special_price');
  });

  test('should not change if special_price already exists', () => {
    let newList = list();
    newList.special_price = '#123';
    let key = 'sale_price';
    const newKey = sanitizer(key, newList);
    expect(newKey).toBe('sale_price');
  });
});
