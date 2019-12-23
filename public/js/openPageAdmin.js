const recipes = document.querySelectorAll('.description a')

for (let recipe of recipes) {
  recipe.addEventListener('click', function () {
    const recipeIndex = recipe.getAttribute('id') 
    window.location.href=`/admin/recipes/${recipeIndex}`;
  })
}