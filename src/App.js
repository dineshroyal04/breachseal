import Button from "@mui/material/Button";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div className="App">
      <Button variant="contained">Contained</Button>
      <button
        onClick={() => {
          setButtonClick(true);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setButtonClick(false);
        }}
      >
        Register
      </button>

      {buttonClick === false && <Register />}
      {buttonClick === true && <Login />}
    </div>
  );
}

export default App;
