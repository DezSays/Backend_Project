
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
router.get('/add-items', (req, res) => {

    res.render('addItems')

})

router.all('/add-items', authLogin, (req, res, next) =>{
    next()
})

module.exports = router;