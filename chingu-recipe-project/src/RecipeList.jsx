import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import { v4 as uuidv4 } from 'uuid';
import RecipePopUp from "./RecipePopUp";
import './App.css';
import ReactPaginate from 'react-paginate';

function RecipeList({ data, selectedValue }) {
  const { hits } = data;

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [popUpData, setPopUpData] = useState(null);

  function getRecipe(recipe) {
    setIsPopUpVisible(true);
    setPopUpData(recipe);
  }

  function closeRecipePopUp() {
    setIsPopUpVisible(false);
  }

  // Pagination logic
  const recipesPerPage = 6;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * recipesPerPage;

  const pageCount = Math.ceil(hits.length / recipesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  // Sorting logic
  const filterRecipeList = selectedValue !== ''
    ? hits.filter(recipe => recipe.recipe.mealType[0] === selectedValue)
    : hits;

  const displayRecipes = filterRecipeList.slice(pagesVisited, pagesVisited + recipesPerPage);

  return (
    <div className="list-and-pagination">
      <div className="recipe-list  w-[85vw] flex flex-wrap items-center justify-around h-auto my-8 mx-auto">
        {displayRecipes.length > 0 ? (
          displayRecipes.map(eachRecipeObj => {
            const id = uuidv4();
            const { recipe } = eachRecipeObj;
            return (
              <RecipeCard
                recipe={recipe}
                key={id}
                id={id}
                getRecipe={getRecipe}
                closeRecipePopUp={closeRecipePopUp}
              />
            );
          })
        ) : (
          <div className="recipe-list">
            <h3 className="text-lg tracking-widest">Recipes not Found.</h3>
          </div>
        )}

        {isPopUpVisible && <RecipePopUp
          data={popUpData}
          closeRecipePopUp={closeRecipePopUp}
        />}
      </div>
      <div className="pagination">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBtns'}
          previousLinkClassName={'previousBtn'}
          NextLinkClassName={'NextBtn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </div>
  );
}

export default RecipeList;
