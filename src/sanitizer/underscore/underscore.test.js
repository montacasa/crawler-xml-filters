/* global test expect */
const sanitizer = require('./underscore');

test('should sanitize text with spaces', () => {
  let text = 'text with spaces';
  const sanitized = sanitizer(text);
  expect(sanitized).toBe('text_with_spaces');
});

test('should sanitize text with | characters', () => {
  let text = 'another|text';
  const sanitized = sanitizer(text);
  expect(sanitized).toBe('another_text');
});

test('should sanitize text with / characters', () => {
  let text = 'yet/another/text';
  const sanitized = sanitizer(text);
  expect(sanitized).toBe('yet_another_text');
});

test('should sanitize text special characters', () => {
  let text = 'áàâãéèêíìîóòôõúùûç';
  const sanitized = sanitizer(text);
  expect(sanitized).toBe('aaaaeeeiiioooouuuc');
});

test('should return null text is null', () => {
  let text = null;
  const sanitized = sanitizer(text);
  expect(sanitized).toBeNull();
});

test('should return null text is undefined', () => {
  let text = undefined; // eslint-disable-line no-undef-init, no-undefined
  const sanitized = sanitizer(text);
  expect(sanitized).toBeNull();
});
