import React from "react";
import {ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorList from "../constructor-list/constructor-list";
import constructorStyles from "./burger-constructor.module.css"
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

export default function BurgerConstructor({ ingredients }) {
  const bunIndex = ingredients.findIndex((ingredient) => ingredient.type === 'bun');
  const bun = ingredients[bunIndex];
  const otherIngredients = ingredients.filter((ingredient, i) => i !== bunIndex);
  const { name, price, image } = bun;

  let totalCost = 2 * price;
  otherIngredients.forEach((ingredient) => totalCost += ingredient.price);

  const [ isOpen, setIsOpen ] = React.useState(false);

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handlePlaceOrder() {
    setIsOpen(true);
  }

  return (
    <section className={`${constructorStyles.section} mt-25`}>
      <ul className={`${constructorStyles.list}`}>
        <li className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${name} \n(верх)`}
            thumbnail={image}
            price={price} />
        </li>
        <ConstructorList ingredients={otherIngredients} />
        <li className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${name} \n(низ)`}
            thumbnail={image}
            price={price} />
        </li>
      </ul>
      <div className={`${constructorStyles.container} mt-10 mr-4`}>
        <span className="text text_type_digits-medium mr-10">{totalCost} <CurrencyIcon type="primary" /></span>

        <Button type="primary" size="large" onClick={handlePlaceOrder}>
          Оформить заказ
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <OrderDetails />
      </Modal>
    </section>
  );
}