import React, {ChangeEvent, FC, FormEvent, SyntheticEvent, useMemo} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {INPUT} from "../../utils/constants";
import styles from "./profile-edit.module.css";
import {useDispatch, useSelector} from "../../services/hooks";
import {editProfileThunk} from "../../services/actions/profile";
import {TProfileForm} from "../../types";

export const ProfileEdit: FC = () => {
  const dispatch = useDispatch();

  const { name, email, password } = useSelector((state: any) => state.access.user);

  const [ formValue, setFormValue ] = React.useState<TProfileForm>({
    name: name,
    email: email,
    password: password,
  });

  const [ focus, setFocus ] = React.useState({
    name: false,
    email: false,
    password: false,
  });

  const isChanged = useMemo(() => {
    return name !== formValue.name || email !== formValue.email || password !== formValue.password;
  }, [formValue, name, email, password]);


  function onFormChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormValue({
      ...formValue,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    dispatch(editProfileThunk(formValue));
  }

  function onCancel(evt: SyntheticEvent) {
    evt.preventDefault();
    setFormValue({
      name, email, password,
    })
  }

  function onFocus(evt: React.FocusEvent<HTMLInputElement>) {
    setFocus({
      ...focus,
      [evt.target.name]: true,
    })
  }

  function onBlur(evt: React.FocusEvent<HTMLInputElement>) {
    setFocus({
      ...focus,
      [evt.target.name]: false,
    })
  }

  return (
    <form onSubmit={onSubmit} className={"ml-25 mt-20"}>
      <div className="mb-6">
        <Input
          type={INPUT.TYPE.TEXT}
          placeholder={INPUT.PLACEHOLDER.NAME}
          name={INPUT.NAME.NAME}
          onChange={onFormChange}
          value={formValue.name}
          onFocus={onFocus}
          onBlur={onBlur}
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
      {
        isChanged &&
        (<div className={styles.buttons}>
          <Button type="secondary" size="large" onClick={onCancel}>Отмена</Button>
          <Button type="primary" size="large">Сохранить</Button>
        </div>)
      }
    </form>
  )
};