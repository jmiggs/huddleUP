if (process.env.NODE_ENV === 'production') {
    module.exports = require('./aws_prod');
} else {
    module.exports = require('./aws_dev');
}