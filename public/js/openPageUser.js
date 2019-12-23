function indexImg() {
  const recipes = document.querySelectorAll('img')

  for (let recipe of recipes) {
    recipe.addEventListener('click', function () {
      const recipeIndex = recipe.getAttribute('id') 
      window.location.href=`/recipes/${recipeIndex}`;
    })
  }
}

function indexH3() {
  const recipes = document.querySelectorAll('h3')

  for (let recipe of recipes) {
    recipe.addEventListener('click', function () {
      const recipeIndex = recipe.getAttribute('id') 
      window.location.href=`/recipes/${recipeIndex}`;
    })
  }
}

indexImg()
indexH3()
