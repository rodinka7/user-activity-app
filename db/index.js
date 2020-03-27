const Action = require('./models/action');

module.exports = {
    saveAction: data => {
        return Action.create({
            ...data,
            timestamp: Date.now()
        })
    },
    getActions: () => {
        try {
            return Action.find().sort({timestamp: -1});
        } catch(err) {
            console.log(err);
        }
    }
}