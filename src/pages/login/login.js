import React from "react";
import {Button, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {INPUT} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../services/actions/login";
import {Link} from "react-router-dom";
import styles from "./login.module.css"

export function LoginPage() {
  const dispatch = useDispatch();

  const [ formValue, setFormValue ] = React.useState({
    email: '',
    password: '',
  });

  function onFormChange(evt) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    dispatch(login(formValue));
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <form className={styles.form}>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.EMAIL}
            placeholder={INPUT.PLACEHOLDER.EMAIL}
            name={INPUT.NAME.EMAIL}
            onChange={onFormChange}
            value={formValue.email}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={formValue.password}
            name={INPUT.NAME.PASSWORD}
            onChange={onFormChange}
          />
        </div>
        <Button type="primary" size="large" onClick={onSubmit}>Войти</Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">Вы — новый пользователь?
        <Link to="/register" className={styles.link}> Зарегистрироваться</Link>
      </p>

      <p className="text text_type_main-default text_color_inactive mt-4">Забыли пароль?
        <Link to="/forgot-password" className={styles.link}> Восстановить пароль</Link>
      </p>
    </div>
  );
}