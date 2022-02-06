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

function App() {
  const [ ingredients, setIngredients ] = React.useState([]);
  const [ constructorIngredients, setConstructorIngredients] = React.useState([]);

  const [ modalIsOpen, setModalIsOpen ] = React.useState(false);
  const [ selectedIngredient, setSelectedIngredient ] = React.useState({});

  function handleCloseModal() {
    setModalIsOpen(false);
    setSelectedIngredient({});
  }

  function handleIngredientCardClick(ingredient) {
    setSelectedIngredient(ingredient);
    setModalIsOpen(true);
  }

  function handlePlaceOrderButtonClick() {
    setModalIsOpen(true);
  }

  function handleGetIngredients() {
    api.getIngredients()
      .then((res) => {
        setIngredients(res.data);
        setConstructorIngredients(res.data);
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
            <IngredientDetails ingredient={selectedIngredient} /> : <OrderDetails />
        }

      </Modal>
    </>
  );
}

export default App;