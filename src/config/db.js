const { Pool } = require('pg')

module.exports = new Pool({
    user: 'jonyreis',
    password: '24nov18',
    host: 'localhost',
    port: 5432,
    database: 'foodfy'
})