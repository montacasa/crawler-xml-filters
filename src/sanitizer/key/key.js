const updater = require('../../updater');

/**
 * Verify if a key is an exception and it should be updated to a different name
 *
 * @param  {String}  key   The key to be sanitized
 * @param  {Object}  list  The object to be sanitized
 * @return {String}        The new key value
 */
const keySanitizer = (key, list) => {
  // TODO: Make closure less verbose
  switch (key) {
    // Most common key pairs (Default)
    case 'id':
      return updater(key, list.sku, 'sku');
    case 'link':
      return updater(key, list.url, 'url');
    case 'title':
      return updater(key, list.name, 'name');

    // Other possible key pairs (Default)
    case 'brand':
      return updater(key, list.manufacturer, 'manufacturer');
    case 'warranty':
      return updater(key, list.garantee, 'garantee');
    case 'summary':
      return updater(key, list.description, 'description');
    case 'sale_price':
      return updater(key, list.special_price, 'special_price');

    // Accepted key exceptions (Google)
    case 'additional_image_link': {
      const image_link = updater(key, list.image_link, 'image_link');
      const images = updater(key, list.images, 'images');
      if (list.image_link) {
        return image_link;
      }
      if (list.image_link) {
        return images;
      }
      return images;
    }

    case 'image_link':
      return updater(key, list.images, 'images');

    case 'google_product_category':
      return updater(key, list.categories, 'categories');

    case 'manufacturer':
      return updater(key, list.brand, 'brand');

    // Default => return the key itself!
    default:
  }
  return key;
};

module.exports = keySanitizer;
