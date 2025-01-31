const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.delete('/:codigo_producto', productController.deleteProduct);

module.exports = router;
