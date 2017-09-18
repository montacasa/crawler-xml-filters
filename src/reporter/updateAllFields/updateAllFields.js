/**
 * Update a list of objects to use with a batch function to update
 * a Report inside Product Controller
 *
 * @param  {Object} fields Object of fields to update inside the Report
 * @return {Array<object>}
 */
const updateAllFields = fields => {
  const {
    quantity,
    updated,
    dropped,
    created,
    ignored,
    noChanges,
    withoutSku,
    withoutUrl,
    repeatedSku,
    repeatedUrl,
    unknown,
    errors,
    warnings,
    status,
  } = fields;
  return [
    {key: 'quantity', value: quantity},
    {key: 'updated', value: updated},
    {key: 'dropped', value: dropped},
    {key: 'created', value: created},
    {
      key: 'ignored',
      value: {
        total: ignored,
        no_changes: noChanges,
        without_sku: withoutSku,
        without_url: withoutUrl,
        repeated_sku: repeatedSku,
        repeated_url: repeatedUrl,
        unknown: unknown,
      },
    },
    {key: 'errors', value: errors},
    {key: 'warnings', value: warnings},
    {key: 'status', value: status},
  ];
};

module.exports = updateAllFields;
