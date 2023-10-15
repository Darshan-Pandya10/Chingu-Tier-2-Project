import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
