/* global describe test expect */
const sanitizer = require('./arrays');

describe('string and objects', () => {
  test('should sanitize field', () => {
    let field = 'string';
    const sanitized = sanitizer(field);
    expect(sanitized[0]).toBe('string');
  });

  test('should sanitize field with nested image', () => {
    let field = {image: 'nested'};
    const sanitized = sanitizer(field);
    expect(sanitized[0]).toBe('nested');
  });

  test('should sanitize field with nested category', () => {
    let field = {category: 'nested'};
    const sanitized = sanitizer(field);
    expect(sanitized[0]).toBe('nested');
  });

  test('should sanitize object field with __text subfield', () => {
    let field = {parent: {__text: 'Text'}};
    const sanitized = sanitizer(field);
    expect(sanitized[0]).toBe('Text');
  });

  test('should sanitize object with multiple fields with __text subfield', () => {
    let field = {parent: {someField: 'ignore-me', __text: 'Text'}};
    const sanitized = sanitizer(field);
    expect(sanitized[0]).toBe('Text');
  });
});

describe('arrays', () => {
  test('should sanitize array', () => {
    let field = ['array'];
    const sanitized = sanitizer(field);
    expect(sanitized[0]).toBe('array');
  });

  test('should sanitize field with nested image array', () => {
    let field = {image: ['nested']};
    const sanitized = sanitizer(field);
    expect(sanitized[0]).toBe('nested');
  });

  test('should sanitize field with nested category array', () => {
    let field = {category: ['nested']};
    const sanitized = sanitizer(field);
    expect(sanitized[0]).toBe('nested');
  });

  test('should sanitize nested array', () => {
    let field = [['nested']];
    const sanitized = sanitizer(field);
    expect(sanitized[0]).toBe('nested');
  });
});
