
const express = require('express');
const router = express.Router()
// const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs');
const db = require('../models');
const cookieSession = require('cookie-session');

router.use(cookieSession({
    name: 'session',
    keys: ['encryptkeys567856756*$^*%^*%^*'],
    maxAge: 1 * 24 * 60 * 60 * 1000
}))


router.get('/login', (req,res) => {

    res.render('login')
})

router.post('/login', async (req, res)=>{

    try {

    let {username, password} = req.body

    let user = await db.users.findAll({where: {username: username}})
    user = user[0]
    // console.log(user.password);

    let result = bcrypt.compareSync(password, user.password)

    if(result) {
        console.log('Passwords Match!');
        req.session.userID = user.id
        res.redirect('/')
    } else {
        // password is incorrect
        res.render('login', {message: 'Incorrect username or password'})
        console.log('Incorrect username or password');
    }
}
catch (error) {
    console.log(error);
    res.render('login', {message: 'An error has occurred'})
}
})

    //scrape info from header - done
    // check if user is in db - done
    // encrypt login password - done
    // compare encrypted passwords - done
    // place on the session so login can persist - done

module.exports = router;