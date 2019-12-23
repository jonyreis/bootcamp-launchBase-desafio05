// const data = require('../data.json')


exports.home =  function(req, res) {
    return res.render('user/home', { items : data.recipes })
}

exports.sobre = function(req, res) {
    return res.render('user/sobre')
}

exports.recipes = function(req, res) {
    return res.render('user/recipes', { items : data.recipes })
}

exports.showIndex = function (req, res) {
    const recipeData = data.recipes // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index
    const id = recipeData[recipeIndex - 1]
  
    return res.render('user/recipe', { items: id } )
}


// module.exports = {
//     index(req, res) {
//         return res.render('admin/index', { items: data.recipes })
//     },
//     create(req, res) {
//         return res.render('admin/create')
//     },
//     post(req, res) {
//         const keys = Object.keys(req.body)

//         for (key of keys) {
//             if (req.body[key] == "") {
//                 return res.send('Please, fill all fields!')
//             }
//         }

//         let { image, title, author, ingredients, preparation, information } = req.body

//         return

//     },
//     show(req, res) {
//         return
        
//     },
//     edit(req, res) {
//         const keys = Object.keys(req.body)

//         for (key of keys) {
//             if (req.body[key] == "") {
//                 return res.send('Please, fill all fields!')
//             }
//         }

//         let { image, title, author, ingredients, preparation, information } = req.body

//         return

//     },
//     put(req, res) {
//         return

//     },
//     delete(req, res) {
//         return

//     }
// }
