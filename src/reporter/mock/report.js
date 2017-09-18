/* global jest */

const updatedReport = require('./emptyReport');

const report = {
  set: (key, value) => {
    Object.assign(updatedReport, {[key]: value});
  },
  save: () => jest.fn(),
};

module.exports = report;
