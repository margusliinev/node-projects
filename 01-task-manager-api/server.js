require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');

app.use(express.json());
app.use('/', tasks);
app.use(notFound);

app.listen(port, console.log(`Server is listening on port ${port}`));
