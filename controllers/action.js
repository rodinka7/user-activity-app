const { saveAction, getActions } = require('../db');

module.exports = {
    saveAction: data => saveAction(data),
    getActions: async () => {
        return await getActions();
    }
}