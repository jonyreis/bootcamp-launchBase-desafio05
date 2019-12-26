const express = require('express')
const users = require('./app/controllers/user')
const recipes = require('./app/controllers/recipe')
const chefs = require('./app/controllers/chef')

const routes = express.Router()

routes.get('/', users.home)
routes.get('/sobre', users.sobre)
routes.get('/recipes', users.recipes)
routes.get('/recipes/:index', users.showRecipe)
routes.get('/chefs', users.chefs)
routes.get('/chefs/:index', users.showChefs)


routes.get('/admin/recipes', recipes.index) // Mostrar a lista de receitas
routes.get('/admin/recipes/create'  , recipes.create) // Mostrar formulário de nova receita
routes.get('/admin/recipes/:id', recipes.show) // Exibir detalhes de uma receita
routes.get('/admin/recipes/:id/edit', recipes.edit) // Mostrar formulário de edição de receita

routes.post('/admin/recipes', recipes.post) // Cadastrar nova receita
routes.put('/admin/recipes', recipes.put) // Editar uma receita
routes.delete('/admin/recipes', recipes.delete) // Deletar uma receita

routes.get('/admin/chefs', chefs.index) // Mostrar a lista de chefs
routes.get('/admin/chefs/create', chefs.create) // Mostrar formulário de novo chef
routes.get('/admin/chefs/:id', chefs.show) // Exibir detalhes de um chef
// routes.get('/admin/chefs/:id/edit', recipes.edit) // Mostrar formulário de edição de receita

routes.post('/admin/chefs', chefs.post) // Cadastrar novo chef
// routes.put('/admin/chefs', recipes.put) // Editar uma receita
// routes.delete('/admin/chefs', recipes.delete) // Deletar uma receita

module.exports = routes