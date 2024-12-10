import React, { useState } from "react";
import axios from "axios";
import Namaste from "../../assets/khamma-ghani-2.png";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./style.scss";
import { Widgets } from "@mui/icons-material";

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
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });

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
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };


  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(4)) {
      return;
    }

    try {
      const response = await axios.post("https://backend.rajasthanpravasi.in/api/users/register", formData);
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.response?.data?.message || "Something went wrong",
        severity: "error",
      });
      // setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        if (!formData.name) {
          setError("Name is required");
          return false;
        }
        if (!formData.email) {
          setError("Email is required");
          return false;
        }
        if (!formData.password) {
          setError("Password is required");
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return false;
        }
        setError(""); // Clear any previous errors
        return true;
      case 2:
        if (!formData.aadharNumber) {
          setError("Aadhar Number is required");
          return false;
        }
        if (!formData.dob) {
          setError("Date of Birth is required");
          return false;
        }
        if (!formData.phone) {
          setError("Phone Number is required");
          return false;
        }
        setError("");
        return true;
      case 3:
        if (!formData.address.street) {
          setError("Street is required");
          return false;
        }
        if (!formData.address.city) {
          setError("City is required");
          return false;
        }
        if (!formData.address.state) {
          setError("State is required");
          return false;
        }
        if (!formData.address.pin) {
          setError("Pin Code is required");
          return false;
        }
        setError("");
        return true;
      case 4:
        if (!formData.familyContact) {
          setError("Family Contact is required");
          return false;
        }
        setError("");
        return true;
      default:
        return true;
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

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({...prev, open: false}));
  }

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

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
        onClose={handleSnackbarClose} severity={Snackbar.severity} sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
