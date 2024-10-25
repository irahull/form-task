import React, { useContext, useState } from "react";
import "./signup.scss";
import AuthToggle from "../../components/authToggle/AuthToggle";
import { Context } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    pincode: "",
    city: "",
    isdcode: "",
    number: "",
    phone: "",
    fax: "",
    password: "",
    cpassword: "",
  });

  const { updateUser } = useContext(Context);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userData);
    navigate("/login");
    toast.success("Signup Successful");
  };

  return (
    <div className="signupWrapper">
      <div className="signupBox">
        <AuthToggle path="signup" />

        <form className="signupForm" onSubmit={handleSubmit}>
          <p>
            Individual/Enterprise/Goverment <span>*</span>
          </p>
          <div className="checkBoxes">
            <div className="checkBox">
              <input type="radio" name="type" value="individual" required />
              <label htmlFor="individual">Individual</label>
            </div>
            <div className="checkBox">
              <input type="radio" name="type" value="enterprise" required />
              <label htmlFor="enterprise">Enterprise</label>
            </div>
            <div className="checkBox">
              <input type="radio" name="type" value="goverment" required />
              <label htmlFor="goverment">Goverment</label>
            </div>
          </div>
          <div className="nameBox">
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                placeholder=""
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                required
              />
              {userData?.firstName?.length < 3 && (
                <p className="errors">Please enter valid first name</p>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>

              <input
                type="text"
                placeholder=""
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
              />
              {userData?.lastName?.length < 3 && (
                <p className="errors">Please enter valid last name</p>
              )}
            </div>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder=""
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
            {!/\S+@\S+\.\S+/.test(userData.email) && (
              <p className="errors">Please enter valid email</p>
            )}
          </div>
          <div className="address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder=""
              name="address"
              value={userData.address}
              onChange={handleChange}
              required
            />
            {userData?.address?.length < 3 && (
              <p className="errors">Please enter valid address</p>
            )}
          </div>

          <div className="countryBox">
            <div className="country">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                value={userData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </select>
              {userData?.country?.length === 0 && (
                <p className="errors">Please enter valid country</p>
              )}
            </div>
            <div className="state">
              <label htmlFor="state">State</label>
              <select
                name="state"
                value={userData.state}
                onChange={handleChange}
                required
              >
                <option value="">Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="California">Usa</option>
                <option value="Ontario">Ontario</option>
              </select>
              {userData?.state?.length === 0 && (
                <p className="errors">Please enter valid State</p>
              )}
            </div>
          </div>
          <div className="cityBox">
            <div className="city">
              <label htmlFor="city">City</label>
              <select
                name="city"
                value={userData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </select>
              {userData?.city?.length === 0 && (
                <p className="errors">Please enter valid city</p>
              )}
            </div>
            <div className="pincode">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="number"
                placeholder=""
                name="pincode"
                onChange={handleChange}
                value={userData.pincode}
                required
              />
              {userData?.pincode?.length < 3 && (
                <p className="errors">Please enter valid pincode</p>
              )}
            </div>
          </div>
          <div className="mobileBox">
            <label htmlFor="mobile">Mobile Number</label>
            <div className="isdCode">
              <select
                name="isdcode"
                value={userData.isdcode}
                onChange={handleChange}
                required
              >
                <option value="">ISD Code</option>
                <option value="Delhi">+91</option>
                <option value="California">+1</option>
                <option value="Ontario">+61</option>
              </select>
              <input
                type="number"
                name="number"
                onChange={handleChange}
                value={userData.number}
                required
              />
              {userData?.isdcode?.length === 0 && (
                <p className="errors">Please select valid code</p>
              )}
            </div>
          </div>
          <div className="faxBox">
            <div className="fax">
              <label htmlFor="firstName">Fax</label>
              <input
                type="text"
                placeholder=""
                name="fax"
                onChange={handleChange}
                value={userData.fax}
                required
              />
            </div>
            <div className="phone">
              <label htmlFor="lastName">Phone</label>
              <input
                type="number"
                placeholder=""
                name="phone"
                onChange={handleChange}
                value={userData.phone}
                required
              />
            </div>
          </div>

          <div className="passwordBox">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder=""
              name="password"
              onChange={handleChange}
              value={userData.password}
              required
            />
            {!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(
              userData?.password
            ) && (
              <p className="errors">
                Must contian at least one number and one uppercase and lowercase
                letter and at least 8 or more characters
              </p>
            )}
          </div>
          <div className="cpasswordBox">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="text"
              placeholder=""
              name="cpassword"
              onChange={handleChange}
              value={userData.cpassword}
              required
            />
            {userData?.password !== userData?.cpassword && (
              <p className="errors">
                confirm password should be same as password
              </p>
            )}
          </div>
          <button type="submit" className="signupBtn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
