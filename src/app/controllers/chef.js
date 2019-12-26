const Chef = require('../models/Chef')


module.exports = {
    index(req, res) {

        Chef.all(function(chefs) {
            return res.render('admin/chefs', { chefs })
        })
    },
    create(req, res) {
        return res.render('admin/createChef')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        Chef.create(req.body, function(chefs) {
            return res.redirect(`/admin/chefs/${chefs.id}`)
        })
    },
    show(req, res) {
        Chef.find(req.params.id, function(chefs) {
            if(!chefs) return res.send('Chefs not found!')

            return res.render('admin/chef', { chefs })
        })

    },
    edit(req, res) {
        Chef.update(req.params.id, function(items) {
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
