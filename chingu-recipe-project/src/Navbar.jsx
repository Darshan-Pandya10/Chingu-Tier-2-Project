import { NavLink } from 'react-router-dom'
import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './App'
import {PiMoonStarsFill} from 'react-icons/pi'
import {RiSunFill} from 'react-icons/ri'

function Navbar() {

  const themeValue = useContext(ThemeContext);
  const {theme , toggleTheme} = themeValue;

  return (
    <div className="navbar w-full h-24 flex justify-between items-center text-white px-2 py-2 ">
      <h2 className="logo left-0 text-white">Foodish Recipes</h2>
      <nav className='w-fit flex right-0 '>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        {theme === 'light' ? 
        <button onClick={toggleTheme}>
          <RiSunFill/>
        </button> 
        :
        <button onClick={toggleTheme}>
          <PiMoonStarsFill/>
        </button>
        }
       
      </nav>
    </div>
  )
}

export default Navbar
