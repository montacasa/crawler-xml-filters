/**
 * Update product looping fields
 *
 * @param  {Array<string>} fields           List of fields to look inside product
 * @param  {Object}        product          Where the actual fields are
 * @param  {Object}        services         Sanitization and registration services
 * @param  {Object}        productToUpdate  Collection to be updated
 * @return {Object}
 */
const loop = (fields, product, services) => {
  const {sanitizer, sanitize} = services;
  const data = {};

  for (let f = fields.length - 1; f >= 0; f--) {
    let key = fields[f];
    let value = product[key];

    // sanitize keys and values
    value = sanitizer.value(key, value, sanitize);
    key = sanitizer.key(key, sanitize);

    // update the field
    if (value) {
      Object.assign(data, {[key]: value});
    }
  }
  return data;
};

module.exports = loop;
