import React, { useEffect, useRef, useState } from 'react'
import RecipeList from './RecipeList';
import './App.css'
import {BiSolidSearch} from 'react-icons/bi'
import SortingMenu from './SortingMenu';

function Searchbar() {

    const [ingredient,setIngredient] = useState('');
    let [searchClicked , setSearchClicked] = useState(false); 
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
            // console.log(result)
            setData(result)
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
         setSearchClicked(false)
         )
        },[searchClicked])

    function handleSearch(e){
        e.preventDefault()
        setSearchClicked(true)
    }

  return (
    <>
    <div className='search-bar mt-0 mx-auto mb-12'>
      <form className='flex items-center justify-center my-o mx-auto bg-white pl-2 pr-0 py-o'>
        <input className='w-[92.3%] p-2 bg-white text-[1.2rem] tracking-widest cursor-pointer' type="text" name='ingridient' placeholder="Search by ingrediet" value={ingredient}
        onChange={(e) => setIngredient(e.target.value)} />
        <button className='search-btn p-4 border-none outline-none
        curson-pointer  ' onClick={handleSearch}>
          <BiSolidSearch size={26}/>
        </button>
      </form>
    </div>

    {/* if there is a data then only show recipelist */}
    {data && <SortingMenu data={data}/>}
    </>
  )
}

export default Searchbar