const Product = require('../models/product');

function welcomePage(req, res) {
    res.status(200).send('<h1>Store API</h1>');
}

async function getAllProducts(req, res) {
    const { featured, company, name } = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    const products = await Product.find(queryObject);
    res.status(200).json({ products, nbHits: products.length });
}

module.exports = { welcomePage, getAllProducts };
