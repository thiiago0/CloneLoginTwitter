import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { useFindUser } from "./hooks/useFindUser";

function App() {
  const { isloged, valueInput, handleChangeInput, handleClickLogin } =
    useFindUser();
  return (
    <>
      {!isloged ? (
        <Login
          valueInput={valueInput}
          handleChangeInput={handleChangeInput}
          handleClickLogin={handleClickLogin}
        />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
