import React from "react";
import "./footer.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerSection" id="footer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <h3>
            <span>SHOP</span>LANE
          </h3>
          <p>
            Explore our exclusive collection of stylish clothing and exquisite
            jewelry. From the latest fashion trends to timeless accessories,
            Glamour Couture brings you the best in style and elegance. Shop now
            and elevate your wardrobe with pieces designed to impress!
          </p>
        </div>
        <div className="footerCenter">
          <h4>IMPORTANT</h4>
          <ul className="links">
            <li>Home</li>
            <li>About Us</li>
            <li>Return</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className="footerRight">
          <h4>GET IN TOUCH</h4>
          <p className="phoneNumber">+1232343222</p>
          <p className="email">dummy@gmail.com</p>
          <div className="socialIcons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyrightsText">Copyright @ 2024 SHOPLANE</p>
    </footer>
  );
};

export default Footer;
