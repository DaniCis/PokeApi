const { Pool } = require('pg');
const { conn } = require('./config');

const db = new Pool({
    user: conn.user,
    password: conn.password,
    host: conn.host,
    port: conn.port,
    database: conn.database,
});

module.exports = db