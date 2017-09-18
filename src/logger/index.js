/**
 * Save a log
 *
 * @param  {Any}   data Defines a category, a service and Model
 * @param {String} message
 * @param {Strong} scope Optional
 */
const logger = (data, message, scope) => {
  const {category, service, Log} = data;

  if (!service || !category || !message) {
    console.log('Logs must have a service, a category and a message');
  }

  const log = new Log({
    service,
    category,
    scope,
    message,
  });
  log.save();

  const date = new Date();
  const scopeSegment = scope ? `(${scope})` : '';
  console.log(`${date} > ${category}/${service}${scopeSegment}: ${message}`);
};

module.exports = logger;
