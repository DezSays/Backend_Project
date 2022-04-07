
const pgp = require('pg-promise')();

let connectionString = {
    host: 'batyr.db.elephantsql.com',              //ip is 127.000.000
    port: 5432,                     //port for postgres is always 5432
    database: 'mcprjwjm',   //this set up is consistent but only the database name will change
    user: 'mcprjwjm'
}

let db = pgp(connectionString)

module.exports = db;