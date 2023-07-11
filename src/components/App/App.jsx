import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Landing } from "../pages/Landing";
import { Movies } from "../pages/Movies";
import { SavedMovies } from "../pages/SavedMovies";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Profile } from "../pages/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
              <Header isLoggedIn={isLoggedIn} />
              <Movies />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Profile />
            </>
          }
        />
        <Route exact path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
