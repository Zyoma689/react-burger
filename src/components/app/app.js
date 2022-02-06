import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import * as api from "../../utils/api";
import { BurgerConstructorContext } from "../../services/burger-constructor-context";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {INGREDIENT_TYPE} from "../../utils/constants";

function App() {
  const [ ingredients, setIngredients ] = React.useState([]);
  const [ constructorIngredients, setConstructorIngredients] = React.useState([]);

  const [ modalIsOpen, setModalIsOpen ] = React.useState(false);
  const [ selectedIngredient, setSelectedIngredient ] = React.useState({});

  const [ orderId, setOrderId] = React.useState('');

  function handleCloseModal() {
    setModalIsOpen(false);
    setSelectedIngredient({});
  }

  function handleIngredientCardClick(ingredient) {
    setSelectedIngredient(ingredient);
    setModalIsOpen(true);
  }

  function handlePlaceOrderButtonClick() {
    const order = constructorIngredients.map((ingredient) => ingredient._id);
    api.placeOrder({ ingredients: order})
      .then((res) => {
        setOrderId(res.order.number.toString());
        setModalIsOpen(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleGetIngredients() {
    api.getIngredients()
      .then((res) => {
        setIngredients(res.data);
        const bunId = res.data.find((ingredient) => ingredient.type === INGREDIENT_TYPE.BUN)._id;
        setConstructorIngredients(res.data.filter((ingredient) => ingredient.type !== INGREDIENT_TYPE.BUN || ingredient._id !== bunId));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    handleGetIngredients();
  }, []);

  return (
    <>
      <AppHeader/>
      <main className={appStyles.main}>
        <BurgerIngredients ingredients={ingredients} handleIngredientCardClick={handleIngredientCardClick}/>

        <BurgerConstructorContext.Provider value={{constructorIngredients, setConstructorIngredients}}>
          <BurgerConstructor handlePlaceOrderButtonClick={handlePlaceOrderButtonClick}/>
        </BurgerConstructorContext.Provider>
      </main>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal} title={selectedIngredient._id && 'Детали ингредиента'}>
        {
          selectedIngredient._id ?
            <IngredientDetails ingredient={selectedIngredient} /> : <OrderDetails orderId={orderId}/>
        }

      </Modal>
    </>
  );
}

export default App;