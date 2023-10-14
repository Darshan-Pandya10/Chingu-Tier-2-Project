import React, { useEffect, useRef, useState } from 'react'
import RecipeList from './RecipeList';
import './App.css'

function Searchbar() {

    const api_id = '50c0683d';
    const api_key = 'cbbd8bf8c49fc90fca3e05462a8d77f4'

    const [ingredient,setIngredient] = useState('');
    let [searchClicked , setSearchClicked] = useState(false);
    const [data,setData] = useState(false);
    const isMounted = useRef(false);

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

    // cleanup function for useEffect
    function cleanupFunc(){
         return (
         setSearchClicked(false)
         )
    }

     useEffect(() => {
      if(!isMounted.current){
        isMounted.current = true
        return
      }
         fetchData()
         cleanupFunc()
        },[searchClicked])

    function handleSearch(e){
        e.preventDefault()
        setSearchClicked(true)
    }

  return (
    <>
    <div className='search-bar'>
      <form>
        <input type="text" name='ingridient' placeholder="Search By Ingrediet" value={ingredient}
        onChange={(e) => setIngredient(e.target.value)} />
        <button className='search-btn' onClick={handleSearch}>Search</button>
      </form>
    </div>

    {/* if there is a data then only show recipelist */}
    { data && <RecipeList data={data}/>}
    </>
  )
}

export default Searchbar