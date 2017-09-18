/* global describe test expect */
const duplicatedSanitizer = require('./duplicated');

const key = 'item';
const filter = key;

describe('items', () => {
  describe('list', () => {
    test('should update', () => {
      const value = 'item';
      const items = [];

      const newObject = {
        items: ['item'],
      };

      expect(duplicatedSanitizer(key, filter, value, items)).toMatchObject(
        newObject,
      );
    });

    test('should not update if item is not new', () => {
      const value = 'item';
      const items = ['item'];

      const newObject = {
        items: ['item'],
      };

      expect(duplicatedSanitizer(key, filter, value, items)).toMatchObject(
        newObject,
      );
    });
  });

  describe('match', () => {
    test('should return false if item is new', () => {
      const value = 'item';
      const items = [];

      const newObject = {
        match: false,
      };

      expect(duplicatedSanitizer(key, filter, value, items)).toMatchObject(
        newObject,
      );
    });

    test('should return true if item is not new', () => {
      const value = 'item';
      const items = ['item'];

      const newObject = {
        match: true,
      };

      expect(duplicatedSanitizer(key, filter, value, items)).toMatchObject(
        newObject,
      );
    });
  });
});
