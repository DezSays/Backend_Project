
const express = require('express');

const router = express.Router()

const authLogin = (req, res, next) => {
    //check to see if username is on the session

    if(req.session.userID){
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

router.post('/logout', (req, res)=>{

    req.session = null;

    res.redirect('/login')
})

module.exports = router;