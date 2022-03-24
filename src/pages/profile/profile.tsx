import React, {FC} from "react";
import {PATH} from "../../utils/constants";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import {useDispatch} from "react-redux";
import styles from "./profile.module.css"
import {logout} from "../../services/actions/profile";
import {ProfileEdit} from "../";
import {ProfileOrders} from "..";


export const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  function onLogout() {
    dispatch(logout());
  }

  return (
    <main className={styles.page}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              className={`${styles.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styles.active}
              to={PATH.PROFILE}
              exact
            >Профиль
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={`${styles.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styles.active}
              to={PATH.PROFILE_ORDERS}
            >История заказов
            </NavLink>
          </li>
          <li className={styles.item}>
            <button
              className={`${styles.logout} text text_type_main-medium text_color_inactive`}
              onClick={onLogout}
            >Выход</button>
          </li>
        </ul>
        <p className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете
          изменить свои персональные данные</p>
      </nav>
      <Switch>
        <Route exact path={path}>
          <ProfileEdit />
        </Route>
        <Route exact path={path + PATH.ORDERS}>
          <ProfileOrders />
        </Route>
      </Switch>
    </main>
  );
};