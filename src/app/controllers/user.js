const Recipe = require('../models/Recipe')
const Chef = require('../models/Chef')


module.exports = {
    index(req, res) {

        const { filter } = req.query

        if (filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render('user/recipes', { filter, recipes })
            })

        } else {
            Recipe.all(function(recipes) {
                return res.render('user/index', { recipes })
            })
        }
    },
    about(req, res) {

        const { filter } = req.query

        if (filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render('user/recipes', { filter, recipes })
            })

        } else {

            return res.render('user/sobre')
        }
        
    },
    recipes(req, res) {

        const { filter } = req.query

        if (filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render('user/recipes', { filter, recipes })
            })

        } else {

            Recipe.all(function(recipes) {
                return res.render('user/recipes', { recipes })
            })
        }

    },
    showRecipe(req, res) {

        const { filter } = req.query

        if (filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render('user/recipes', { filter, recipes })
            })

        } else {

            Recipe.find(req.params.id, function(recipe) {
                if(!recipe) return res.send('Recipes not found!')
                            
                return res.render('user/recipe', { recipe })
            })
        }
    },
    chefs(req, res) {

        const { filter } = req.query

        if (filter) {
            Recipe.findBy(filter, function(recipes) {
                return res.render('user/recipes', { filter, recipes })
            })

        } else {

            Chef.all(function(chefs) {
                return res.render('user/chefs', { chefs })
            })
        }
    }
}
