import {TBun, TConstructorIngredient, TIngredient} from "../types";
import {TCorrectOrder} from "../services/types";

export const mockBunA: TIngredient = {
  _id:"60d3b41abdacab0026a733c7",
  name:"Флюоресцентная булка R2-D3",
  type:"bun",
  proteins:44,
  fat:26,
  carbohydrates:85,
  calories:643,
  price:988,
  image:"https://code.s3.yandex.net/react/code/bun-01.png",
  image_mobile:"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  image_large:"https://code.s3.yandex.net/react/code/bun-01-large.png",
  __v:0,
  quantity:0,
};

export const mockBunB: TIngredient = {
  _id:"60d3b41abdacab0026a733c6",
  name:"Краторная булка N-200i",
  type:"bun",
  proteins:80,
  fat:24,
  carbohydrates:53,
  calories:420,
  price:1255,
  image:"https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile:"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large:"https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v:0,
  quantity:0,
};

export const mockConstructorIngredientA: TConstructorIngredient = {
  _id:"60d3b41abdacab0026a733cb",
  name:"Биокотлета из марсианской Магнолии",
  type:"main",
  proteins:420,
  fat:142,
  carbohydrates:242,
  calories:4242,
  price:424,
  image:"https://code.s3.yandex.net/react/code/meat-01.png",
  image_mobile:"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
  image_large:"https://code.s3.yandex.net/react/code/meat-01-large.png",
  __v:0,
  uuid:"a4694a4b-a3a6-4af1-a921-f0c340f2d812",
};

export const mockConstructorIngredientB: TConstructorIngredient = {
  _id:"60d3b41abdacab0026a733d4",
  name:"Сыр с астероидной плесенью",
  type:"main",
  proteins:84,
  fat:48,
  carbohydrates:420,
  calories:3377,
  price:4142,
  image:"https://code.s3.yandex.net/react/code/cheese.png",
  image_mobile:"https://code.s3.yandex.net/react/code/cheese-mobile.png",
  image_large:"https://code.s3.yandex.net/react/code/cheese-large.png",
  __v:0,
  uuid:"ec19f422-b955-46cd-b7ba-0d1d988f7008",
};

export const mockIngredientA: TIngredient = {
  _id:"60d3b41abdacab0026a733c8",
  name:"Филе Люминесцентного тетраодонтимформа",
  type:"main",
  proteins:44,
  fat:26,
  carbohydrates:85,
  calories:643,
  price:988,
  image:"https://code.s3.yandex.net/react/code/meat-03.png",
  image_mobile:"https://code.s3.yandex.net/react/code/meat-03-mobile.png",
  image_large:"https://code.s3.yandex.net/react/code/meat-03-large.png",
  __v:0,
  quantity:0,
};

export const mockIngredientB: TIngredient = {
  _id:"60d3b41abdacab0026a733c9",
  name:"Мясо бессмертных моллюсков Protostomia",
  type:"main",
  proteins:433,
  fat:244,
  carbohydrates:33,
  calories:420,
  price:1337,
  image:"https://code.s3.yandex.net/react/code/meat-02.png",
  image_mobile:"https://code.s3.yandex.net/react/code/meat-02-mobile.png",
  image_large:"https://code.s3.yandex.net/react/code/meat-02-large.png",
  __v:0,
  quantity:0,
};

export const mockIngredients: TIngredient[] = [mockIngredientA, mockIngredientB];

export const mockWSOrderA = {
  _id:"625db545a4b934001d58bdc8",
  ingredients: [
    "60d3b41abdacab0026a733c6",
    "60d3b41abdacab0026a733cf",
    "60d3b41abdacab0026a733c9",
    "60d3b41abdacab0026a733c9"
  ],
  status:"done",
  name:"Антарианский краторный бессмертный бургер",
  createdAt:"2022-04-18T19:00:21.250Z",
  updatedAt:"2022-04-18T19:00:21.422Z",
  number:13971,
};

export const mockWSOrdersResponse = {
  success: true,
  orders: [mockWSOrderA],
  total: 13886,
  totalToday: 91,
};

export const mockWSCorrectOrder: TCorrectOrder = {
  _id:"625db5ffa4b934001d58bdcc",
  status:"done",
  name:"Фалленианский флюоресцентный био-марсианский бургер",
  createdAt:"2022-04-18T19:03:27.087Z",
  updatedAt:"2022-04-18T19:03:27.252Z",
  number:13973,
  ingredients: [
    {
      _id:"60d3b41abdacab0026a733c7",
      name:"Флюоресцентная булка R2-D3",
      type:"bun",
      proteins:44,
      fat:26,
      carbohydrates:85,
      calories:643,
      price:988,
      image:"https://code.s3.yandex.net/react/code/bun-01.png",
      image_mobile:"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      image_large:"https://code.s3.yandex.net/react/code/bun-01-large.png",
      __v:0,
      quantity:2,
    },
    {
      _id:"60d3b41abdacab0026a733cb",
      name:"Биокотлета из марсианской Магнолии",
      type:"main",
      proteins:420,
      fat:142,
      carbohydrates:242,
      calories:4242,
      price:424,
      image:"https://code.s3.yandex.net/react/code/meat-01.png",
      image_mobile:"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      image_large:"https://code.s3.yandex.net/react/code/meat-01-large.png",
      __v:0,
      quantity:3,
    },
    {
      _id:"60d3b41abdacab0026a733d1",
      name:"Плоды Фалленианского дерева",
      type:"main",
      proteins:20,
      fat:5,
      carbohydrates:55,
      calories:77,
      price:874,
      image:"https://code.s3.yandex.net/react/code/sp_1.png",
      image_mobile:"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
      image_large:"https://code.s3.yandex.net/react/code/sp_1-large.png",
      __v:0,
      quantity:1,
    }
  ]
};