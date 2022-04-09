import { Location } from "history";
import {ReactNode} from "react";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS, WS_GET_ORDERS, WS_SEND_ORDER
} from "../services/constants";

export type TLocationState = {
  from?: Location;
  ingredientCard?: Location;
  orderCard?: Location;
};

export type TBunProps = {
  type: 'top' | 'bottom';
}

export type TBunType = {
  TOP: 'top';
  BOTTOM: 'bottom';
}

export type TBun = TIngredient | null;

export type TIngredientData = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export type TIngredient = TIngredientData & {
  quantity: number;
}

export type TConstructorIngredient = TIngredientData & {
  uuid: string;
  index?: number;
}

export type TIngredientTypeBun = 'Булки';

export type TIngredientTypeSauce = 'Соусы';

export type TIngredientTypeMain = 'Начинки'

export type TIngredientsTitle = TIngredientTypeBun | TIngredientTypeSauce | TIngredientTypeMain;

export type TConstructorList = {
  onDelete: (uuid: string, _id: string) => void;
}

export type TConstructorCard = TConstructorList & {
  ingredient: TConstructorIngredient;
  index: number;
}

export type TCustomConstructorElement = TBunProps & {
  children: ReactNode;
}

export type TIngredientCard = {
  ingredient: TIngredient;
  onSelect: (ingredient: TIngredient) => void;
}

export type TIngredientsCardList = {
  ingredients: TIngredient[];
  onSelect: (ingredient: TIngredient) => void;
}

export type TIngredientsTabs = {
  onClick: (tab: string) => void;
}

export type TModalOverlay = {
  onClose: () => void;
}

export type TModal = TModalOverlay & {
  children: ReactNode;
  title?: string;
}

export type TProfileForm = {
  name: string;
  email: string;
  password: string;
}

export type TRegisterForm = Pick<TProfileForm, 'name' | 'email' | 'password'>
export type TLoginForm = Pick<TProfileForm, 'email' | 'password'>
export type TForgotPasswordForm = Pick<TProfileForm, 'email'>
export type TResetPasswordForm = Pick<TProfileForm, 'password'> & { token: string };

export type TUserData = Pick<TProfileForm, 'name' | 'email'>

export type TInput = {
  TYPE: {
    EMAIL: 'email';
    TEXT: 'text',
    PASSWORD: 'password',
  };
  NAME: {
    EMAIL: 'email',
    NAME: 'name',
    PASSWORD: 'password',
    CODE: 'token',
  };
  PLACEHOLDER: {
    EMAIL: string,
    PASSWORD: string,
    NAME: string,
    RESTORE: string,
    NEW_PASS: string,
    CODE: string,
  }
}

export type TString = {
  [name: string]: string;
}

export type TWSOrderActions = {
  wsInit: typeof WS_CONNECTION_START,
  onOpen: typeof WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof WS_CONNECTION_ERROR,
  onOrders: typeof WS_GET_ORDERS,
  onSendOrders: typeof WS_SEND_ORDER,
}