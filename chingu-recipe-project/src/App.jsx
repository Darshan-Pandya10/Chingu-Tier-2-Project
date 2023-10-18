import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className='app w-full h-auto relative'>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
