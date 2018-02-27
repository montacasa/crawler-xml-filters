/**
 * Sanitize installment field — it basically checks for specific object format and nested __text fields
 *
 * @param  {Object} field
 * @return {Object}
 */
const installment = field => {
  if (!field) {
    return null;
  }
  const months = (field.months && field.months.__text) || field.months;
  const price = (field.amount && field.amount.__text) || field.amount;
  return {
    months: months || null,
    price: price || null,
  };
};

module.exports = installment;
