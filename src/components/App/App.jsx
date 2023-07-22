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
import MainApi from "../../utils/MainApi.js";
import moviesApi from "../../utils/MoviesApi.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successfulMessage, setSuccessfulMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [tokenExist, setTokenExist] = useState(true);
  const jwt = localStorage.getItem("jwt");

  //получение данных пользователя
  const getUserData = (jwt) => {
    Auth.getUserData(jwt)
      .then((resp) => {
        setIsLoggedIn(true);
        setCurrentUser(resp);
      })
      .catch((err) => {
        localStorage.removeItem("jwt");
        setTokenExist(false);
        console.log(err);
      });
  };

  //получение всех фильмов из Api
  const getMovie = () => {
    moviesApi
      .getMovies()
      .then((resp) => {
        localStorage.setItem("movies", JSON.stringify(resp));
        setMovies(resp);
      })
      .catch((err) => console.log(err));
  };

  //проверка токена, если токен есть получаем данные пользователя и список всех фильмов
  useEffect(() => {
    if (jwt) {
      getUserData(jwt);
      getMovie();
    } else {
      setTokenExist(false);
    }
  }, [jwt]);

  //регистрация
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

  //войти в приложение
  const loginUser = (email, password) => {
    Auth.authorizeUser(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        setTokenExist(true);
        getMovie();
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setErrorMessage("Произошла ошибка авторизации, попрбуйте еще раз...");
        }
      });
  };

  //выйти из приложения
  const logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("foundMovies");
    localStorage.removeItem("inputValue");
    localStorage.removeItem("checkbox");
    setIsLoggedIn(false);
    setMovies([]);
    navigate("/");
  };

  //обновить данные пользователя
  const updateUser = (form) => {
    setIsLoading(true);
    MainApi.sendUser(form)
      .then((resp) => {
        setCurrentUser(resp);
        setSuccessfulMessage("Данные успешно обновились");
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
      <div className="page">
        <Routes>
          <Route
            index
            path="/"
            element={<Landing isLoggedIn={isLoggedIn} isLoading={isLoading} />}
          />

          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                logOut={logOut}
                isLoggedIn={isLoggedIn}
                updateUser={updateUser}
                isLoading={isLoading}
                tokenExist={tokenExist}
                successfulMessage={successfulMessage}
              />
            }
          />

          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                tokenExist={tokenExist}
                movies={movies}
                setMovies={setMovies}
              />
            }
          />

          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                tokenExist={tokenExist}
              />
            }
          />

          <Route
            exact
            path="/signup"
            element={
              <Register
                registerUser={registerUser}
                errorMessage={errorMessage}
              />
            }
          />

          <Route
            exact
            path="/signin"
            element={
              <Login loginUser={loginUser} errorMessage={errorMessage} />
            }
          />

          <Route exact path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
