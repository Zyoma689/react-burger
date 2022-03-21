import React from "react";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./nav-bar.module.css";
import {Link, useLocation} from "react-router-dom";
import {PATH} from "../../utils/constants";

function NavBar() {
  const location = useLocation();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <ul className={styles.sublist}>
            <li className={`${styles.link_container} mr-2`}>
              <Link to={"/"} className={`${styles.link} mr-5`}>
                <BurgerIcon type={location.pathname === PATH.HOME || location.pathname.indexOf(PATH.INGREDIENTS) !== -1 ? "primary" : "secondary"}/>
                <p className={`text text_type_main-default ml-2 ${location.pathname === PATH.HOME || location.pathname.indexOf(PATH.INGREDIENTS) !== -1 ? styles.link_text_active : styles.link_text}`}>Конструктор</p>
              </Link>
            </li>

            <li className={styles.link_container}>
              <Link to={"/orders"} className={`${styles.link} ml-5 mr-5`}>
                <ListIcon type={location.pathname === PATH.ORDERS ? "primary" : "secondary"}/>
                <p className={`text text_type_main-default ml-2 ${location.pathname === PATH.ORDERS ? styles.link_text_active : styles.link_text}`}>Лента заказов</p>
              </Link>
            </li>
          </ul>
        </li>

        <li className={styles.list_item}>
          <Link to={"/"} className={styles.link}>
            <Logo/>
          </Link>

        </li>

        <li className={styles.list_item}>
          <Link to={"/profile"} className={`${styles.link} ml-5`}>
            <ProfileIcon type={location.pathname === PATH.PROFILE ? "primary" : "secondary"}/>
            <p
              className={`text text_type_main-default ml-2 ${location.pathname === PATH.PROFILE ? styles.link_text_active : styles.link_text}`}>
              Личный кабинет
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}


export default NavBar;
