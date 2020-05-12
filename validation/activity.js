const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateActivityInput(data) {
  let errors = {};
  
  data.title = validText(data.title) ? data.title : '';
  data.sport = validText(data.sport) ? data.sport : '';
  data.location = validText(data.location) ? data.location : '';
  data.numplayersneed = validText(data.numplayersneed) ? data.numplayersneed : '';

  if (Validator.isEmpty(data.title, { min: 3, max: 100 })) {
    errors.title = 'Please give a short Title for your event!';
  }

  if (!Validator.isInt(data.numplayersneed)) {
    errors.validnumber = 'Please enter a number';
  }

  if (Validator.isEmpty(data.sport)) {
    errors.sport = 'Please Choose an Activity!';
  }

  if (Validator.isEmpty(data.numplayersneed, { min: 2, max: 25})) {
    errors.numneed = 'Please keep gatherings to 2 to 25 people';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Please specify a location';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};