import React from "react";
import NavItem from "../nav-item/nav-item";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import navBarStyles from "./nav-bar.module.css";

function NavBar() {
  const PAGE = {
    CONSTRUCTOR: 0,
    ORDER_FEED: 1,
    PERSONAL_AREA: 2,
  };
  const [ current ] = React.useState(PAGE.CONSTRUCTOR);

  return (
    <nav className={navBarStyles.navigation}>
      <ul className={navBarStyles.list}>
        <li className={navBarStyles.list_item}>
          <ul className={navBarStyles.sublist}>
            <li className="mr-2">
              <NavItem text="Конструктор" isActive={current === PAGE.CONSTRUCTOR}>
                <BurgerIcon type={current === PAGE.CONSTRUCTOR ? "primary" : "secondary"}/>
              </NavItem>
            </li>

            <li>
              <NavItem text="Лента заказов" isActive={current === PAGE.ORDER_FEED}>
                <ListIcon type={current === PAGE.ORDER_FEED ? "primary" : "secondary"}/>
              </NavItem>
            </li>
          </ul>
        </li>

        <li className={navBarStyles.list_item}>
          <Logo/>
        </li>

        <li className={navBarStyles.list_item}>
          <NavItem text="Личный кабинет" isActive={current === PAGE.PERSONAL_AREA}>
            <ProfileIcon type={current === PAGE.PERSONAL_AREA ? "primary" : "secondary"}/>
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}


export default NavBar;
