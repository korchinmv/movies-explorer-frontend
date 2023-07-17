import { useContext } from "react";
import { Main } from "../Main/Main";
import { ProfileForm } from "../ProfileForm/ProfileForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export const Profile = ({ logOut }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <Main>
      <ProfileForm logOut={logOut} />
    </Main>
  );
};
