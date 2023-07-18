import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useEffect, useState } from "react";
import * as Auth from "../../utils/Auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Landing } from "../pages/Landing";
import { Movies } from "../pages/Movies";
import { SavedMovies } from "../pages/SavedMovies";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import moviesApi from "../../utils/MoviesApi.js";
import mainApi from "../../utils/MainApi.js";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        Auth.getUserData(jwt)
          .then((resp) => {
            setIsLoggedIn(true);
            setCurrentUser(resp);
            navigate("/");
          })
          .catch((err) => {
            localStorage.removeItem("jwt");
            console.log(err);
          });

        moviesApi
          .getMovies()
          .then((resp) => {
            localStorage.setItem("movies", JSON.stringify(movies));
            setMovies(resp);
          })
          .catch((err) => console.log(err));
      }
    }
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
        tokenCheck();
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setErrorMessage("Произошла ошибка, попрбуйте еще раз...");
        }
      });
  };

  const handleUpdateUser = (data) => {
    mainApi
      .sendUser(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route index path='/' element={<Landing />} loggedIn={isLoggedIn} />

          <Route
            path='/movies'
            element={<ProtectedRoute element={Movies} loggedIn={isLoggedIn} />}
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute element={SavedMovies} loggedIn={isLoggedIn} />
            }
          />

          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                logOut={logOut}
                updateUser={handleUpdateUser}
                loggedIn={isLoggedIn}
              />
            }
          />

          <Route
            path='/signup'
            element={Register}
            registerUser={registerUser}
            errorMessage={errorMessage}
          />

          <Route
            path='/signin'
            element={
              <Login loginUser={loginUser} errorMessage={errorMessage} />
            }
          />

          <Route exact path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
