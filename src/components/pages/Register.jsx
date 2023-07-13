import { MainForm } from "../MainForm/MainForm";

export const Register = () => {
  return (
    <MainForm
      title='Добро пожаловать!'
      nameForm='register'
      nameButton='Зарегистрироваться'
    >
      <label className='main-form__label' htmlFor='name'>
        Имя
        <input
          className='main-form__input'
          name='name'
          id='name'
          type='text'
          placeholder='Виталий'
          required
        />
        <span className='input-error'>Что-то пошло не так...</span>
      </label>
      <label className='main-form__label' htmlFor='email'>
        E-mail{" "}
        <input
          className='main-form__input'
          name='email'
          type='email'
          id='email'
          placeholder='pochta@yandex.ru|'
          required
        />
        <span className='input-error'>Что-то пошло не так...</span>
      </label>
      <label className='main-form__label' htmlFor='password'>
        Пароль
        <input
          className='main-form__input input-text-error'
          name='password'
          type='password'
          id='password'
          placeholder='Пароль'
          required
        />
        <span className='input-error'>Что-то пошло не так...</span>
      </label>
    </MainForm>
  );
};
