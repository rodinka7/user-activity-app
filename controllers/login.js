const { createUID } = require('../utils');

module.exports = (req, res) => {
    if (req.cookies.uid) return;

    const uid = createUID();

    res.cookie('uid', uid, {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES),
        // httpOnly: true
    });
}