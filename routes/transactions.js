
const express = require('express');
const router = express.Router()
const authLogin = require('../auth/auth');

// protected
router.get('/transactions', (req, res) => {

    res.render('transactions')

})

router.all('/transactions/:id', authLogin, (req, res, next) =>{
    next()
})

router.get('/transactions/:id', (req, res) => {

    res.send('transactions')

})


router.post('/logout', (req, res)=>{

    req.session = null;

    res.redirect('/login')
})


module.exports = router;