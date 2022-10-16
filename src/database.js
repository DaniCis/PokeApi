const { Pool } = require('pg');

const db = new Pool({
    user:'postgres',
    password:'12345',
    host:'localhost',
    port: 5432,
    database:'pokeapi'
})

module.exports = db