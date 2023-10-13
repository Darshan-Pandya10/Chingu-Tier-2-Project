import RecipeCard from "./RecipeCard"

function RecipeList({data , ingredient}) {

    const {hits} = data
    // const date = new Date()
    console.log(hits)
   
    return (
    <div className="recipe-list" key={data.index}>
    {hits ?
      hits.map(hit => {
        const {recipe} = hit;
        // console.log(recipe.label)
        // return <h1 key={date.getSeconds()}>recipe card</h1>
        return <RecipeCard recipe={recipe} key={recipe.label} />
      }) 
      : 
      <h1>There is an error while fetching !</h1>
    }
    </div>
  ) 
  
}

  

export default RecipeList
