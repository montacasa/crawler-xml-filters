/* @flow */
import adder from './adder';
import analyzer from './analyzer';
import logger from './logger';
import registerer from './registerer';
import reporter from './reporter';
import sanitizer from './sanitizer';
import updater from './updater';

const crawlerXmlFilters = {
  adder,
  analyzer,
  logger,
  registerer,
  reporter,
  sanitizer,
  updater,
};

export {adder, analyzer, logger, registerer, reporter, sanitizer, updater};

export default crawlerXmlFilters;
