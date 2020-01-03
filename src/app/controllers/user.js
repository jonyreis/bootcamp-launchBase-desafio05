const User = require('../models/User')

// exports.home =  function(req, res) {
//     return res.render('user/home', { items : data.recipes })
// }

// exports.sobre = function(req, res) {
//     return res.render('user/sobre')
// }

// exports.recipes = function(req, res) {
//     return res.render('user/recipes', { items : data.recipes })
// }

// exports.showIndex = function (req, res) {
//     const recipeData = data.recipes // Array de receitas carregadas do data.js
//     const recipeIndex = req.params.index
//     const id = recipeData[recipeIndex - 1]
  
//     return res.render('user/recipe', { items: id } )
// }

module.exports = {
    index(req, res) {

        const { filter } = req.query

        if (filter) {
            User.findBy(filter, function(items) {
                return res.render('user/index', { items })
            })

        } else {
            User.all(function(items) {
                return res.render('user/index', { items })
            })
        }
    },
    sobre(req, res) {

        User.all(function(items) {
            return res.render('user/sobre')
        })
    },
    recipes(req, res) {

        User.all(function(items) {
            return res.render('user/recipes', { items })
        })
    },
    showRecipe(req, res) {

        User.find(req.params.id, function(item) {
            if(!item) return res.send('Recipes not found!')
            
            // items.created_at = date(items.created_at).format
            
            return res.render('user/recipe', { item })
        })
    },
    chefs(req, res) {

        User.allchefs(function(chefs) {
            return res.render('user/chefs', { chefs })
        })
    }
}
