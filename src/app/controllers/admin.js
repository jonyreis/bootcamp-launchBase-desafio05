const db = require('../config/db')


module.exports = {
    index(req, res) {
        db.query(`SELECT * FROM receipts`, function(err, results) {
            if(err) return res.send('Database Error!')

            return res.render('admin/index', { items: results.rows })
        })
    },
    create(req, res) {
        return res.render('admin/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        const query = `
            INSERT INTO receipts (
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `

        const values = [
            req.body.chef_id,
            req.body.image,
            req.body.title,
            req.body.ingredients,
            req.body.preparation,
            req.body.information,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            if(err) return res.send('Database Error!')

            return res.redirect(`/admin/recipes/${results.rows[0].id}`)
        })

    },
    show(req, res) {
        return

    },
    edit(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        let { image, title, author, ingredients, preparation, information } = req.body

        return

    },
    put(req, res) {
        return

    },
    delete(req, res) {
        return

    }
}
