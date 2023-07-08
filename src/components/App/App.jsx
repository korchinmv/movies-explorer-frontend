import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Landing } from "../pages/Landing";
import { Movies } from "../pages/Movies";

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
      </Routes>
    </div>
  );
};

export default App;
