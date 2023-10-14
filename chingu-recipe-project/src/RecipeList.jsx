import { useState } from "react"
import RecipeCard from "./RecipeCard"
import {v4 as uuidv4 } from 'uuid'
import RecipePopUp from "./RecipePopUp"
import './App.css'


function RecipeList({data}) {

    const {hits} = data

    const [isPopUpVisible,setIsPopUpVisible] = useState(false)

    const [popUpData,setPopUpData] = useState(null)

    function getRecipe(recipe){
        console.log(recipe)
        setIsPopUpVisible(true)
        setPopUpData(recipe)
    }   

    function closeRecipePopUp() {
      setIsPopUpVisible(false)
  }

    return (
    <div className="recipe-list" key={data.index}>
    {hits ?
      hits.map(hit => {
        const id = uuidv4()
        const {recipe} = hit;
        return <RecipeCard recipe={recipe}
         key={id}
         id={id} 
         getRecipe={getRecipe}
         closeRecipePopUp={closeRecipePopUp}  />
      }) 
      : 
      <h1>There is an error while fetching !</h1>
    }
    {isPopUpVisible && <RecipePopUp 
    data={popUpData}
    closeRecipePopUp={closeRecipePopUp}/>}
    </div>
  ) 
  
}

  

export default RecipeList
