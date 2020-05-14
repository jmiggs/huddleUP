const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateUserUpdate(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : '';
    // data.picture = validText(data.picture) ? data.picture : '';
    // data.location = validText(data.location) ? data.location : '';
    // data.bio = validText(data.bio) ? data.bio : '';
    // data.sports = validText(data.sports) ? data.sports : '';

    if (Validator.isEmpty(data.username, { min: 2, max: 30 })) {
        errors.username = "Username must be between 2 and 30 characters";
    }

    // if (Validator.isEmpty(data.picture))
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}