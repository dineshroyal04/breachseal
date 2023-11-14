import { useState } from "react";
import LoginRegisterBoard from "../LoginRegisterBoard/LoginRegisterBoard";
import "./Register.css";

function Register() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    businessEmail: "",
    password:"",
    confirmPassword:""
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
      <form id="register" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <LoginRegisterBoard></LoginRegisterBoard>
        <label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name*"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          <input
            type="email"
            name="businessEmail"
            placeholder="Business Email*"
            value={formData.businessEmail}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          <input
            type="password"
            name="password"
            placeholder="password (minimum 8 charecters)*"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password*"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <input type="checkbox" name="terms&conditions" />
        </label>
        <span>
          I agree to the <a href="-">terms and conditions</a>
        </span>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;
