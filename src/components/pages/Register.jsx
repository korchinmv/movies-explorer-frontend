import { MainForm } from "../MainForm/MainForm";
import { useForm } from "../../hooks/useForm";

export const Register = ({ registerUser }) => {
  const { form, handleChange, errors, isValid } = useForm({
    name: "",
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email, name } = form;
    // registerUser(password, email, name);
    console.log(password, email, name);
  };
  return (
    <MainForm
      title='Добро пожаловать!'
      nameForm='register'
      nameButton='Зарегистрироваться'
      submit={handleSubmit}
      isValid={isValid}
    >
      <label className='main-form__label' htmlFor='name'>
        Имя
        <input
          className={`main-form__input ${
            errors.name ? "main-form__input_error" : ""
          }`}
          name='name'
          id='name'
          type='text'
          placeholder='Имя'
          value={form.name || ""}
          minLength='2'
          maxLength='12'
          onChange={handleChange}
          required
        />
        {errors.name && <span className='input-error'>{errors.name}</span>}
      </label>
      <label className='main-form__label' htmlFor='email'>
        E-mail{" "}
        <input
          className={`main-form__input ${
            errors.email ? "main-form__input_error" : ""
          }`}
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
          className={`main-form__input ${
            errors.password ? "main-form__input_error" : ""
          }`}
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
        {errors.password && (
          <span className='input-error'>{errors.password}</span>
        )}
      </label>
    </MainForm>
  );
};
