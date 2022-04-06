
const express = require('express');
const app = express();

// const helmet = require('helmet');
// const cookieSession = require('cookie-session');
// const passport = require('passport');
// require('./auth/passport-config')(passport); //this passes the global instance of passport to config file and invoking function


const port = 3000;

//magic lines
// router.use(express.urlencoded({extended: false})); 

// router.use(express.json());

const db = require('./models/database');

app.use(express.static('public'));

app.set('view engine', 'ejs');

// app.use(helmet())


// app.use(cookieSession({
//     name: 'session',
//     keys: ['fhedjklsbsvliughidflugjklbdf'],
//     maxAge: 14 * 24 * 60 * 60 * 1000
// }));

// app.use(passport.initialize());
// app.use(passport.session());






//routes
app.use(require('./routes/index'));


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})