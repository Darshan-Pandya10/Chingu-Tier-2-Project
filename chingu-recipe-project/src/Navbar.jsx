import { NavLink } from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <div className="navbar w-full flex justify-between items-center text-white px-8 py-2 ">
      <h2 className="logo p-[1rem] text-[1.3rem]  absolute top-4 left-0 md:tracking-widest text-white  ">Foodish Recipes</h2>
      <nav className='w-fit flex absolute top-4 right-0 '>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
