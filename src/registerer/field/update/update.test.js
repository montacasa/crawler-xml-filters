/* global jest describe test expect */

const update = require('./update');

let updatedProduct = {};

const product = {
  get: key => updatedProduct[key],
  set: (key, value) => {
    updatedProduct = {};
    Object.assign(updatedProduct, {[key]: value});
  },
  save: () => jest.fn(),
};

describe('register field updater', () => {
  describe('should update', () => {
    test('a field that has changed', () => {
      updatedProduct.color = 'orange';
      const key = 'color';
      const field = 'blue';
      const hasUpdates = update(key, field, product);
      expect(updatedProduct.color).toBe('blue');
      expect(hasUpdates).toBeTruthy();
    });

    test('a product with a new field', () => {
      const key = 'new';
      const field = 'field';
      const hasUpdates = update(key, field, product);
      expect(updatedProduct.new).toBe('field');
      expect(hasUpdates).toBeTruthy();
    });
  });

  describe('should not update', () => {
    test('a field that has not changed', () => {
      const key = 'key';
      const field = 'field';
      updatedProduct.key = 'field';
      const hasUpdates = update(key, field, product);
      expect(updatedProduct.key).toBe('field');
      expect(hasUpdates).toBeFalsy();
    });

    test('a nulled field', () => {
      const key = 'key';
      const field = null;
      updatedProduct.key = 'field';
      const hasUpdates = update(key, field, product);
      expect(updatedProduct.key).toBe('field');
      expect(hasUpdates).toBeFalsy();
    });

    test("a products's sku", () => {
      updatedProduct = {sku: '123'};
      const key = 'sku';
      const field = 'ABC';
      const hasUpdates = update(key, field, product, {});
      expect(updatedProduct.sku).toBe('123');
      expect(hasUpdates).toBeFalsy();
    });

    test("a products's url", () => {
      updatedProduct = {url: 'www.old.com'};
      const key = 'url';
      const field = 'www.new.com';
      const hasUpdates = update(key, field, product, {});
      expect(updatedProduct.url).toBe('www.old.com');
      expect(hasUpdates).toBeFalsy();
    });

    test("a products's id", () => {
      updatedProduct = {id: '123'};
      const key = 'id';
      const field = 'ABC';
      const hasUpdates = update(key, field, product, {});
      expect(updatedProduct.id).toBe('123');
      expect(hasUpdates).toBeFalsy();
    });

    test("a products's link", () => {
      updatedProduct = {link: 'www.old.com'};
      const key = 'link';
      const field = 'www.new.com';
      const hasUpdates = update(key, field, product, {});
      expect(updatedProduct.link).toBe('www.old.com');
      expect(hasUpdates).toBeFalsy();
    });
  });
});
