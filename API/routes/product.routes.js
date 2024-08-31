const { Router } = require('express');
const { createNewproduct, findprodact } = require('../controller/product.controller');

const productRouter = Router();

productRouter.post('/createNewproduct', createNewproduct)
productRouter.post('/findprodact', findprodact)
module.exports= productRouter