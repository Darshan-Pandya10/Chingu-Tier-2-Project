import RecipePopUp from "./RecipePopUp"
import Searchbar from "./Searchbar"
import './App.css'
function Home() {
  return (
    <main className="home">
      <Searchbar/>
     <RecipePopUp/>
    </main>
  )
}

export default Home
