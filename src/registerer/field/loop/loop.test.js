/* global describe test expect */

const loop = require('./loop');

test('should loop', () => {
  const fields = ['sku', 'active', 'color'];
  const product = {
    sku: 123,
    active: true,
    color: 'green',
  };
  const result = loop(fields, product);

  expect(result.color).toBe('green');
  expect(result).toBeTruthy();
});

describe('sanitizer', () => {
  test('should ignore null fields', () => {
    const fields = ['sku', 'active', 'color'];
    const product = {
      active: true,
    };
    const result = loop(fields, product);

    expect(result.hasOwnProperty('color')).toBeFalsy();
    expect(result).toBeTruthy();
  });

  test('should save id as sku', () => {
    const fields = ['sku', 'id'];
    const product = {
      id: 'ID_123',
    };
    const result = loop(fields, product);

    expect(result.hasOwnProperty('id')).toBeFalsy();
    expect(result.sku).toBe('ID_123');
  });

  test('should save title as name', () => {
    const fields = ['title', 'name'];
    const product = {
      title: 'TITLE_123',
    };
    const result = loop(fields, product);

    expect(result.hasOwnProperty('title')).toBeFalsy();
    expect(result.name).toBe('TITLE_123');
  });

  test('should sanitize a bunch of keys', () => {
    const fields = ['sku', 'id', 'url', 'link', 'images', 'title', 'name'];
    const product = {
      id: 'ID_123',
      link: 'http://www.link.com',
      images: 'http://www.images.com/12313',
      title: 'TITLE',
    };
    const result = loop(fields, product);

    expect(result.hasOwnProperty('id')).toBeFalsy();
    expect(result.hasOwnProperty('link')).toBeFalsy();
    expect(result.hasOwnProperty('title')).toBeFalsy();

    expect(result.sku).toBe('ID_123');
    expect(result.url).toBe('http://www.link.com');
    expect(result.images[0]).toBe('http://www.images.com/12313');
    expect(result.name).toBe('TITLE');
  });

  test('should substitute required keys', () => {
    const fields = ['sku', 'id', 'url', 'link', 'images', 'name', 'title'];
    const product = {
      sku: 'SKU_123',
      id: 'ID_123',
      url: 'http://www.url.com',
      link: 'http://www.url.com',
      name: 'NAME',
      title: 'TITLE',
    };
    const result = loop(fields, product);

    expect(result.sku).toBe('SKU_123');
    expect(result.url).toBe('http://www.url.com');
    expect(result.name).toBe('NAME');
  });

  test('should extract a field with __text', () => {
    const fields = ['images'];
    const item = {
      images: {
        __aField: 'doesnt matter',
        __text: 'image here',
      },
    };

    const result = loop(fields, item);
    expect(result.images[0]).toBe('image here');
  });

  test('should work with object with multiple keys containing "__"', () => {
    const fields = ['images'];
    const item = {
      images: {
        __ignored: 'ignored',
        __text: 'Text',
      },
    };

    const result = loop(fields, item);
    expect(result.images[0]).toBe('Text');
  });

  describe('special fields', () => {
    describe('images', () => {
      const fields = ['images'];
      test('should sanitize __texts', () => {
        const item = {
          images: {
            __text: 'image',
          },
        };
        const result = loop(fields, item);
        expect(result.images[0]).toBe('image');
      });
    });

    describe('image_link', () => {
      test('should sanitize __texts', () => {
        const fields = ['image_link'];
        const item = {
          image_link: {
            __text: 'image',
          },
        };
        const result = loop(fields, item);

        expect(result.images[0]).toBe('image');
      });

      test('should sanitize __texts even if it is not the only field', () => {
        const fields = ['image_link'];
        const item = {
          image_link: {
            __someField: 'sf',
            __text: 'image',
            __anotherField: 'af',
          },
        };
        const result = loop(fields, item);

        expect(result.images[0]).toBe('image');
      });
    });
  });

  // TODO: Make tests to sanitize special fields
  // test('should sanitize categories');
  // test('should sanitize id');
  // test('should sanitize price');
  // test('should sanitize installment');
  // test('should sanitize sku');
});
