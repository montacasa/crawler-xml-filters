/* global test expect describe*/
import crawlerXmlFilters from './';
import {
  adder,
  analyzer,
  logger,
  registerer,
  reporter,
  sanitizer,
  updater,
} from './';

test("should import default and find it's functions", () => {
  const isItAFunction =
    typeof crawlerXmlFilters.analyzer.crawlerExceptions === 'function';
  expect(isItAFunction).toBeTruthy();
});

test('adder', () => {
  const isItAFunction = typeof adder === 'function';
  expect(isItAFunction).toBeTruthy();
});

describe('analyzer', () => {
  test('comparator', () => {
    const isItAFunction = typeof analyzer.comparator === 'function';
    expect(isItAFunction).toBeTruthy();
  });
  test('crawlerExceptions', () => {
    const isItAFunction = typeof analyzer.crawlerExceptions === 'function';
    expect(isItAFunction).toBeTruthy();
  });
  test('json', () => {
    const isItAFunction = typeof analyzer.json === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});

describe('logger', () => {
  test('should have an logger function', () => {
    const isItAFunction = typeof logger === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});

describe('register', () => {
  test('should have an updateField function', () => {
    const isItAFunction = typeof registerer.updateField === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have an loopFields function', () => {
    const isItAFunction = typeof registerer.loopFields === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});

describe('report', () => {
  test('should have an error function', () => {
    const isItAFunction = typeof reporter.error === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have an update function', () => {
    const isItAFunction = typeof reporter.update === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a batch function', () => {
    const isItAFunction = typeof reporter.batch === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a updateAllFields function', () => {
    const isItAFunction = typeof reporter.updateAllFields === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});

describe('sanitizer', () => {
  test('should have a key function', () => {
    const isItAFunction = typeof sanitizer.key === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have an value function', () => {
    const isItAFunction = typeof sanitizer.value === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a duplicated function', () => {
    const isItAFunction = typeof sanitizer.duplicated === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a underscore function', () => {
    const isItAFunction = typeof sanitizer.underscore === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a __texts function', () => {
    const isItAFunction = typeof sanitizer.__texts === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a arrays function', () => {
    const isItAFunction = typeof sanitizer.arrays === 'function';
    expect(isItAFunction).toBeTruthy();
  });

  test('should have a installment function', () => {
    const isItAFunction = typeof sanitizer.installment === 'function';
    expect(isItAFunction).toBeTruthy();
  });
});

test('updater', () => {
  const isItAFunction = typeof updater === 'function';
  expect(isItAFunction).toBeTruthy();
});
