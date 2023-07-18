import { useContext } from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { ProfileForm } from "../ProfileForm/ProfileForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export const Profile = ({ logOut, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} color={"header_main"} />
      <Main>
        <ProfileForm logOut={logOut} />
      </Main>
    </>
  );
};
