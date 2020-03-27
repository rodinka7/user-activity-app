const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const httpErrors = require('http-errors');

const path = require('path');
const app = express();

require('dotenv').config();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.resolve(__dirname, './frontend/public')));

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', require('./routes'));

app.use((req, res, next) => {
    next(httpErrors(404));
});

app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('pages/error', err);
});

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@cluster0-y78lp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    const server = app.listen(process.env.NODE_PORT, () => {
        console.log(`Server is listening to ${server.address().port}`);
    });
}).catch(err => {
    console.log(err);
})