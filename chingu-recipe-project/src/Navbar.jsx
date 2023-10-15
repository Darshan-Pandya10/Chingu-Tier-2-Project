import { NavLink } from 'react-router-dom'
import './App.css'
function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Foodish Recipes</h2>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>

      </nav>
    </div>
  )
}

export default Navbar
