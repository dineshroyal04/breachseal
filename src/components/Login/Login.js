import "./Login.css";
import {useState} from "react";
//import LoginRegisterBoard from "../LoginRegisterBoard/LoginRegisterBoard";

function Login()
{
    const [formData, setFormData] = useState({
      
      businessEmail: "",
      password: ""
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement form submission logic here
      console.log("Form submitted:", formData);
    };

return (
  <div>
    <form id="login" onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <label>
        <input
          type="text"
          name="businessEmail"
          placeholder="Business Email"
          value={formData.businessEmail}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <input type="checkbox" name="terms&conditions" />
      <span>
        I agree to the <a href="-">terms and conditions</a>
      </span>
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
);
}
export default Login;