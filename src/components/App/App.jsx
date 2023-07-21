import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useEffect, useState } from "react";
import * as Auth from "../../utils/Auth";
import { Landing } from "../pages/Landing";
import { Movies } from "../pages/Movies";
import { SavedMovies } from "../pages/SavedMovies";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import moviesApi from "../../utils/MoviesApi.js";
import MainApi from "../../utils/MainApi.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo();
    getMovie();
  }, []);

  const getUserInfo = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setIsLoggedIn(false);
    }
    Auth.getUserData(jwt)
      .then((resp) => {
        setCurrentUser(resp);
        setIsLoggedIn(true);
        console.log(jwt);
        console.log(isLoggedIn);
      })
      .catch((err) => {
        localStorage.removeItem("jwt");
        console.log(err);
      });
  };

  const getMovie = () => {
    moviesApi
      .getMovies()
      .then((resp) => {
        localStorage.setItem("movies", JSON.stringify(movies));
        setMovies(resp);
      })
      .catch((err) => console.log(err));
  };

  const registerUser = (name, password, email) => {
    Auth.registerUser(name, password, email)
      .then((res) => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setErrorMessage("Произошла ошибка, попрбуйте еще раз...");
        }
      });
  };

  const loginUser = (email, password) => {
    Auth.authorizeUser(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        getUserInfo();
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setErrorMessage("Произошла ошибка авторизации, попрбуйте еще раз...");
        }
      });
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    setIsLoggedIn(false);
    setMovies([]);
    navigate("/");
  };

  const updateUser = (form) => {
    setIsLoading(true);
    MainApi.sendUser(form)
      .then((resp) => {
        setCurrentUser(resp);
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setErrorMessage("При обновлении профиля произошла ошибка.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route
            index
            path='/'
            element={<Landing isLoggedIn={isLoggedIn} isLoading={isLoading} />}
          />

          <Route
            exact
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                logOut={logOut}
                isLoggedIn={isLoggedIn}
                updateUser={updateUser}
                isLoading={isLoading}
              />
            }
          />

          <Route
            exact
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
              />
            }
          />

          <Route
            exact
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
              />
            }
          />

          <Route
            exact
            path='/signup'
            element={
              <Register
                registerUser={registerUser}
                errorMessage={errorMessage}
              />
            }
          />

          <Route
            exact
            path='/signin'
            element={
              <Login loginUser={loginUser} errorMessage={errorMessage} />
            }
          />

          <Route exact path='/*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
