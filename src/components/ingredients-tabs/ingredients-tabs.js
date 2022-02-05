import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from "./ingredients-tabs.module.css";
import { INGREDIENTS_TITLES } from "../../utils/constants";
import PropTypes from 'prop-types';


export default function IngredientsTabs({ current, onClick }) {
  function handleTabClick(e) {
    onClick(e);
  }

  return (
    <nav className={tabsStyles.tabs}>
      <ul className={tabsStyles.tabs_container}>
        <li>
          <Tab
            active={current === INGREDIENTS_TITLES.BUN}
            value={INGREDIENTS_TITLES.BUN}
            onClick={handleTabClick}>
            {INGREDIENTS_TITLES.BUN}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === INGREDIENTS_TITLES.SAUCE}
            value={INGREDIENTS_TITLES.SAUCE}
            onClick={handleTabClick}>
            {INGREDIENTS_TITLES.SAUCE}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === INGREDIENTS_TITLES.MAIN}
            value={INGREDIENTS_TITLES.MAIN}
            onClick={handleTabClick}>
            {INGREDIENTS_TITLES.MAIN}
          </Tab>
        </li>
      </ul>
    </nav>
  );
}

IngredientsTabs.propTypes = {
  current: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};