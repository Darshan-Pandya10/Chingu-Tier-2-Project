import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { createContext, useState } from 'react'

  export const ThemeContext = createContext(null);

function App() {

  const [theme , setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }


  return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
    <div className='app w-full h-auto relative' id={theme}>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
