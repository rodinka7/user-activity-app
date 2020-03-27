const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login');
const { saveAction, getActions } = require('../controllers/action');
const { uidError, success } = require('../constants/notifications');

router.get('/', (req, res) => {
    res.redirect('/home');
});

router.get('/home', (req, res) => {
    try {
        loginCtrl(req, res);
        res.status(200).render('pages/index');
    } catch(err) {
        res
            .status(err.status || 500)
            .render('pages/error', err);
    }
});

router.get('/analitics', async (req, res) => {
    try {
        const data = await getActions();
        res
            .status(200)
            .render('pages/analitics', {activities: data});
    } catch(err) {
        res.statusMessage = err.message;
        res.sendStatus(err.status || 500);
    }
});

router.post('/post', async (req, res) => {
    if (!req.body.uid) {
        res.statusMessage = uidError;
        res.sendStatus(400);
    }

    try {
        await saveAction(req.body);
        res.statusMessage = success;
        res.sendStatus(200);
    } catch(err) {
        res.statusMessage = err.message;
        res.sendStatus(err.status || 500);
        console.log(err);
    }
});

module.exports = router;