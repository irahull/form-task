import React from "react";
import "./authToggle.scss";
import { useNavigate } from "react-router-dom";

const AuthToggle = ({ path }) => {
  const navigate = useNavigate();
  return (
    <div className="authToggle">
      <button
        onClick={() => navigate("/login")}
        className={path === "login" ? "active" : ""}
      >
        Login
      </button>
      <button
        onClick={() => navigate(`/signup`)}
        className={path === "signup" ? "active" : ""}
      >
        {" "}
        Signup
      </button>
    </div>
  );
};

export default AuthToggle;
