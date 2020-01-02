// const { date } = require('../../lib/utils')

const db = require('../../config/db')


module.exports = {
    all(callback) {
        db.query(`SELECT * FROM receipts`, function(err, results) {
            if(err) return res.send('Database Error!')

            callback(results.rows)
        })
    },
    // find(id, callback) {
    //     db.query(`
    //         SELECT * 
    //         FROM receipts
    //         WHERE id = $1`, [id], function(err, results) {
    //             if(err) throw `Database Error! ${err}`

    //             callback(results.rows[0])
    //     })
    // },
    find(id, callback) {

        db.query(`
            SELECT receipts.*, chefs.name AS chef_name 
            FROM receipts
            LEFT JOIN chefs ON (receipts.chef_id = chefs.id)
            WHERE receipts.id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows[0])
        }) 
    },
    // create(data, callback) {

    //     const query = `
    //         INSERT INTO receipts (
    //             chef_id,
    //             image,
    //             title,
    //             ingredients,
    //             preparation,
    //             information,
    //             created_at
    //         ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    //         RETURNING id
    //     `

    //     const values = [
    //         data.chef_id,
    //         data.image,
    //         data.title,
    //         data.ingredients,
    //         data.preparation,
    //         data.information,
    //         date(Date.now()).iso
    //     ]

    //     db.query(query, values, function(err, results) {
    //         if(err) return res.send('Database Error!')

    //         callback(results.rows[0])
    //     })
    // },
    // find(id, callback) {
    //     db.query(`
    //         SELECT *
    //         FROM receipts
    //         WHERE id = $1`, [id], function(err, results) {
    //             if(err) throw `Database Error! ${err}`

    //             callback(results.rows[0])
    //     }) 
    // }
    // update(data, callback) {
    //     const query = `
    //         UPDATE receipts SET
    //         image,
    //         title,
    //         ingredients,
    //         preparation,
    //         information,

    //     `
    // }

    allchefs(callback) {
        db.query(`SELECT * FROM chefs`, function(err, results) {
            if(err) return res.send('Database Error!')

            callback(results.rows)
        })
    }
}