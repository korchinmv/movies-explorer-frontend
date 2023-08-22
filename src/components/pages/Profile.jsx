import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Preloader } from "../Preloader/Preloader";
import { ProfileForm } from "../ProfileForm/ProfileForm";

export const Profile = ({
  logOut,
  isLoggedIn,
  updateUser,
  isLoading,
  profileChanged,
  setProfileChanged,
  errorMessage,
  setErrorMessage,
}) => {
  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <Header isLoggedIn={isLoggedIn} color={"header_main"} />
      <Main>
        <ProfileForm
          logOut={logOut}
          updateUser={updateUser}
          profileChanged={profileChanged}
          setProfileChanged={setProfileChanged}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </Main>
    </>
  );
};
