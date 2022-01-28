import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./ingredients-tabs.module.css";
import { CONSTRUCTOR_TITLES } from "../../utils/constants";



export default function IngredientsTabs() {
  const [ current, setCurrent ] = React.useState(CONSTRUCTOR_TITLES.BUN);

  return (
    <nav className={tabsStyles.tabs}>
      <ul className={tabsStyles.tabs_container}>
        <li>
          <Tab
            active={current === CONSTRUCTOR_TITLES.BUN}
            value={CONSTRUCTOR_TITLES.BUN}
            onClick={setCurrent}>
            {CONSTRUCTOR_TITLES.BUN}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === CONSTRUCTOR_TITLES.SAUCE}
            value={CONSTRUCTOR_TITLES.SAUCE}
            onClick={setCurrent}>
            {CONSTRUCTOR_TITLES.SAUCE}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === CONSTRUCTOR_TITLES.MAIN}
            value={CONSTRUCTOR_TITLES.MAIN}
            onClick={setCurrent}>
            {CONSTRUCTOR_TITLES.MAIN}
          </Tab>
        </li>
      </ul>
    </nav>
  );
}