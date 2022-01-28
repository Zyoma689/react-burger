import React from "react";
import NavItem from "../nav-item/nav-item";
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import NavBar from "../nav-bar/nav-bar";


function AppHeader() {
  return (
    <header className="mt-10">
      <NavBar/>
    </header>
  )
}

export default AppHeader;