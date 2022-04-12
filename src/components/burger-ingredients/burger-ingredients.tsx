import React, {FC, SyntheticEvent} from "react";
import { INGREDIENTS_TITLES, INGREDIENT_TYPE } from "../../utils/constants";
import {IngredientsCardList} from "../ingredients-card-list/ingredients-card-list";
import styles from "./burger-ingredients.module.css"
import {IngredientsTabs} from "../ingredients-tabs/ingredients-tabs";
import { SCROLL_PARAMS } from "../../utils/constants";
import {useDispatch, useSelector} from "../../services/hooks";
import {changeTabAction} from "../../services/actions/burger-ingredients";
import {
  openIngredientDetailsModalAction,
  selectIngredientAction
} from "../../services/actions/ingredient-details";
import {TIngredient} from "../../types";


export const BurgerIngredients: FC = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state) => state.burgerIngredients);

  const bun = React.useMemo(() => ingredients.filter((ingredient: TIngredient) => ingredient.type === INGREDIENT_TYPE.BUN), [ingredients]);
  const sauce = React.useMemo(() => ingredients.filter((ingredient: TIngredient) => ingredient.type === INGREDIENT_TYPE.SAUCE), [ingredients]);
  const main = React.useMemo(() => ingredients.filter((ingredient: TIngredient) => ingredient.type === INGREDIENT_TYPE.MAIN), [ingredients]);

  const bunRef = React.useRef<HTMLParagraphElement>(null);
  const sauceRef = React.useRef<HTMLParagraphElement>(null);
  const mainRef = React.useRef<HTMLParagraphElement>(null);

  function handleIngredientCardClick(ingredient: TIngredient) {
    dispatch(selectIngredientAction(ingredient));
    dispatch(openIngredientDetailsModalAction());
  }

  function handleTabClick(tab: string) {
    dispatch(changeTabAction(tab));
    switch (tab) {
      case INGREDIENTS_TITLES.BUN:
        if (bunRef && bunRef.current) {
          bunRef.current.scrollIntoView(SCROLL_PARAMS);
        }
        break;
      case INGREDIENTS_TITLES.SAUCE:
        if (sauceRef && sauceRef.current) {
          sauceRef.current.scrollIntoView(SCROLL_PARAMS);
        }
        break;
      case INGREDIENTS_TITLES.MAIN:
        if (mainRef && mainRef.current) {
          mainRef.current.scrollIntoView(SCROLL_PARAMS);
        }
        break;
      default:
        break;
    }
  }

  function handleScroll(evt: SyntheticEvent) {
    const target = evt.target as HTMLDivElement;
    const scrollTop = target.scrollTop;

    if (sauceRef && sauceRef.current && bunRef && bunRef.current && mainRef && mainRef.current) {
      const sauceScrollTop = sauceRef.current.getBoundingClientRect().top - bunRef.current.getBoundingClientRect().top;
      const mainScrollTop = mainRef.current.getBoundingClientRect().top - bunRef.current.getBoundingClientRect().top;

      if (scrollTop >= mainScrollTop) {
        dispatch(changeTabAction(INGREDIENTS_TITLES.MAIN));
      } else if (scrollTop < sauceScrollTop) {
        dispatch(changeTabAction(INGREDIENTS_TITLES.BUN));
      } else {
        dispatch(changeTabAction(INGREDIENTS_TITLES.SAUCE));
      }
    }
  }


  return (
    <section className="mt-10">
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <IngredientsTabs onClick={handleTabClick}/>
      <div className={`${styles.container} custom-scroll mt-10 pr-2`} onScroll={handleScroll}>
        <p className="text text_type_main-medium" ref={bunRef}>{INGREDIENTS_TITLES.BUN}</p>
        <IngredientsCardList ingredients={bun} onSelect={handleIngredientCardClick}/>
        <p className="text text_type_main-medium" ref={sauceRef}>{INGREDIENTS_TITLES.SAUCE}</p>
        <IngredientsCardList ingredients={sauce} onSelect={handleIngredientCardClick}/>
        <p className="text text_type_main-medium" ref={mainRef}>{INGREDIENTS_TITLES.MAIN}</p>
        <IngredientsCardList ingredients={main} onSelect={handleIngredientCardClick}/>
      </div>
    </section>
  );
};
