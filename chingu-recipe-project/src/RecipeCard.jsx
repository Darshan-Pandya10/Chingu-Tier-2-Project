import './App.css'

function RecipeCard({recipe}) {

    console.log(recipe)
    // console.log('hello world')
    const {cuisineType , image , label} = recipe;

  return (
    <div className="recipe-card" key={recipe.index}>
      <img className="recipe-image" src={image} alt="recipe image" />
      <h3 className="recipe-label">{label}</h3>
      <p className="recipe-cuisineType">{cuisineType}</p>
    </div>
  )
}

export default RecipeCard
