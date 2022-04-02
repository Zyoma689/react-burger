import React, {ChangeEvent, FC, FormEvent} from "react";
import styles from "../login/login.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT, PATH} from "../../utils/constants";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/hooks";
import {forgotPasswordThunk} from "../../services/actions/forgot-password";
import {TForgotPasswordForm} from "../../types";

export const ForgotPasswordPage: FC = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, forgotPasswordSuccess, forgotPasswordFailed } = useSelector((state: any) => state.access);

  const [ formValue, setFormValue ] = React.useState<TForgotPasswordForm>({
    email: ''
  });

  function onFormChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    dispatch(forgotPasswordThunk(formValue));
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
        <Link to={PATH.LOGIN} className={styles.link}> Войти</Link>
      </p>
    </div>
  );
};