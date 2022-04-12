
const express = require('express');
const router = express.Router()
const authLogin = require('../auth/auth');

const db = require('../models');


// protected
router.get('/transactions', async (req, res) => {

    // let userID = req.session.userID
    let userID = 14;
    let records = await db.transactions.findAll({where: {userID: userID}})
    res.render("transactions", {records: records})

})

router.all('/transactions/:id', authLogin, (req, res, next) =>{
    next()
})

router.get('/transactions/:id', (req, res) => {

    res.send('transactions')

})

router.post('/transactions/:id', async (req, res) => {

    try {

        let {inCart, itemID, userID} = req.body; // session id

        console.log(inCart, itemID, userID);

        let cart = await db.transactions.create({
            inCart: true,
            itemID: itemID,
            userID: userID
        })
    }
    catch (error) {

        console.log(error);

        res.render('transactions', {
            error: "error: you cannot add this item"
        })
    }

})

router.put('/transactions/:id', async (req, res) => {

    try{

        let userID = req.params.id
        
        let records = await db.transactions.findAll({where: {userID: userID}})

        console.log(userID);

        res.render("transactions", {records})
    }
    catch(error){

        console.log(error);
    }

    res.send('transactions')

})

router.delete('/transactions/:id', async (req, res) => {

    try {

        let id = req.params.id
    
        let records = await db.transactions.destroy({where: {id: id}})

        res.render("transactions", {records})
    
    } catch (error) {
        console.log(error);
    }

    res.send('transactions')

})


router.post('/logout', (req, res)=>{

    req.session = null;

    res.redirect('/login')
})


module.exports = router;