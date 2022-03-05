import React from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT} from "../../utils/constants";
import { NavLink } from "react-router-dom";
import {register} from "../../services/actions/register";
import {useDispatch} from "react-redux";
import styles from "./profile.module.css"

export function ProfilePage() {
  const dispatch = useDispatch();

  const [ formValue, setFormValue ] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [ focus, setFocus ] = React.useState({
    name: false,
    email: false,
    password: false,
  });

  const [ target, setTarget ] = React.useState(null);

  const [ isPassword, setIsPassword ] = React.useState(true);

  function onFormChange(evt) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    // dispatch(register(formValue));
  }

  function onCancel(evt) {
    evt.preventDefault();
  }

  function onFocus(evt) {
    setFocus({
      ...focus,
      [evt.target.name]: true,
    })
  }

  function onBlur(evt) {
    setFocus({
      ...focus,
      [evt.target.name]: false,
    })
  }

  return (
    <main className={styles.page}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              className={`${styles.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styles.active}
              to={"/profile"}
              exact
            >Профиль
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={`${styles.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styles.active}
              to={"/profile/orders"}
            >История заказов
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={`${styles.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styles.active}
              to={"/logout"}
            >Выход
            </NavLink>
          </li>
        </ul>
        <p className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете
          изменить свои персональные данные</p>
      </nav>
      <form>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.TEXT}
            placeholder={INPUT.PLACEHOLDER.NAME}
            name={INPUT.NAME.NAME}
            onChange={onFormChange}
            value={formValue.name}
            onFocus={onFocus}
            onBlur={onBlur}
            onIconClick={(e) => console.log(e.target)}
            icon={focus.name ? "CloseIcon" : "EditIcon"}
          />
        </div>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.EMAIL}
            placeholder={INPUT.PLACEHOLDER.EMAIL}
            name={INPUT.NAME.EMAIL}
            onChange={onFormChange}
            value={formValue.email}
            onFocus={onFocus}
            onBlur={onBlur}
            icon={focus.email ? "CloseIcon" : "EditIcon"}
          />
        </div>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.PASSWORD}
            value={formValue.password}
            placeholder={INPUT.PLACEHOLDER.NEW_PASS}
            icon={focus.password ? "CloseIcon" : "EditIcon"}
            name={INPUT.NAME.PASSWORD}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onFormChange}
          />
        </div>
        <div className={styles.buttons}>
          <Button type="secondary" size="large" onClick={onCancel}>Отмена</Button>
          <Button type="primary" size="large" onClick={onSubmit}>Сохранить</Button>
        </div>
      </form>
    </main>
  );
}