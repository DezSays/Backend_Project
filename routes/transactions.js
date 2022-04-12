
const express = require('express');
const router = express.Router()
const authLogin = require('../auth/auth');

const db = require('../models');

const findAll = async() => {
    try{
        let records = await db.transactions.findAll(); 

        console.log(records[1].inCart);

        return records
    }
    catch(error){
        return []
    }

}

findAll()


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

router.post('/transactions/:id', async (req, res) => {

    try {

        let {inCart, itemID, userID} = req.body;

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
        // let userID = req.body.userID;

        let userID = req.params.id

        // await db.transactions.update({inCart: true}, {where: {id: req.params.id}})
        
        let records = await db.transactions.findAll({where: {userID: userID}})

        console.log(userID);
    
        // const records = await findAll(); 

        // console.log(records);
    
        // res.json(records)

        res.render("transactions.ejs", {records})
    }
    catch(error){

        console.log(error);
        res.json([])
    }

    res.send('transactions')

})

// router.delete('/transactions/:id', (req, res) => {

//     try {

//         let id = req.params.id
    
//         await db.transactions.destroy({where: {id: id}})
    
//         let records = await findAll()
    
//         res.json(records)
    
//     } catch (error) {
//         console.log(error);
//         res.json([])
//     }


//     res.send('transactions')

// })


router.post('/logout', (req, res)=>{

    req.session = null;

    res.redirect('/login')
})


module.exports = router;