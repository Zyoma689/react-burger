import React from "react";
import {Button, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {INPUT} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../services/actions/login";
import {Link} from "react-router-dom";
import styles from "./login.module.css"

export function LoginPage() {

  const [ formValue, setFormValue ] = React.useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  function onFormChange(evt) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    dispatch(loginAction(formValue));
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Вход</h2>
      <form className={styles.form}>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.EMAIL}
            placeholder={INPUT.PLACEHOLDER.EMAIL}
            name={INPUT.TYPE.EMAIL}
            onChange={onFormChange}
            value={formValue.email}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={formValue.password}
            name={INPUT.TYPE.PASSWORD}
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