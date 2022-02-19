import React from "react";
import { INGREDIENTS_TITLES, INGREDIENT_TYPE } from "../../utils/constants";
import IngredientsCardList from "../ingredients-card-list/ingredients-card-list";
import burgerIngredientsStyles from "./burger-ingredients.module.css"
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs";
import PropTypes from "prop-types";
import { SCROLL_PARAMS } from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_TAB} from "../../services/actions/burger-ingredients";


export default function BurgerIngredients({ handleIngredientCardClick }) {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(state => state.burgerIngredients);

  const bun = React.useMemo(() => ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.BUN), [ingredients]);
  const sauce = React.useMemo(() => ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.SAUCE), [ingredients]);
  const main = React.useMemo(() => ingredients.filter((ingredient) => ingredient.type === INGREDIENT_TYPE.MAIN), [ingredients]);

  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  function handleTabClick(tab) {
    dispatch({
      type: CHANGE_TAB,
      tab,
    });
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

  function handleScroll(evt) {
    const scrollTop = evt.target.scrollTop;

    const sauceScrollTop = sauceRef.current.getBoundingClientRect().top - bunRef.current.getBoundingClientRect().top;
    const mainScrollTop = mainRef.current.getBoundingClientRect().top - bunRef.current.getBoundingClientRect().top;

    if (scrollTop >= mainScrollTop) {
      dispatch({
        type: CHANGE_TAB,
        tab: INGREDIENTS_TITLES.MAIN,
      });
    } else if (scrollTop < sauceScrollTop) {
      dispatch({
        type: CHANGE_TAB,
        tab: INGREDIENTS_TITLES.BUN,
      });
    } else {
      dispatch({
        type: CHANGE_TAB,
        tab: INGREDIENTS_TITLES.SAUCE,
      });
    }
  }


  return (
    <section className="mt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <IngredientsTabs onClick={handleTabClick}/>
      <div className={`${burgerIngredientsStyles.container} custom-scroll mt-10 pr-2`} onScroll={handleScroll}>
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
  handleIngredientCardClick: PropTypes.func.isRequired,
};