import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="headerSection">
      <div className="headerContent">
        <div className="headerHeading">Welcome to Glamour Couture!</div>
        <p className="headerPara">
          Explore our exclusive collection of stylish clothing and exquisite
          jewelry. From the latest fashion trends to timeless accessories,
          Glamour Couture brings you the best in style and elegance. Shop now
          and elevate your wardrobe with pieces designed to impress!
        </p>
       <Link to="/product">
       <button className="headerBtn">View More</button> </Link>
      </div>
    </section>
  );
};

export default Home;
