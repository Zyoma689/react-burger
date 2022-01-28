import React from "react";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "../nav-item/nav-item";
import AppHeader from "../app-header/app-header";
import IngredientCard from "../ingredient-card/ingredient-card";
import { DATA } from "../../utils/data";
import IngredientsTabs from "../ingredients-tabs/ingredients-tabs";

function App() {
    return (
      <>
        <AppHeader/>
        {/*<IngredientCard ingredient={DATA[0]} count={1} />*/}
        {/*<IngredientCard ingredient={DATA[1]} count={0} />*/}
        <IngredientsTabs/>
      </>
    );
}

export default App;