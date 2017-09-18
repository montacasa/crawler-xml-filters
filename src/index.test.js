/* global test expect */
import crawlerXmlFilters from './';
import {analyzer, logger, registerer, reporter, sanitizer, updater} from './';

test('should import default and use it', () => {
  const isItAFunction = typeof analyzer.crawlerExceptions === 'function';
  expect(isItAFunction).toBeTruthy();
})
