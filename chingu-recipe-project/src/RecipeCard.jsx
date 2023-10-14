import './App.css'
import {FaAngleDoubleRight} from 'react-icons/fa';

function RecipeCard({recipe ,getRecipe}) {

    const {cuisineType , image , label} = recipe;


  return (
    <div className="recipe-card">
      <img className="recipe-image" src={image} alt="recipe image" />
      <h3 className="recipe-label">{label}</h3>
      <p className="recipe-cuisineType">{cuisineType}</p>
          <button className='card-button' onClick={() => {getRecipe(recipe)}}>
            <p>Get More Info</p>
            <FaAngleDoubleRight/>
            </button>
    </div>
  )
}

export default RecipeCard
