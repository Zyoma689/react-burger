import React, {FC} from "react";
import {PATH} from "../../utils/constants";
import {NavLink, Switch, Route, useRouteMatch, useLocation} from "react-router-dom";
import {useDispatch} from "../../services/hooks";
import styles from "./profile.module.css"
import {getUserThunk, logoutThunk} from "../../services/actions/profile";
import {ProfileEdit} from "../";
import {UserOrders} from "..";

export const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  React.useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  function onLogout() {
    dispatch(logoutThunk());
  }

  return (
    <main className={styles.page}>
      <nav className={`${styles.nav} mr-15 mt-20`}>
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
              to={PATH.USER_ORDERS}
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
        <Route exact path={PATH.USER_ORDERS}>
          <UserOrders />
        </Route>
      </Switch>
    </main>
  );
};