const db = require('../../config/db')


module.exports = {
    all(callback) {
        db.query(`SELECT * FROM receipts`, function(err, results) {
            if(err) return res.send('Database Error!')

            callback(results.rows)
        })
    },
    allchefs(callback) {
        db.query(`
        SELECT chefs.*, count(receipts) AS total_receipts
        FROM chefs
        LEFT JOIN receipts ON (chefs.id = receipts.chef_id)
        GROUP BY chefs.id
        ORDER BY total_receipts DESC`, function(err, results) {
            if(err) return res.send('Database Error!')

            callback(results.rows)
        })
    },
    find(id, callback) {
        db.query(`
            SELECT receipts.*, chefs.name AS chef_name 
            FROM receipts
            LEFT JOIN chefs ON (receipts.chef_id = chefs.id)
            WHERE receipts.id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows[0])
        }) 
    }
}
