export const INGREDIENTS_TITLES = {
  BUN: 'Булки',
  SAUCE: 'Соусы',
  MAIN: 'Начинки',
};

export const BASE_URL = 'https://norma.nomoreparties.space/api';

export const ENDPOINT = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/password-reset',
  RESET_PASSWORD: '/password-reset/reset',
  USER: '/auth/user',
  REFRESH_TOKEN: '/auth/token',
  LOGOUT: '/auth/logout',
};

export const INGREDIENT_TYPE = {
  BUN: 'bun',
  SAUCE: 'sauce',
  MAIN: 'main',
  NOT_BUN: 'ingredient',
};

export const KEY = 'Escape';

export const BUN_TYPE = {
  TOP: 'top',
  BOTTOM: 'bottom'
};

export const SCROLL_PARAMS = {
  behavior: 'smooth',
  block: 'start'
};

export const DND_TYPES = {
  CARD_FROM_INGREDIENTS: 'CARD_FROM_INGREDIENTS',
  CARD_FROM_CONSTRUCTOR: 'CARD_FROM_CONSTRUCTOR',
};

export const INPUT = {
  TYPE: {
    EMAIL: 'email',
    TEXT: 'text',
    PASSWORD: 'password',
  },
  NAME: {
    EMAIL: 'email',
    NAME: 'name',
    PASSWORD: 'password',
    CODE: 'token',
  },
  PLACEHOLDER: {
    EMAIL: 'E-mail',
    PASSWORD: 'Пароль',
    NAME: 'Имя',
    RESTORE: 'Укажите e-mail',
    NEW_PASS: 'Введите новый пароль',
    CODE: 'Введите код из письма',
  },
};

export const TOKEN = {
  REFRESH: 'refreshToken',
  ACCESS: 'accessToken',
};

export const ERROR = {
  JWT_EXPIRED: 'jwt expired',
};

export const PATH = {
  REGISTER: '/register',
  LOGIN: '/login',
  HOME: '/',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  PROFILE_ORDERS: '/profile/orders',
  ORDERS: '/orders',
  INGREDIENT: '/ingredients/:id',
  INGREDIENTS: '/ingredients',
};
