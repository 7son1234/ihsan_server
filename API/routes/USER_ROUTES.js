const { Router } = require('express')
const{createNewUser, login, updateCart} =require('../controller/user.controller')

const userRouter = Router();

userRouter.post('/createNewUser', createNewUser)
userRouter.post('/login', login)
userRouter.post('/updateCart', updateCart)
module.exports= userRouter