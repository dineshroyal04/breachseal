import "./LoginRegisterBoard.css";
import Login from "../Login/Login";
import {useState} from "react";
function LoginRegisterBoard(){

    const[showLoginPage, setLoginPage]=useState(false);
     
    const handleLoginClick = ()=>{
        setLoginPage(true);
    }



return (
  <div>
    {showLoginPage ? (
      <button type="submit" onClick={handleLoginClick}>
        Login
      </button>
    ):
      (<Login></Login>)
     }
    <button type="submit">Register</button>
  </div>
);
}
export default LoginRegisterBoard;