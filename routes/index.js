
const express = require('express');
const db = require('../models');

const router = express.Router()

// const authLogin = (req, res, next) => {
//     //check to see if username is on the session

//     if(req.session.username){
//         next()
//     }
//     else{
//         res.redirect('/login')
//     }
// };

router.get('/', async (req, res) => {

    let items = await db.items.findAll()
console.log(items);
    res.render('index', {
        itemsdata: items
    })
})


// :id, protected
// add res.redirect for when user clicks on item
router.get('/addItems/:id', (req, res) => {
    var itemId = req.params.id;
    res.render('itemView')
})

// router.all('/:id', authLogin, (req, res, next) =>{
//     next()
// })


module.exports = router;