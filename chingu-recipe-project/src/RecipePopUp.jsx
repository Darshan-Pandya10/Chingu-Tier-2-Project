import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import './App.css';

function RecipePopUp({ data, closeRecipePopUp }) {
  if (data) {
    // console.log(data)
    const { label, mealType, ingredients, totalNutrients, url } = data;
    const nutrientArray = Object.values(totalNutrients);
    return (
      <div className="recipe-pop-up w-[50vw] h-auto absolute top-28 p-6 rounded-lg ">
        <button
          onClick={() => closeRecipePopUp()}
          className="exit-btn text-2xl absolute right-6 top-6 bg-transparent border-none outline-none cursor-pointer"
        >
          <RxCross1 />
        </button>
        <h2 className="m-4 text-2xl">{label}</h2>

        {/* check if mealType is present in the response or not. */}
        {mealType ? (
          <div className="group mealType">
            {mealType.map((type) => {
              const id = uuidv4();
              return (
                <p className="border-none w-fit tracking-widest" key={id}>
                  {type}
                </p>
              );
            })}
          </div>
        ) : (
          <div className="group mealType">
            <h3 className="topic">
              <FaAngleDoubleRight />
              Meal Type
            </h3>
            <p>no mealType found.</p>
          </div>
        )}

        {/* check if ingredients is present in the response or not. */}
        {ingredients ? (
          <div className="group ingredients">
            <h3 className="topic">
              <FaAngleDoubleRight />
              Ingredients
            </h3>
            {ingredients.map((ingredient) => {
              const id = uuidv4();
              return <p key={id}>{ingredient.text}</p>;
            })}
          </div>
        ) : (
          <div className="group ingredients">
            <h3 className="topic">
              <FaAngleDoubleRight />
              Ingredients
            </h3>
            <p>no ingredients found.</p>
          </div>
        )}

        {/* check if Nutrients is present in the response or not. */}
        {totalNutrients ? (
          <div className="group Nutrients">
            <div>
              <h3 className="topic">
                <FaAngleDoubleRight />
                Nutrients
              </h3>
            </div>
            <div className="nutrient-flex flex flex-wrap py-0 px-[0.3rem]">
              {nutrientArray.map((nutrient) => {
                const id = uuidv4();
                return (
                  <p className="nutrient p-[0.2rem]" key={id}>
                    {nutrient.label}
                  </p>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="group Nutrients">
            <h3 className="topic">
              <FaAngleDoubleRight />
              Nutrients
            </h3>
            <p>no totalNutrients found.</p>
          </div>
        )}

        {url ? (
          <div className="group url">
            <a
              className="p-4 tracking-widest my-0 mx-2 inline-block"
              target="_blank"
              href={url}
            >
              Recipe Link
            </a>
          </div>
        ) : (
          <div className="group url">
            <p>no url found.</p>
          </div>
        )}
      </div>
    );
  }
  return null;
}

export default RecipePopUp;
