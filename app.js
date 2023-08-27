// it holds express js resources and also routes..the functionality of app js is to hold configuration

const express=require('express');
const app=new express();
const router=require('./src/routes/api');

app.use('/api',router);
module.exports=app;