import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { ProfileForm } from "../ProfileForm/ProfileForm";

export const Profile = ({ logOut, isLoggedIn, updateUser }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} color={"header_main"} />
      <Main>
        <ProfileForm logOut={logOut} updateUser={updateUser} />
      </Main>
    </>
  );
};
