const express=require('express');
const router=express.Router();

const democontroller=require('../controllers/DemoController')


router.get('/demo',democontroller.demo);
router.get('/demo1',democontroller.demo1);
router.get('/demo2',democontroller.demo2);



module.exports=router;