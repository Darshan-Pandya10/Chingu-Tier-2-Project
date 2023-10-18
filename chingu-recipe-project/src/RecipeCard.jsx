import './App.css'
import {FaAngleDoubleRight} from 'react-icons/fa';

function RecipeCard({recipe ,getRecipe}) {

    const {cuisineType , image , label} = recipe;


  return (
    <div className="recipe-card w-72 min-h-[25rem] my-8 mx-10 sm:rounded-lg pb-2 ">
      <img className="recipe-image w-72 " src={image} alt="recipe image" />
      <h3 className="recipe-label px-0 pt-2 pb-2 text-lg sm:tracking-widest my-0 mx-2 text-black">{label}</h3>
      <p className="recipe-cuisineType sm:tracking-widest py-0 px-2 capitalize">{cuisineType}</p>
          <button className='card-button py-2 px-0 flex items-center w-32 justify-around border-2 border-solid border-transparent sm:text-base bg-transparent cursor-pointer mt-0 mx-2 mb-2  ' onClick={() => {getRecipe(recipe)}}>
            <p>Get More Info</p>
            <FaAngleDoubleRight/>
            </button>
    </div>
  )
}

export default RecipeCard
