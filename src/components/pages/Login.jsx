import { MainForm } from "../MainForm/MainForm";
import { useForm } from "../../hooks/useForm";

export const Login = ({ loginUser }) => {
  const { form, handleChange, errors, isValid } = useForm({
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = form;
    // loginUser(password, email);
    console.log(password, email);
  };
  return (
    <MainForm
      title='Рады видеть!'
      nameForm='login'
      nameButton='Войти'
      submit={handleSubmit}
      isValid={isValid}
    >
      <label className='main-form__label' htmlFor='email'>
        E-mail{" "}
        <input
          className='main-form__input'
          name='email'
          type='email'
          id='email'
          placeholder='Почта'
          minLength='5'
          maxLength='18'
          value={form.email || ""}
          onChange={handleChange}
          pattern='([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)'
          required
        />
        {errors.email && <span className='input-error'>{errors.email}</span>}
      </label>
      <label className='main-form__label' htmlFor='password'>
        Пароль
        <input
          className='main-form__input'
          name='password'
          type='password'
          id='password'
          placeholder='Пароль'
          minLength='4'
          maxLength='12'
          value={form.password || ""}
          onChange={handleChange}
          required
        />
        <span className='input-error'>{errors.password}</span>
      </label>
    </MainForm>
  );
};
