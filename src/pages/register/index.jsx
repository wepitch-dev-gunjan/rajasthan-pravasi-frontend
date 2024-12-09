import React, { useState } from "react";
import axios from "axios";
import Namaste from "../../assets/namaste.png";
import "./style.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    aadharNumber: "",
    dob: "",
    phone: "",
    address: { street: "", city: "", state: "", pin: "" },
    familyContact: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in formData.address) {
      setFormData({
        ...formData,
        address: { ...formData.address, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://13.200.63.7:8000/api/users/register", formData);
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="commonInput"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="commonInput"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="commonInput"
                type="password"
                id="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Re-enter Password</label>
              <input
                className="commonInput"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="form-group">
              <label htmlFor="aadharNumber">Aadhar Number</label>
              <input
                className="commonInput"
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                placeholder="Aadhar Number"
                value={formData.aadharNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                className="commonInput"
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                className="commonInput"
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input
                className="commonInput"
                type="text"
                id="street"
                name="street"
                placeholder="Street"
                value={formData.address.street}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                className="commonInput"
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.address.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                className="commonInput"
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.address.state}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pin">Pin</label>
              <input
                className="commonInput"
                type="text"
                id="pin"
                name="pin"
                placeholder="Pin Code"
                value={formData.address.pin}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case 4:
        return (
          <div className="form-group">
            <label htmlFor="familyContact">Family Contact</label>
            <input
              className="commonInput"
              type="text"
              id="familyContact"
              name="familyContact"
              placeholder="Family Contact"
              value={formData.familyContact}
              onChange={handleChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerContainerBox">
        <div className="registerBoxLeft">
          <div className="registerBoxLeftContainer">
            <h2>Register Account</h2>
            <div className="registerFormContainer">

            
              <form className="registerForm" onSubmit={handleSubmit}>
                {renderStep()}
                <div className="checkbox-group">
                  {currentStep > 1 && (
                    <button type="button" onClick={handlePrevious} className="signup-button">
                      Previous
                    </button>
                  )}
                  {currentStep < 4 && (
                    <button type="button" onClick={handleNext} className="signup-button">
                      Next
                    </button>
                  )}
                  {currentStep === 4 && (
                    <button type="submit" className="signup-button">
                      Submit
                    </button>
                  )}
                </div>
              </form>
              {message && <p className="successMessage">{message}</p>}
              {error && <p className="errorMessage">{error}</p>}
            </div>
          </div>
          <div className="leftBottomContainer">
            <p>© 2024 Rajasthan Pravasi All rights reserved.</p>
            <a className="termsCondition" href="">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div className="registerBoxRight">
          <img className="registerBoxRightImage" src={Namaste} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
