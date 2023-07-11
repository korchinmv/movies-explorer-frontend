import React from "react";

export const ProfileForm = () => {
  return (
    <section className='profile'>
      <h1 className='profile__greeting'>Привет, Виталий!</h1>

      <form className='profile__form' action='#'>
        <label className='profile__label' htmlFor='input-name'>
          Имя
          <input
            className='profile__input'
            type='text'
            name='input-name'
            id='input-name'
            placeholder='Виталий'
          />
        </label>

        <label className='profile__label' htmlFor='input-email'>
          E-mail
          <input
            className='profile__input'
            type='email'
            name='input-email'
            id='input-email'
            placeholder='pochta@yandex.ru'
          />
        </label>

        <button className='profile__edit hover-link' type='submit'>
          Редактировать
        </button>
      </form>

      <button className='profile__logout hover-link'>Выйти из аккаунта</button>
    </section>
  );
};
