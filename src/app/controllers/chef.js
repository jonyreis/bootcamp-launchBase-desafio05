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
        Chef.find(req.params.id, function(chef) {
            if(!chef) return res.send('Chef not found!')

            return res.render('admin/chef', { chef })
        })

    },
    edit(req, res) {
        Chef.find(req.params.id, function(chefs) {
            if(!chefs) return res.send('Chef not found!')

            return res.render('admin/editChef', { chefs })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }
        
        Chef.update(req.body, function() {
            return res.redirect(`/admin/chefs/${req.body.id}`)
        })
    },
    delete(req, res) {
        Chef.delete(req.body.id, function() {
            return res.redirect("/admin/chefs")
        })
    }
}
