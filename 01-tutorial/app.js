const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));

app.all('*', (req, res) => {
    res.status(404).send('Resource not found');
});

app.listen(5555, () => {
    console.log('server is listening on 5555...');
});
