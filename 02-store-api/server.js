require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const products = require('./routes/products');

const notFoundMiddleware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');

app.use(express.json());
app.use('/api/v1/products', products);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, console.log(`Server is listening on port ${port}`));
