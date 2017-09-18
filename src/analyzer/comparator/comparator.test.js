/* global test expect */

const comparator = require('./comparator');

test('should result false for different lists', () => {
  const fields = ['sku', 'active', 'color'];
  const first = {
    sku: 123,
    active: false,
    color: 'green',
  };
  const second = {
    sku: 124,
    active: false,
    color: 'orange',
  };
  const result = comparator(first, second, fields);

  expect(result).toBeFalsy();
});

test('should result true for equal lists', () => {
  const fields = ['sku', 'active', 'color'];
  const first = {
    sku: 123,
    active: true,
    color: 'green',
  };
  const second = {
    sku: 123,
    active: true,
    color: 'green',
  };
  const result = comparator(first, second, fields);

  expect(result).toBeTruthy();
});

test('should result true for different keys not listed in fields', () => {
  const fields = ['sku', 'color'];
  const first = {
    sku: 123,
    active: true,
    color: 'green',
  };
  const second = {
    sku: 123,
    active: false,
    color: 'green',
  };
  const result = comparator(first, second, fields);

  expect(result).toBeTruthy();
});

test('should return false if a field is not found in one of the lists', () => {
  const fields = ['sku', 'active', 'color'];
  const first = {
    sku: 123,
    active: true,
    color: 'green',
  };
  const second = {
    sku: 123,
    color: 'green',
  };
  const result = comparator(first, second, fields);

  expect(result).toBeFalsy();
});

test('should return true if a field is not found in both lists', () => {
  const fields = ['sku', 'active', 'color'];
  const first = {
    sku: 123,
    color: 'green',
  };
  const second = {
    sku: 123,
    color: 'green',
  };
  const result = comparator(first, second, fields);

  expect(result).toBeTruthy();
});

test.only(
  'should return true if a new item is not different from a product to update',
  () => {
    const fields = [
      'meta_description',
      'meta_title',
      'images',
      'categories',
      'summary',
      'description',
      'warranty ',
      'weight',
      'length',
      'width',
      'height',
      'material',
      'model',
      'color',
      'manufacturer',
      'special_price',
      'price',
      'url',
      'link',
      'name',
      'title',
      'sku',
      'id',
      'status',
    ];
    const newItem = {
      sku: 'SKU_1',
      name: 'NAME',
      url: 'http://www.url-1.com',
      color: '#333',
      description: 'An item',
      categories: [null],
      images: ['http://www.images.com/1'],
    };
    const productToUpdate = {
      _id: '59010d114fda79176188d0db',
      sku: 'SKU_1',
      name: 'NAME',
      url: 'http://www.url-1.com',
      color: '#333',
      description: 'An item',
      categories: [null],
      images: ['http//www.images.com/1'],
      store_id: '58f5216dd7d69300157b3b06',
      report_id: '59010d0f4fda79176188d0da',
      created_at: '2017-04-26T21:11:45.370Z',
      updated_at: '2017-04-26T21:11:45.370Z',
    };
    const result = comparator(newItem, productToUpdate, fields);

    expect(result).toBeTruthy();
  },
);

test('should return false if a new item is different from a product to update', () => {
  const fields = [
    'meta_description',
    'meta_title',
    'images',
    'categories',
    'summary',
    'description',
    'warranty ',
    'weight',
    'length',
    'width',
    'height',
    'material',
    'model',
    'color',
    'manufacturer',
    'special_price',
    'price',
    'url',
    'link',
    'name',
    'title',
    'sku',
    'id',
    'status',
  ];
  const newItem = {
    sku: 'SKU_1',
    name: 'NEW_NAME',
    url: 'http://www.url-2.com',
    color: 'orange',
    description: 'An updated item',
    categories: [null],
    images: ['http://www.images.com/1', 'http://www.images.com/2'],
  };
  const productToUpdate = {
    _id: '59010d114fda79176188d0db',
    sku: 'SKU_1',
    name: 'NAME',
    url: 'http://www.url-1.com',
    color: '#333',
    description: 'An item',
    categories: [null],
    images: ['http//www.images.com/1'],
    store_id: '58f5216dd7d69300157b3b06',
    report_id: '59010d0f4fda79176188d0da',
    created_at: '2017-04-26T21:11:45.370Z',
    updated_at: '2017-04-26T21:11:45.370Z',
  };
  const result = comparator(newItem, productToUpdate, fields);

  expect(result).toBeFalsy();
});

test('should return true when comparing a null with an undefined field', () => {
  const fields = ['categories'];
  const newItem = {
    sku: 'SKU_1',
    categories: [
      undefined, // eslint-disable-line no-undefined
    ],
  };
  const productToUpdate = {
    _id: '59010d114fda79176188d0db',
    sku: 'SKU_1',
    categories: [null],
    store_id: '58f5216dd7d69300157b3b06',
    report_id: '59010d0f4fda79176188d0da',
    created_at: '2017-04-26T21:11:45.370Z',
    updated_at: '2017-04-26T21:11:45.370Z',
  };
  const result = comparator(newItem, productToUpdate, fields);

  expect(result).toBeTruthy();
});
