
const express = require('express');

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

router.get('/', (req, res) => {

    res.render('index')


})


// :id, protected
// add res.redirect for when user clicks on item 
router.get('/:id', (req, res) => {

    res.render('itemView')

})

// router.all('/:id', authLogin, (req, res, next) =>{
//     next()
// })


module.exports = router;