import React from "react";
import { INGREDIENTS_TITLES, INGREDIENT_TYPE } from "../../utils/constants";
import IngredientsCardList from "../ingredients-card-list/ingredients-card-list";
import burgerIngredientsStyles from "./burger-ingredients.module.css"
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../utils/custom-prop-types";


export default function BurgerIngredients({ ingredients }) {
  const bun = ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.BUN);
  const sauce = ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.SAUCE);
  const main = ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.MAIN);

  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  const [ selectedIngredient, setSelectedIngredient ] = React.useState({});
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ current, setCurrent ] = React.useState(INGREDIENTS_TITLES.BUN);

  function handleCloseModal() {
    setIsOpen(false);
    setSelectedIngredient({});
  }

  function handleTabClick(tab) {
    setCurrent(tab);
    switch (tab) {
      case INGREDIENTS_TITLES.BUN:
        bunRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        break;
      case INGREDIENTS_TITLES.SAUCE:
        sauceRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        break;
      case INGREDIENTS_TITLES.MAIN:
        mainRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        break;
    }
  }


  function handleIngredientClick(ingredient) {
    setIsOpen(true);
    setSelectedIngredient(ingredient);
  }

  return (
    <section className="mt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <IngredientsTabs current={current} onClick={handleTabClick}/>
      <div className={`${burgerIngredientsStyles.container} custom-scroll mt-10 pr-2`}>
        <p className="text text_type_main-medium" ref={bunRef}>{INGREDIENTS_TITLES.BUN}</p>
        <IngredientsCardList ingredients={bun} onSelect={handleIngredientClick}/>
        <p className="text text_type_main-medium" ref={sauceRef}>{INGREDIENTS_TITLES.SAUCE}</p>
        <IngredientsCardList ingredients={sauce} onSelect={handleIngredientClick}/>
        <p className="text text_type_main-medium" ref={mainRef}>{INGREDIENTS_TITLES.MAIN}</p>
        <IngredientsCardList ingredients={main} onSelect={handleIngredientClick}/>
      </div>
      <Modal title='Детали ингредиента' isOpen={isOpen} onClose={handleCloseModal}>
        <IngredientDetails ingredient={selectedIngredient} />
      </Modal>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};