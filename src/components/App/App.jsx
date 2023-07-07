import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Landing } from "../pages/Landing";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='page'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Landing />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
