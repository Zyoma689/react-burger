import React, {useContext} from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorList from "../constructor-list/constructor-list";
import constructorStyles from "./burger-constructor.module.css"
import PropTypes from "prop-types";
import { BurgerConstructorContext} from "../../services/burger-constructor-context";
import {BUN_TYPE, INGREDIENT_TYPE} from "../../utils/constants";
import Bun from "../bun/bun";

export default function BurgerConstructor({ handlePlaceOrderButtonClick }) {
  const { constructorIngredients, setConstructorIngredients } = useContext(BurgerConstructorContext);
  const [ bun, setBun ] = React.useState({});
  const [ totalCost, setTotalCost ] = React.useState(0);

  React.useEffect(() => {
    setBun(constructorIngredients.find((ingredient) => ingredient.type === INGREDIENT_TYPE.BUN));
  }, [constructorIngredients]);

  React.useEffect(() => {
    setTotalCost(constructorIngredients.reduce((acc, cur) => {
      if (cur.price) {
        if (cur.type === INGREDIENT_TYPE.BUN) {
          return acc + 2 * cur.price;
        }
        return acc + cur.price;
      }
      return acc;
    }, 0));
  }, [bun, constructorIngredients]);

  function handleDeleteClick(id) {
    const newOtherIngredients = constructorIngredients.filter((ingredient) => ingredient._id !== id);
    setConstructorIngredients(newOtherIngredients);
  }

  return (
    <section className={`${constructorStyles.section} mt-25`}>
      <ul className={`${constructorStyles.list}`}>
        {!!bun && <Bun bun={bun} type={BUN_TYPE.TOP}/>}

        <ConstructorList
          ingredients={constructorIngredients.filter((ingredient) => ingredient.type !== INGREDIENT_TYPE.BUN)}
          onDelete={handleDeleteClick}
        />

        {!!bun && <Bun bun={bun} type={BUN_TYPE.BOTTOM}/>}
      </ul>
      <div className={`${constructorStyles.container} mt-10 mr-4`}>
        <span className="text text_type_digits-medium mr-10">{totalCost} <CurrencyIcon type="primary" /></span>

        <Button type="primary" size="large" onClick={handlePlaceOrderButtonClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  handlePlaceOrderButtonClick: PropTypes.func.isRequired,
};