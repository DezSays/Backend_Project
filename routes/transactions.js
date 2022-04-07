
const express = require('express');

const router = express.Router()

const authLogin = (req, res, next) => {
    //check to see if username is on the session

    if(req.session.username){
        next()
    }
    else{
        res.redirect('/login')
    }
};

// protected
router.get('/transactions', (req, res) => {

    res.render('transactions')

})

router.all('/transactions', authLogin, (req, res, next) =>{
    next()
})

module.exports = router;