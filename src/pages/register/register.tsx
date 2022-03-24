import React, {ChangeEvent, FC, FormEvent} from "react";
import styles from "../login/login.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT, PATH} from "../../utils/constants";
import {Link, Redirect, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../services/actions/register";
import {TLocationState, TRegisterForm} from "../../types";

export const RegisterPage: FC = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, registerFailed } = useSelector((state: any) => state.access);
  const { state } = useLocation<TLocationState>();

  const [ formValue, setFormValue ] = React.useState<TRegisterForm>({
    name: '',
    email: '',
    password: '',
  });

  function onFormChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    dispatch(register(formValue));
  }

  if (isAuthenticated) {
    return (
      <Redirect
        to={ state?.from || PATH.HOME}
      />
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium mb-6`}>Регистрация</h2>
      <form className={styles.form} onSubmit={onSubmit}>
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
            error={registerFailed}
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            value={formValue.password}
            name={INPUT.NAME.PASSWORD}
            onChange={onFormChange}
          />
        </div>
        <Button type="primary" size="large">Зарегистрироваться</Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">Уже зарегистрированы?
        <Link to={PATH.LOGIN} className={styles.link}> Войти</Link>
      </p>
    </div>
  );
};