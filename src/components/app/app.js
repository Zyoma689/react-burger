import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import * as api from "../../utils/api"

function App() {
  const [ ingredients, setIngredients ] = React.useState([]);

  React.useEffect(() => {
    handleGetIngredients();
  }, []);

  function handleGetIngredients() {
    api.getIngredients()
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  return (
    <>
      <AppHeader/>
      <main className={appStyles.main}>
        {
          !!ingredients.length &&
          (<>
            <BurgerIngredients ingredients={ingredients}/>
            <BurgerConstructor ingredients={ingredients}/>
          </>)
        }
      </main>
    </>
  );
}

export default App;