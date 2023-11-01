import React, { useEffect, useRef, useState, useContext } from 'react'
import './App.css'
import LightHeroImage from './assets/LightHeroImage.jpeg'
import DarkHeroImage from './assets/DarkHeroImage.jpeg'
import {BiSolidSearch} from 'react-icons/bi'
import SortingMenu from './SortingMenu'
import { ThemeContext } from './App'

function Searchbar() {

  const themeValue = useContext(ThemeContext);
  const {theme , toggleTheme} = themeValue;

    const [ingredient,setIngredient] = useState('');
    let [searchClicked , setSearchClicked] = useState(false); 
    const [dataLength , setDataLength] = useState(0)
    const [data,setData] = useState(false); 
    const isMounted = useRef(false);
    const api_id = '50c0683d'
    const api_key = 'cbbd8bf8c49fc90fca3e05462a8d77f4'


    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${api_id}&app_key=${api_key}`;
  const options = {
	method: 'GET',
	headers: {
    'Accept': 'application/json'
	}
};

// fetchData function for API Request
    const fetchData = async() => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)
            setData(result)
            setDataLength(result.hits.length)

        } 
        catch (error) {
	        console.error(error);
        }
    }

     useEffect(() => {
      if(!isMounted.current){
        isMounted.current = true
        return
      }

        fetchData()
        return (
          setIngredient(''),
          setDataLength(0),
         setSearchClicked(false)
         )
        },[searchClicked])

    function handleSearch(e){
        e.preventDefault()
        setSearchClicked(true)
    }

    const lightThemeBg = {
      backgroundImage : `url(${LightHeroImage})`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      opacity:`${0.85}`
    }

     const darkThemeBg = {
      backgroundImage : `url(${DarkHeroImage})`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      opacity:`${0.85}`
    }


  return (
    <>
    <div 
    className='search-bar flex flex-col items-center mt-0 mx-auto mb-12'
    style={theme === 'light' ? lightThemeBg : darkThemeBg}
    >

      <div className='intro text-center m-4'>
      <h1 className='heading-intro'>"Hey there! Feeling hungry?</h1>
      <h3 className='sub-heading'> You've come to the right place!</h3>
      
      </div>

      <form className='flex items-center justify-between my-o mx-auto bg-white pl-2 pr-0 py-o'>
        <input className='p-2 bg-white text-[1.2rem] tracking-widest cursor-pointer' type="text" name='ingridient' placeholder="Search by ingrediet(s)" value={ingredient}
        onChange={(e) => setIngredient(e.target.value)} />
        <button className='search-btn p-4 border-none outline-none
        curson-pointer  ' onClick={handleSearch}>
          <BiSolidSearch size={26}/>
        </button>
      </form>
    </div>

    {/* if there is a data then only show recipelist */}
    {dataLength >= 1 && <SortingMenu data={data}/>}
    </>
  )
}

export default Searchbar