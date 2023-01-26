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

async function createProduct(req, res) {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
}

module.exports = { welcomePage, getAllProducts, createProduct };
