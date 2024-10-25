import React, { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../contexts/AppContext";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const { currentUser } = useContext(Context);

  const navigate = useNavigate();
  const handleNav = (e) => {
    setActive(e.target.innerHTML);
  };

  return (
    <div className="navbarWrapper">
      <h2 className="navLogo" onClick={() => navigate("/")}>
        <span
          style={{
            color: "cyan",
          }}
        >
          SHOP
        </span>
        LANE
      </h2>
      <ul className="navLinks">
        <Link
          to="/"
          className={active === "home" ? "active" : ""}
          onClick={handleNav}
        >
          home
        </Link>
        <Link
          to="/product"
          className={active === "products" ? "active" : ""}
          onClick={handleNav}
        >
          products
        </Link>
        <Link
          to="/cart"
          className={active === "cart" ? "active" : ""}
          onClick={handleNav}
        >
          cart
        </Link>
      </ul>
      <div className="navRight">
        {currentUser ? (
          <button
            style={{
              backgroundColor: "cyan",
              borderRadius: "3px",
            }}
            onClick={() => {
              localStorage.removeItem("userDetails"), navigate("/signup");
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
