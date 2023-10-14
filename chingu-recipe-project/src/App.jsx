import './App.css'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Footer from './Footer'
import RecipePopUp from './RecipePopUp'
function App() {
  return (
    <div className='app'>
     <Navbar></Navbar>
     <Searchbar/>
     <RecipePopUp/>
     <Footer/>
    </div>
  )
}

export default App
