
const express = require('express');
const router  = express.Router();


router.get('',async(req,res,next)=>{
    res.render('index');
});

router.get('/manage',async(req,res,next)=>{
    res.render('manage');
});

router.get('/addcustomer',async(req,res,next)=>{
    res.render('addcustomer');
});

router.get('/transfermoney',async(req,res,next)=>{
    res.render('transfermoney');
});

router.get('/dashboard',async(req,res,next)=>{
    res.render('dashboard');
});

router.get('/transaction',async(req,res,next)=>{
    res.render('transaction');
});



router.get('/user/:id',async(req,res,next)=>{
    res.render('user',{uid:req.params.id});
});



// exporting routes
   module.exports = router;
