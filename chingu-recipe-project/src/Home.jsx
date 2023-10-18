import RecipePopUp from "./RecipePopUp"
import Searchbar from "./Searchbar"
import Footer from './Footer'
import './App.css'
function Home() {
  return (
    <main className="home relative mt-32">
      <Searchbar/>
     <RecipePopUp/>
     <Footer/>
    </main>
  )
}

export default Home
