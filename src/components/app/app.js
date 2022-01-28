import React from "react";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "../nav-item/nav-item";
import AppHeader from "../app-header/app-header";
import IngredientCard from "../ingredient-card/ingredient-card";
import { DATA, CONSTRUCTOR_DATA } from "../../utils/data";
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs";
import IngredientsCardList from "../ingredients-card-list/ingredients-card-list";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";

function App() {
    return (
      <>
        <AppHeader/>
        <main className={appStyles.main}>
          <BurgerIngredients data={DATA}/>
          <BurgerConstructor ingredients={CONSTRUCTOR_DATA}/>
        </main>
        {/*<IngredientCard ingredient={DATA[0]} count={1} />*/}
        {/*<IngredientCard ingredient={DATA[1]} count={0} />*/}
        {/*<IngredientsTabs/>*/}
        {/*<IngredientsCardList array={DATA}/>*/}
        {/*<BurgerIngredients data={DATA}/>*/}
      </>
    );
}

export default App;