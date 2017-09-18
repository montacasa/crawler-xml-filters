/* global describe test expect */

const crawlerExceptions = require('./crawlerExceptions');

describe('analize if store code is an exception', () => {
  test('should return false if it is not', () => {
    const code = 'not';
    expect(crawlerExceptions(code)).toBeFalsy();
  });
  test('should return true if it is', () => {
    expect(crawlerExceptions('lolahome')).toBeTruthy();
    expect(crawlerExceptions('fastshop')).toBeTruthy();
    expect(crawlerExceptions('artefacto')).toBeTruthy();
  });
});
