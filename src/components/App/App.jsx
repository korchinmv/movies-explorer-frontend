import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Landing } from "../pages/Landing";
import { Movies } from "../pages/Movies";
import { SavedMovies } from "../pages/SavedMovies";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import moviesApi from "../../utils/MoviesApi.js";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [movies, setMovies] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [token, setToken] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const [loginError, setLoginError] = useState("");

  localStorage.setItem("movies", JSON.stringify(movies));

  useEffect(() => {
    moviesApi
      .getMovies()
      .then((resp) => {
        setMovies(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='page'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header isLoggedIn={isLoggedIn} color={"header_landing"} />
              <Landing />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header isLoggedIn={isLoggedIn} color={"header_main"} />
              <Movies />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header isLoggedIn={isLoggedIn} color={"header_main"} />
              <SavedMovies />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header isLoggedIn={isLoggedIn} color={"header_main"} />
              <Profile />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path='/signin'
          element={
            <>
              <Login />
            </>
          }
        />
        <Route exact path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
