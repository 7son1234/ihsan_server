const { Router } = require('express')
const{createNewUser, login} =require('../controller/user.controller')

const userRouter = Router();

userRouter.post('/createNewUser', createNewUser)
userRouter.post('/login', login)
module.exports= userRouter