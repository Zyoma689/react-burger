import React from "react";
import { INGREDIENTS_TITLES, INGREDIENT_TYPE } from "../../utils/constants";
import IngredientsCardList from "../ingredients-card-list/ingredients-card-list";
import burgerIngredientsStyles from "./burger-ingredients.module.css"
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/custom-prop-types";
import { SCROLL_PARAMS } from "../../utils/constants";


export default function BurgerIngredients({ ingredients, handleIngredientCardClick }) {
  const [ bun, setBun ] = React.useState([]);
  const [ sauce, setSauce ] = React.useState([]);
  const [ main, setMain ] = React.useState([]);

  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  const [ current, setCurrent ] = React.useState(INGREDIENTS_TITLES.BUN);

  React.useEffect(() => {
    setBun(ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.BUN));
    setSauce(ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.SAUCE));
    setMain(ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.MAIN));
  }, [ingredients]);

  function handleTabClick(tab) {
    setCurrent(tab);
    switch (tab) {
      case INGREDIENTS_TITLES.BUN:
        bunRef.current.scrollIntoView(SCROLL_PARAMS);
        break;
      case INGREDIENTS_TITLES.SAUCE:
        sauceRef.current.scrollIntoView(SCROLL_PARAMS);
        break;
      case INGREDIENTS_TITLES.MAIN:
        mainRef.current.scrollIntoView(SCROLL_PARAMS);
        break;
      default:
        break;
    }
  }

  return (
    <section className="mt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <IngredientsTabs current={current} onClick={handleTabClick}/>
      <div className={`${burgerIngredientsStyles.container} custom-scroll mt-10 pr-2`}>
        <p className="text text_type_main-medium" ref={bunRef}>{INGREDIENTS_TITLES.BUN}</p>
        <IngredientsCardList ingredients={bun} onSelect={handleIngredientCardClick}/>
        <p className="text text_type_main-medium" ref={sauceRef}>{INGREDIENTS_TITLES.SAUCE}</p>
        <IngredientsCardList ingredients={sauce} onSelect={handleIngredientCardClick}/>
        <p className="text text_type_main-medium" ref={mainRef}>{INGREDIENTS_TITLES.MAIN}</p>
        <IngredientsCardList ingredients={main} onSelect={handleIngredientCardClick}/>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  handleIngredientCardClick: PropTypes.func.isRequired,
};