import React, {FC} from "react";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ConstructorList} from "../constructor-list/constructor-list";
import styles from "./burger-constructor.module.css"
import {BUN_TYPE, DND_TYPES, INGREDIENT_TYPE, PATH} from "../../utils/constants";
import {Bun} from "../bun/bun";
import {useDispatch, useSelector} from "../../services/hooks";
import {useDrop} from "react-dnd";
import { addIngredientAction, deleteIngredientAction, setBunsAction } from "../../services/actions/burger-constructor";
import { changeBunsAction, decreaseIngredientAction, increaseIngredientAction } from "../../services/actions/burger-ingredients";
import {placeOrderThunk} from "../../services/actions/order-details";
import {v4 as uuid} from "uuid";
import {useHistory} from "react-router-dom";
import {Preloader} from "../preloader/preloader";
import {TConstructorIngredient, TIngredient} from "../../types";


export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.access);
  const { placeOrderRequest } = useSelector((state) => state.orderDetails);

  const history = useHistory();

  const [, dropTargetRef] = useDrop({
    accept: DND_TYPES.CARD_FROM_INGREDIENTS,
    drop(ingredient: TIngredient) {
      handleOnDrop(ingredient);
    }
  });

  const constructorIngredients = useSelector((state: any) => state.burgerConstructor.ingredients);
  const { bun } = useSelector((state: any) => state.burgerConstructor);

  const totalCost = React.useMemo(() => {
    return constructorIngredients.reduce((acc: number, cur: TIngredient) => {
      if (cur.price) {
        return acc + cur.price;
      }
      return acc;
    }, 0) + (bun ? 2 * bun.price : 0);
  }, [constructorIngredients, bun]);


  function handleDeleteClick(uuid: string, _id: string) {
    dispatch(deleteIngredientAction(uuid));
    dispatch(decreaseIngredientAction(_id));
  }

  function handlePlaceOrderButtonClick() {
    if (isAuthenticated) {
      const order = [bun._id, ...constructorIngredients.map((ingredient: TConstructorIngredient) => ingredient._id), bun._id];
      dispatch(placeOrderThunk(order));
    } else {
      history.replace({
        pathname: PATH.LOGIN,
      })
    }
  }

  function handleOnDrop(ingredient: TIngredient) {
    const { _id, type } = ingredient;

    switch (type) {
      case INGREDIENT_TYPE.BUN: {
        dispatch(changeBunsAction(_id));
        dispatch(setBunsAction(ingredient));
        break;
      }
      default: {
        dispatch(increaseIngredientAction(_id));
        dispatch(addIngredientAction({ ...ingredient, uuid: uuid() }));
        break;
      }
    }
  }

  return (
    <section className={`${styles.section} mt-25`} ref={dropTargetRef}>
      <ul className={`${styles.list}`}>

        {<Bun type={BUN_TYPE.TOP} />}
        <ConstructorList onDelete={handleDeleteClick} />
        {<Bun type={BUN_TYPE.BOTTOM} />}

      </ul>
      <div className={`${styles.container} mt-10 mr-4`}>
        <span className="text text_type_digits-medium mr-10">{totalCost} <CurrencyIcon type="primary" /></span>

        <Button type="primary" size="large" onClick={handlePlaceOrderButtonClick} disabled={!bun}>
          Оформить заказ
        </Button>
      </div>
      {
        placeOrderRequest && <Preloader />
      }
    </section>
  );
};
