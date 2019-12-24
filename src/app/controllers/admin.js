const Admin = require('../models/Admin')


module.exports = {
    index(req, res) {

        Admin.all(function(items) {
            return res.render('admin/index', { items })
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

        Admin.create(req.body, function(items) {
            return res.redirect(`/admin/recipes/${items.id}`)
        })
    },
    show(req, res) {
        Admin.find(req.params.id, function(items) {
            if(!items) return res.send('Recipe not found!')

            return res.render('admin/recipe', { items })
        })

    },
    edit(req, res) {
        Admin.update(req.params.id, function(items) {
            if(!items) return res.send('Recipe not found!')

            return res.render('admin/edit', { items })
        })
    },
    put(req, res) {
        return

    },
    delete(req, res) {
        return

    }
}
