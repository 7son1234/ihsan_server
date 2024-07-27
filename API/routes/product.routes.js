const { Router } = require('express');
const { createNewproduct } = require('../controller/product.controller');

const productRouter = Router();

productRouter.post('/createNewproduct', createNewproduct)
module.exports= productRouter