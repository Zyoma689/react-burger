import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./ingredients-tabs.module.css";

const TAB = {
  BUN: 'Булки',
  SAUCE: 'Соусы',
  MAIN: 'Начинки',
};

export default function IngredientsTabs() {
  const [ current, setCurrent ] = React.useState(TAB.BUN);

  return (
    <nav className={tabsStyles.tabs}>
      <ul className={tabsStyles.tabs_container}>
        <li>
          <Tab active={current === TAB.BUN} value={TAB.BUN} onClick={setCurrent}>
            {TAB.BUN}
          </Tab>
        </li>
        <li>
          <Tab active={current === TAB.SAUCE} value={TAB.SAUCE} onClick={setCurrent}>
            {TAB.SAUCE}
          </Tab>
        </li>
        <li>
          <Tab active={current === TAB.MAIN} value={TAB.MAIN} onClick={setCurrent}>
            {TAB.MAIN}
          </Tab>
        </li>
      </ul>
    </nav>
  );
}