const db = require('../db');

const getAllProducts = async (req, res) => {
    try {
        const products = await db.query('select * from products');
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await db.query('insert into products (name, price, company, rating) values ($1, $2, $3, $4) returning *', [req.body.name, req.body.price, req.body.company, req.body.rating]);
        res.status(201).json({ product });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const product = await db.query('select * from products where id = $1', [req.params.id]);
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await db.query('update products set name = $1, price = $2, company = $3, rating = $4 where id = $5 returning *', [
            req.body.name,
            req.body.price,
            req.body.company,
            req.body.rating,
            req.params.id,
        ]);
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await db.query('delete from products where id = $1', [req.params.id]);
        res.status(204).json({ product });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = { getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct };
