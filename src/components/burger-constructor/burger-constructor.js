import React from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorList from "../constructor-list/constructor-list";
import constructorStyles from "./burger-constructor.module.css"
import PropTypes from "prop-types";
import {BUN_TYPE, DND_TYPES} from "../../utils/constants";
import Bun from "../bun/bun";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {DELETE_INGREDIENT} from "../../services/actions/burger-constructor";
import {DECREASE_INGREDIENT} from "../../services/actions/burger-ingredients";
import {placeOrderAction} from "../../services/actions/order-details";


export default function BurgerConstructor({ handleOnDrop }) {
  const dispatch = useDispatch();

  const [, dropTargetRef] = useDrop({
    accept: DND_TYPES.CARD_FROM_INGREDIENTS,
    drop(ingredient) {
      handleOnDrop(ingredient);
    }
  });

  const constructorIngredients = useSelector(state => state.burgerConstructor.ingredients);
  const { bun } = useSelector(state => state.burgerConstructor);

  const totalCost = React.useMemo(() => {
    return constructorIngredients.reduce((acc, cur) => {
      if (cur.price) {
        return acc + cur.price;
      }
      return acc;
    }, 0) + (bun ? 2 * bun.price : 0);
  }, [constructorIngredients, bun]);


  function handleDeleteClick(uuid, _id) {
    dispatch({
      type: DELETE_INGREDIENT,
      uuid: uuid,
    });
    dispatch({
      type: DECREASE_INGREDIENT,
      _id: _id,
    })
  }

  function handlePlaceOrderButtonClick() {
    const order = [bun._id, ...constructorIngredients.map((ingredient) => ingredient._id), bun._id];
    dispatch(placeOrderAction(order));
  }

  return (
    <section className={`${constructorStyles.section} mt-25`} ref={dropTargetRef}>
      <ul className={`${constructorStyles.list}`}>

        {<Bun type={BUN_TYPE.TOP} />}
        <ConstructorList onDelete={handleDeleteClick} />
        {<Bun type={BUN_TYPE.BOTTOM} />}

      </ul>
      <div className={`${constructorStyles.container} mt-10 mr-4`}>
        <span className="text text_type_digits-medium mr-10">{totalCost} <CurrencyIcon type="primary" /></span>

        <Button type="primary" size="large" onClick={handlePlaceOrderButtonClick} disabled={!bun}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  handleOnDrop: PropTypes.func.isRequired,
};