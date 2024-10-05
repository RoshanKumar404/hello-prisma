const express= require('express')
const {signup}=require('../Controllers/userController')
const router=express.Router();

router.route('/Signup').post(signup)

module.exports=router