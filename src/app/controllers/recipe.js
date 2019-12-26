const Recipe = require('../models/Recipe')


module.exports = {
    index(req, res) {

        Recipe.all(function(items) {
            return res.render('admin/recipes', { items })
        })
    },
    create(req, res) {
        return res.render('admin/createRecipe')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        Recipe.create(req.body, function(items) {
            return res.redirect(`/admin/recipes/${items.id}`)
        })
    },
    show(req, res) {
        Recipe.find(req.params.id, function(items) {
            if(!items) return res.send('Recipe not found!')

            return res.render('admin/recipe', { items })
        })

    },
    edit(req, res) {
        Recipe.update(req.params.id, function(items) {
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
