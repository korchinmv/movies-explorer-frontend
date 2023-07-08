import userIcon from "../../../images/user.svg";

export const ProfileButton = ({ position }) => {
  return (
    <a
      className={`profile-link hover-link ${position}`}
      href="#"
      aria-label="Войти в свой профиль"
    >
      Аккаунт
      <div className="profile-link__box">
        <img
          className="profile-link__image"
          src={userIcon}
          alt="Пользователь"
        />
      </div>
    </a>
  );
};
