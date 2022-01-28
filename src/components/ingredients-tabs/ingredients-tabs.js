import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./ingredients-tabs.module.css";
import { INGREDIENTS_TITLES } from "../../utils/constants";



export default function IngredientsTabs() {
  const [ current, setCurrent ] = React.useState(INGREDIENTS_TITLES.BUN);

  return (
    <nav className={tabsStyles.tabs}>
      <ul className={tabsStyles.tabs_container}>
        <li>
          <Tab
            active={current === INGREDIENTS_TITLES.BUN}
            value={INGREDIENTS_TITLES.BUN}
            onClick={setCurrent}>
            {INGREDIENTS_TITLES.BUN}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === INGREDIENTS_TITLES.SAUCE}
            value={INGREDIENTS_TITLES.SAUCE}
            onClick={setCurrent}>
            {INGREDIENTS_TITLES.SAUCE}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === INGREDIENTS_TITLES.MAIN}
            value={INGREDIENTS_TITLES.MAIN}
            onClick={setCurrent}>
            {INGREDIENTS_TITLES.MAIN}
          </Tab>
        </li>
      </ul>
    </nav>
  );
}