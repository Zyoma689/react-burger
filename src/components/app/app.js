import React from "react";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "../nav-item/nav-item";
import AppHeader from "../app-header/app-header";
import IngredientsCard from "../ingredients-card/ingredients-card";
import { DATA } from "../../utils/data";

function App() {
    return (
      <>
        <AppHeader/>
        <IngredientsCard ingredient={DATA[0]} count={1} />
        <IngredientsCard ingredient={DATA[1]} count={0} />
      </>
    );
}

export default App;