import React, {FC} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients-tabs.module.css";
import { INGREDIENTS_TITLES } from "../../utils/constants";
import {useSelector} from "../../services/hooks";
import {TIngredientsTabs} from "../../types";


export const IngredientsTabs: FC<TIngredientsTabs> = ({ onClick }) => {
  const current = useSelector((state: any) => state.burgerIngredients.tab);

  return (
    <nav className={styles.tabs}>
      <ul className={styles.tabs_container}>
        <li>
          <Tab
            active={current === INGREDIENTS_TITLES.BUN}
            value={INGREDIENTS_TITLES.BUN}
            onClick={(tab) => onClick(tab)}>
            {INGREDIENTS_TITLES.BUN}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === INGREDIENTS_TITLES.SAUCE}
            value={INGREDIENTS_TITLES.SAUCE}
            onClick={(tab) => onClick(tab)}>
            {INGREDIENTS_TITLES.SAUCE}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === INGREDIENTS_TITLES.MAIN}
            value={INGREDIENTS_TITLES.MAIN}
            onClick={(tab) => onClick(tab)}>
            {INGREDIENTS_TITLES.MAIN}
          </Tab>
        </li>
      </ul>
    </nav>
  );
};