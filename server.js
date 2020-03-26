const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const graphqlHttp = require('express-graphql');
const cookieParser = require('cookie-parser');
const app = express();

require('dotenv');

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/graphql', graphqlHttp({
    schema,
    rootValue
}));

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@cluster0-y78lp.mongodb.net/test?retryWrites=true&w=majority`,
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