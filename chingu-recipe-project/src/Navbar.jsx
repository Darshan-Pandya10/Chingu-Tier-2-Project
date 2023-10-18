import { NavLink } from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <div className="navbar relative w-full h-32 flex justify-between items-center text-white px-8 py-2 ">
      <h2 className="logo absolute left-0 text-white  ">Foodish Recipes</h2>
      <nav className='w-fit flex absolute right-0 '>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
