import React, {FC} from "react";
import {IngredientDetails} from "../../components/ingredient-details/ingredient-details";

export const IngredientDetailsPage: FC = () => {
  return (
    <main className={"mt-30"}>
      <IngredientDetails />
    </main>
  )
};