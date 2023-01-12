const express = require('express');
const logger = require('./logger');
const app = express();

app.use(logger);

app.get('/', logger, (req, res) => {
    res.send('Home');
});

app.get('/about', logger, (req, res) => {
    res.send('About');
});

app.listen(5555, () => {
    console.log('server is listening on 5555...');
});
