import React from "react";
import styles from "../login/login.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT} from "../../utils/constants";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../../services/actions/register";

export function RegisterPage() {
  const dispatch = useDispatch();

  const [ formValue, setFormValue ] = React.useState({
    name: '',
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
    dispatch(register(formValue));
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
      <form className={styles.form}>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.TEXT}
            placeholder={INPUT.PLACEHOLDER.NAME}
            name={INPUT.NAME.NAME}
            onChange={onFormChange}
            value={formValue.name}
          />
        </div>
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
        <Button type="primary" size="large" onClick={onSubmit}>Зарегистрироваться</Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">Уже зарегистрированы?
        <Link to="/login" className={styles.link}> Войти</Link>
      </p>
    </div>
  );
}