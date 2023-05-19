require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/index.js');
app.use(express.json());
app.use('/', router);

const port = 5000;

app.listen(port, console.log(`Server is listening on port ${port}`));
