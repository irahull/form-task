import React, { useContext } from "react";
import "./appLayout.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../contexts/AppContext";

const AppLayout = () => {
  return (
    <div className="layout-main">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const AuthLayout = () => {
  const { currentUser } = useContext(Context);
  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout-main">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { AppLayout, AuthLayout };
