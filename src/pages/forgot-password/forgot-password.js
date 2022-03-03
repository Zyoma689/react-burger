import React from "react";
import styles from "../login/login.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT} from "../../utils/constants";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {forgotPassword} from "../../services/actions/forgot-password";

export function ForgotPasswordPage() {
  const dispatch = useDispatch();

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

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h2>
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
        <Button type="primary" size="large" onClick={onSubmit}>Восстановить</Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">Вспомнили пароль?
        <Link to="/login" className={styles.link}> Войти</Link>
      </p>
    </div>
  );
}