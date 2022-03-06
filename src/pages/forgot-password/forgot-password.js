import React from "react";
import styles from "../login/login.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT, PATH} from "../../utils/constants";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {forgotPassword} from "../../services/actions/forgot-password";

export function ForgotPasswordPage() {
  const dispatch = useDispatch();

  const { isAuthenticated, forgotPasswordSuccess, forgotPasswordFailed } = useSelector(state => state.access);

  const [ formValue, setFormValue ] = React.useState({
    email: ''
  });

  function onFormChange(evt) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    dispatch(forgotPassword(formValue));
  }

  if (forgotPasswordSuccess) {
    return (
      <Redirect
        to={PATH.RESET_PASSWORD}
      />
    )
  } else if (isAuthenticated) {
    return (
      <Redirect
        to={PATH.HOME}
      />
    )
  }


  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.EMAIL}
            placeholder={INPUT.PLACEHOLDER.RESTORE}
            name={INPUT.NAME.EMAIL}
            onChange={onFormChange}
            value={formValue.email}
            error={forgotPasswordFailed}
          />
        </div>
        <Button type="primary" size="large">Восстановить</Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">Вспомнили пароль?
        <Link to="/login" className={styles.link}> Войти</Link>
      </p>
    </div>
  );
}