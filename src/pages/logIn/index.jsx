import {React , useState} from 'react'

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Namaste from "../../assets/namaste.png"
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';





import './style.scss'

const Login = () => {

  const [selectedOption, setSelectedOption] = useState("option1");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div className="loginContainer">
      <div className="loginContainerBox">

        <div className="loginBoxLeft">
          <div className="loginBoxLeftContainer">

            <h2>Welcome Back to Rajasthan pravasi</h2>
            <p>We are glad to see you back with us</p>
            <div className="loginSelection">
              <form className='loginSelectionForm'>
          <div className='loginSelectionContainer'>
            <label className='loginSelectionLabel'>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleChange}
                className='radioLogin'
              />
              Login With Email
            </label >
          
            <label className='loginSelectionLabel'>
              <input
                className='radioLogin'
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleChange}
                />
              Login With OTP
            </label>

            
          
          </div>
              </form>


              {/* Tab Section */}
            <div style={{ marginTop: "20px" }}>
              {selectedOption === "option1" && (
                <div className='signInEmailContainer'>
                  <form className="signInForm" action="">
                    <div className="formInput">
                      <FaUser />
                      <input type="text"  placeholder="Email" />
                    </div>
                    <div className="formInput">
                      <FaLock />
                      <input type="text" placeholder='Password'/>
                    </div>
                    <span className='forgetPassword'>Forget Password?</span>
                    <a href="" className='signInButton'>Sign In</a>
                  </form>
                </div>
              )}
              {selectedOption === "option2" && (
                <div className='signInEmailContainer'>
                <form className="otpInForm" action="">
                  <div className="formInput">
                  <FaPhoneAlt />

                    <input type="text"  placeholder="Phone" />
                  </div>
                  
                  <a href="" className='signInButton'>
                  <Link className='signInButtonText' to="/otp">
                    Get OTP
                    </Link>
                    </a>
                </form>
              </div>
              )}
            </div>
              <span  className='loginWithOther'>Login with Other</span>
              <a href="" className='loginWith'><FcGoogle size='30px' /> Login with <b>google</b></a>
              <span  className='signUp'>Don't you have an account? <a href="">Sign up</a></span>

{/* Tab Section End */}
            </div>
          </div>
          <div className="leftBottomContainer">
          <p>© 2024 Rajasthan Pravasi All rights reserved. </p>
          <a className="termsCondition" href="">Terms & Conditions</a>
        </div>

        </div>


        <div className="loginBoxRight">
              <img className='loginBoxRightImage' src={Namaste} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Login