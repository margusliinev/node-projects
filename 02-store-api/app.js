require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const port = 3000;
const products = require('./routes/products');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

app.use('/', products);
app.use(notFound);
app.use(errorHandler);

async function start() {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();
