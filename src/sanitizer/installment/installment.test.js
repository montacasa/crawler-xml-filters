/* global test expect */
const sanitizer = require('./installment');

test('should sanitize installment', () => {
  let field = {
    months: 1,
    amount: 1,
  };
  const sanitized = sanitizer(field);
  expect(sanitized.months).toBe(1);
  expect(sanitized.price).toBe(1);
});

test('should sanitize installment with nested __text', () => {
  let field = {
    months: {
      __text: 1,
    },
    amount: {
      __text: 1,
    },
  };
  const sanitized = sanitizer(field);
  expect(sanitized.months).toBe(1);
  expect(sanitized.price).toBe(1);
});

test('should sanitize installment without months', () => {
  let field = {
    amount: 1,
  };
  const sanitized = sanitizer(field);
  expect(sanitized.months).toBeNull();
  expect(sanitized.price).toBe(1);
});

test('should sanitize installment without amount', () => {
  let field = {
    months: 1,
  };
  const sanitized = sanitizer(field);
  expect(sanitized.months).toBe(1);
  expect(sanitized.price).toBeNull();
});
