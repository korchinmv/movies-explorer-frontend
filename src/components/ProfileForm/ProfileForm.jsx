import { useContext, useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export const ProfileForm = ({ logOut, updateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { form, handleChange, errors, isValid } = useForm({
    email: "",
    password: "",
  });
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = form;
    updateUser(name, email);
  };

  return (
    <section className='profile'>
      <h1 className='profile__greeting'>{`Привет, ${currentUser.name}!`}</h1>

      <form className='profile__form' action='#' onSubmit={handleSubmit}>
        <label className='profile__label' htmlFor='input-name'>
          Имя
          <input
            className='profile__input'
            type='text'
            name='input-name'
            id='input-name'
            placeholder='Имя'
            minLength='2'
            maxLength='20'
            value={form.name || name}
            onChange={handleChange}
          />
        </label>

        <label className='profile__label' htmlFor='input-email'>
          E-mail
          <input
            className='profile__input'
            type='email'
            name='input-email'
            id='input-email'
            placeholder='Почта'
            value={form.email || ""}
            minLength='5'
            maxLength='30'
            onChange={handleChange}
            pattern='([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+'
          />
        </label>

        <button className='profile__edit hover-link' type='submit'>
          Редактировать
        </button>
      </form>

      <button className='profile__logout hover-link' onClick={logOut}>
        Выйти из аккаунта
      </button>
    </section>
  );
};
