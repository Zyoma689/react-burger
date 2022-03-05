import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "../login/login.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT} from "../../utils/constants";
import {Link} from "react-router-dom";
import {resetPassword} from "../../services/actions/reset-password";

export function ResetPasswordPage() {
  const dispatch = useDispatch();

  const [ formValue, setFormValue ] = React.useState({
    password: '',
    token: '',
  });
  const [ isPassword, setIsPassword ] = React.useState(true);

  function onFormChange(evt) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    dispatch(resetPassword(formValue));
  }
  
  function onIconClick() {
    setIsPassword(!isPassword);
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h2>
      <form className={styles.form}>
        <div className="mb-6">
          <Input
            type={isPassword ? INPUT.TYPE.PASSWORD : INPUT.TYPE.TEXT}
            value={formValue.password}
            placeholder={INPUT.PLACEHOLDER.NEW_PASS}
            icon={isPassword ? "ShowIcon" : "HideIcon"}
            name={INPUT.NAME.PASSWORD}
            onChange={onFormChange}
            onIconClick={onIconClick}
          />
        </div>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.TEXT}
            placeholder={INPUT.PLACEHOLDER.CODE}
            name={INPUT.NAME.CODE}
            onChange={onFormChange}
            value={formValue.token}
          />
        </div>

        <Button type="primary" size="large" onClick={onSubmit}>Сохранить</Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">Вспомнили пароль?
        <Link to="/login" className={styles.link}> Войти</Link>
      </p>
    </div>
  );
}