import React, {FC} from "react";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {BUN_TITLE, BUN_TYPE} from "../../utils/constants";
import {useSelector} from "../../services/hooks";
import {CustomConstructorElement} from "../custom-constructor-element/custom-constructor-element";
import {TBunProps} from "../../types";

export const Bun: FC<TBunProps> = ({ type }) => {
  const { bun } = useSelector((state: any) => state.burgerConstructor);

  return (
    <li className="ml-8">
      {
        bun ?
          <ConstructorElement
            type={type}
            isLocked={true}
            text={`${bun.name} ${type === BUN_TYPE.TOP ? BUN_TITLE.TOP : BUN_TITLE.BOTTOM}`}
            thumbnail={bun.image}
            price={bun.price}
          />
        :
          <CustomConstructorElement type={type}>Выберите булку</CustomConstructorElement>
      }
    </li>
  );
};