import React, { useContext, useState } from "react";
import "./login.scss";
import AuthToggle from "../../components/authToggle/AuthToggle";
import { Context } from "../../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { currentUser } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (currentUser) {
      const loginEmail = currentUser.email || "";
      const loginPassword = currentUser.password || "";
      if (
        loginEmail === loginData.email &&
        loginPassword === loginData.password
      ) {
        toast.success("Login Successful");
        navigate("/product");
      } else {
        toast.error("Invalid Credentials");
      }
    }
    else{
      toast.error("Invalid Credentials");
      // navigate("/signup");
    }
  };

  // console.log(currentUser.email);
  return (
    <div className="loginWrapper">
      <div className="loginBox">
        <AuthToggle path="login" />
        <form onSubmit={handleLogin} className="loginForm">
          <div className="loginEMail">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="loginPassword">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Link to="/signup"  className="resetPass">Reset Password</Link>
          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
