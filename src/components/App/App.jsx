import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
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
            setCurrentUser(resp.data);
            navigate("/movies");
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

  const logOut = () => {
    localStorage.removeItem("jwt");
    // localStorage.removeItem("movies");
    setIsLoggedIn(false);
    setMovies([]);
    navigate("/signin");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Landing isLoggedIn={isLoggedIn} />} />

          <Route
            path='/movies'
            element={
              <ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} />
            }
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />
            }
          />

          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                logOut={logOut}
                isLoggedIn={isLoggedIn}
              />
            }
          />

          <Route
            path='/signup'
            element={
              <Register
                registerUser={registerUser}
                errorMessage={errorMessage}
              />
            }
          />

          <Route
            path='/signin'
            element={
              <Login loginUser={loginUser} errorMessage={errorMessage} />
            }
          />

          {/* <Route
            path='/'
            element={
              isLoggedIn ? <Navigate to='/movies' /> : <Navigate to='/signin' />
            }
          /> */}

          <Route exact path='/*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
