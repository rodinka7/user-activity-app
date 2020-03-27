const { v4 } = require('uuid');

module.exports = {
    createUID: () => v4()
};