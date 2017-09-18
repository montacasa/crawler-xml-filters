/* global test expect */
const sanitizer = require('./__texts');

test('should sanitize text with __text', () => {
  let text = {
    __text: 'Text',
  };
  const sanitized = sanitizer(text);
  expect(sanitized).toBe('Text');
});

test('should sanitize text without __text', () => {
  let text = 'Text';
  const sanitized = sanitizer(text);
  expect(sanitized).toBe('Text');
});
