import {v4 as uuidv4}  from 'uuid';
import {FaAngleDoubleRight} from 'react-icons/fa';
import {RxCross1} from 'react-icons/rx'
import './App.css'



function RecipePopUp({data ,closeRecipePopUp}) {
   if(data){
    // console.log(data)
    const {label , mealType , ingredients , totalNutrients , url} = data;
    const nutrientArray = Object.values(totalNutrients)
    return (
    <div className="recipe-pop-up">
        <button onClick={() => closeRecipePopUp()} className='exit-btn'>
        <RxCross1/>
        </button>
      <h2>{label}</h2>

      {/* check if mealType is present in the response or not. */}
      {mealType ? 
      <div className="group mealType">
        {/* <h3><FaAngleDoubleRight/>Meal Type : </h3> */}
      {mealType.map((type) => {
            const id = uuidv4();
            return <p key={id}>{type}</p>
        })}
      </div>
      :
      <div className="group mealType">
        <h3><FaAngleDoubleRight/>Meal Type</h3>
      <p>no mealType found.</p>
      </div>
      }

      {/* check if ingredients is present in the response or not. */}
      {ingredients ? 
      
      <div className="group ingredients">
        <h3><FaAngleDoubleRight/>Ingredients</h3>
      {ingredients.map((ingredient) => {
            const id = uuidv4();
            return <p key={id}>{ingredient.text}</p>
        })}
      </div>
      :
      <div className="group ingredients">
        <h3><FaAngleDoubleRight/>Ingredients</h3>
      <p>no ingredients found.</p>
      </div>
      }

      {/* check if Nutrients is present in the response or not. */}
      {totalNutrients ? 
      <div className="group Nutrients">
        <div>
        <h3><FaAngleDoubleRight/>Nutrients</h3>
        </div>
        <div className="nutrient-flex">
            {nutrientArray.map((nutrient) => {
            const id = uuidv4();
            return <p className='nutrient' key={id}>{nutrient.label}</p>
        })}
        </div>
        
      </div>
      :
      <div className="group Nutrients">
        <h3><FaAngleDoubleRight/>Nutrients</h3>
        <p>no totalNutrients found.</p>
      </div>
      }

      {
        url ? 
        <div className='group url'>
        <a target='_blank' href={url}>Click for More!</a>
        </div>
        :
        <div className='group url'>
        <p>no url found.</p>
        </div>
      }
    


      
    </div>
  )
    }
    return null;
}

export default RecipePopUp
