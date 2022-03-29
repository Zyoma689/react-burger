import React, {ChangeEvent, FC, FormEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "../login/login.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT, PATH} from "../../utils/constants";
import {Link, Redirect} from "react-router-dom";
import {resetPassword} from "../../services/actions/reset-password";
import {TResetPasswordForm} from "../../types";

export const ResetPasswordPage: FC = () => {
  const dispatch = useDispatch();

  const { forgotPasswordSuccess } = useSelector((state: any) => state.access);

  const { isAuthenticated, resetPasswordSuccess, resetPasswordFailed } = useSelector((state: any) => state.access);

  const [ formValue, setFormValue ] = React.useState<TResetPasswordForm>({
    password: '',
    token: '',
  });
  const [ isPassword, setIsPassword ] = React.useState(true);

  function onFormChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    dispatch(resetPassword(formValue));
  }
  
  function onIconClick() {
    setIsPassword(!isPassword);
  }

  if (resetPasswordSuccess || !forgotPasswordSuccess) {
    return (
      <Redirect
        to={PATH.LOGIN}
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
            type={isPassword ? INPUT.TYPE.PASSWORD : INPUT.TYPE.TEXT}
            value={formValue.password}
            placeholder={INPUT.PLACEHOLDER.NEW_PASS}
            icon={isPassword ? "ShowIcon" : "HideIcon"}
            name={INPUT.NAME.PASSWORD}
            onChange={onFormChange}
            onIconClick={onIconClick}
            error={resetPasswordFailed}
          />
        </div>
        <div className="mb-6">
          <Input
            type={INPUT.TYPE.TEXT}
            placeholder={INPUT.PLACEHOLDER.CODE}
            name={INPUT.NAME.CODE}
            onChange={onFormChange}
            value={formValue.token}
            error={resetPasswordFailed}
          />
        </div>

        <Button type="primary" size="large">Сохранить</Button>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">Вспомнили пароль?
        <Link to={PATH.LOGIN} className={styles.link}> Войти</Link>
      </p>
    </div>
  );
}