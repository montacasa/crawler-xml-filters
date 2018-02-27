// NOTE: deprecated!
// TODO: Remove it from this module
/**
 * Update a field within a product
 *
 * @param {String}  key:          string  Field key
 * @param {String}  field:        string  Field value
 * @param {Object}  product:      any     Product mongodb object
 * @return{Boolean}  Return true if it had any updates
 */
const update = (key, field, product) => {
  if (!field) {
    return false;
  }

  switch (key) {
    case 'sku':
    case 'url':
    case 'id':
    case 'link':
      return false;
    default:
  }

  const originalField = product.get(key);

  // check if fields are not equal
  if (!originalField || field.toString() !== originalField.toString()) {
    // update product
    product.set(key, field);
    product.save();
    return true;
  }
  return false;
};

module.exports = update;
